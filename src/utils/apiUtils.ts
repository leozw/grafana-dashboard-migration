import axios from 'axios';
import { config } from '../config/config';

const apiClient = axios.create({
  baseURL: config.sourceUrl,
  headers: {
    'Authorization': `Bearer ${config.sourceApiKey}`,
    'Content-Type': 'application/json'
  }
});

export async function fetchDashboards() {
  const response = await apiClient.get('/api/search?type=dash-db');
  return response.data;
}

export async function fetchDashboard(uid: string) {
  const response = await apiClient.get(`/api/dashboards/uid/${uid}`);
  return response.data;
}

export async function importDashboard(destUrl: string, apiKey: string, data: any) {
  const response = await axios.post(`${destUrl}/api/dashboards/import`, data, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export async function exportDashboard(uid: string) {
  try {
    const response = await apiClient.get(`/api/dashboards/uid/${uid}`);
    return response.data.dashboard;
  } catch (error) {
    console.error('Error exporting dashboard:', error);
    throw error;
  }
}

export async function fetchDashboardForExport(uid: string) {
  try {
    const response = await apiClient.get(`/api/dashboards/uid/${uid}`);
    return response.data.dashboard;
  } catch (error) {
    console.error('Error exporting dashboard:', error);
    throw error;
  }
}