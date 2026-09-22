import api from './api';

export const scoreService = {
  getUserStats: async (userId = 'student-demo') => {
    try {
      const response = await api.get('/scores/stats', { params: { userId } });
      if (response.data && response.data.success) {
        return { data: response.data.data, isFallback: false };
      }
    } catch (error) {
      console.warn('Backend score stats failed, using local stored stats:', error.message);
    }

    const storedScores = JSON.parse(localStorage.getItem('adr_detect_scores') || '[]');
    const totalCases = 5;
    const completedCount = new Set(storedScores.map(s => s.caseId)).size;
    const avgScore = storedScores.length > 0 
      ? Math.round((storedScores.reduce((acc, s) => acc + s.totalScore, 0) / storedScores.length) * 10) / 10
      : 0;
    const bestScore = storedScores.length > 0 
      ? Math.max(...storedScores.map(s => s.totalScore))
      : 0;

    const badges = [];
    if (completedCount > 0) badges.push('ADR Detective');
    if (avgScore >= 80) badges.push('Causality Expert');
    if (completedCount >= 3) badges.push('Safe Pharmacist');
    if (bestScore >= 95) badges.push('Reporting Champion');

    return {
      data: {
        casesCompleted: completedCount,
        totalCases,
        averageScore: avgScore,
        bestScore,
        badges,
        recentScores: storedScores.slice(0, 5)
      },
      isFallback: true
    };
  },

  saveLocalScore: (scoreData) => {
    try {
      const stored = JSON.parse(localStorage.getItem('adr_detect_scores') || '[]');
      stored.unshift({
        id: Date.now(),
        caseId: scoreData.caseId,
        caseTitle: scoreData.caseTitle,
        totalScore: scoreData.totalScore,
        maxScore: scoreData.maxScore,
        percentage: scoreData.percentage,
        stars: scoreData.stars,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('adr_detect_scores', JSON.stringify(stored));
    } catch (e) {
      console.error('Failed to save to local storage', e);
    }
  }
};
