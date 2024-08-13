import { exportDashboards } from '../../src/domain/useCases/exportDashboards';
import fs from 'fs';
import path from 'path';

jest.mock('fs');

test('exportDashboards cria arquivos corretamente', async () => {
  const mockFetchDashboards = jest.fn().mockResolvedValue([
    { uid: '123', title: 'Test Dashboard' }
  ]);
  const mockFetchDashboard = jest.fn().mockResolvedValue({
    dashboard: { uid: '123', title: 'Test Dashboard' }
  });
  (import('../../src/data/dashboardRepository') as any).fetchDashboards = mockFetchDashboards;
  (import('../../src/data/dashboardRepository') as any).fetchDashboard = mockFetchDashboard;

  await exportDashboards('mockDir');

  expect(fs.mkdirSync).toHaveBeenCalledWith('mockDir', { recursive: true });
  expect(fs.writeFileSync).toHaveBeenCalledWith(
    path.join('mockDir', 'dashboard_123.json'),
    expect.any(String)
  );
});
