import api from './api';
import { calculateLocalScore } from '../utils/scoring';

export const assessmentService = {
  submitAssessment: async (caseId, payload) => {
    try {
      const response = await api.post(`/cases/${caseId}/assessment`, payload);
      if (response.data && response.data.success) {
        return { data: response.data.data, isFallback: false };
      }
    } catch (error) {
      console.warn('Backend assessment submission failed, using local scoring engine:', error.message);
    }
    const localResult = calculateLocalScore(caseId, payload);
    return { data: localResult, isFallback: true };
  }
};
