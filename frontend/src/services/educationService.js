import api from './api';
import { FALLBACK_REACTION_TYPES } from '../data/fallbackCases';

export const educationService = {
  getReactionTypes: async () => {
    try {
      const response = await api.get('/education/reaction-types');
      if (response.data && response.data.success && response.data.data.length > 0) {
        return { data: response.data.data, isFallback: false };
      }
    } catch (error) {
      console.warn('Backend education fetch failed, using fallback reaction types:', error.message);
    }
    return { data: FALLBACK_REACTION_TYPES, isFallback: true };
  }
};
