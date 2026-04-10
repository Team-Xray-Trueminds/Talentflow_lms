import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getProgressOverview, getCourses } from './learnerApi';
import { apiRequest } from './api';

vi.mock('./api', () => ({
  apiRequest: vi.fn(),
}));

describe('learnerApi Data Endpoints', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches recommended courses cleanly using auth token tracking', async () => {
    const mockPayload = { data: [{ id: '1', title: 'Intro', category: 'Math', level: 'Beginner', thumbnailUrl: 'test.jpg' }] };
    (apiRequest as any).mockResolvedValue(mockPayload);
    
    const result = await getCourses('dummy_token');
    
    expect(apiRequest).toHaveBeenCalledWith('/courses/recommended', {
      method: 'GET',
      token: 'dummy_token'
    });
    expect(result.data).toHaveLength(1);
    expect(result.data[0].title).toBe('Intro');
  });

  it('retrieves and maps progress overview payload without runtime collision', async () => {
    const mockPayload = { data: { hoursCompleted: 10, percentile: 90, focus: 8, activeCourse: 'React' } };
    (apiRequest as any).mockResolvedValue(mockPayload);
    
    const result = await getProgressOverview('dummy_token');
    
    expect(apiRequest).toHaveBeenCalledWith('/progress/overview', {
      method: 'GET',
      token: 'dummy_token'
    });
    expect(result.data.percentile).toBe(90);
  });
});
