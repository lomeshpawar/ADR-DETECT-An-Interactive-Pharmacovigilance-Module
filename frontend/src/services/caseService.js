import api from './api';
import { FALLBACK_CASES } from '../data/fallbackCases';

export const caseService = {
  getAllCases: async () => {
    try {
      const response = await api.get('/cases');
      if (response.data && response.data.success && response.data.data.length > 0) {
        return { data: response.data.data, isFallback: false };
      }
    } catch (error) {
      console.warn('Backend unavailable, using fallback case bank:', error.message);
    }
    return {
      data: FALLBACK_CASES.map(c => ({
        id: c.id,
        caseNumber: c.caseNumber,
        title: c.title,
        difficulty: c.difficulty,
        category: c.category,
        summary: c.summary,
        patientName: c.patient.name,
        patientAge: c.patient.age,
        patientGender: c.patient.gender
      })),
      isFallback: true
    };
  },

  getCaseById: async (id) => {
    try {
      const response = await api.get(`/cases/${id}`);
      if (response.data && response.data.success && response.data.data) {
        return { data: response.data.data, isFallback: false };
      }
    } catch (error) {
      console.warn(`Backend unavailable for case ${id}, using fallback:`, error.message);
    }
    const found = FALLBACK_CASES.find(c => c.id === Number(id)) || FALLBACK_CASES[0];
    return { data: found, isFallback: true };
  }
};
