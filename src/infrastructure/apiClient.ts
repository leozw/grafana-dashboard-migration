import axios from 'axios';
import { config } from '../config/config';

// Create a separate client for each URL (source and destination)
export const sourceApiClient = axios.create({
  baseURL: config.sourceUrl,
  headers: {
    'Authorization': `Bearer ${config.sourceApiKey}`,
    'Content-Type': 'application/json',
  },
});

export const destApiClient = axios.create({
  baseURL: config.destUrl,
  headers: {
    'Authorization': `Bearer ${config.destApiKey}`,
    'Content-Type': 'application/json',
  },
});
