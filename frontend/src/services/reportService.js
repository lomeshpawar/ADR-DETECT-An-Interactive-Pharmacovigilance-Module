import api from './api';

export const reportService = {
  submitReport: async (payload) => {
    try {
      const response = await api.post('/reports', payload);
      if (response.data && response.data.success) {
        return { data: response.data.data, isFallback: false };
      }
    } catch (error) {
      console.warn('Backend report submission failed, using local confirmation:', error.message);
    }
    return {
      data: {
        id: Date.now(),
        ...payload,
        submittedAt: new Date().toISOString()
      },
      isFallback: true
    };
  }
};
