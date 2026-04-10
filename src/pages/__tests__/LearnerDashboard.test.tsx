import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LearnerDashboard from '../LearnerDashboard';
import { AuthProvider } from '../../components/auth/AuthProvider';
import * as learnerApi from '../../lib/learnerApi';

vi.mock('../../lib/learnerApi', () => ({
  getProgressOverview: vi.fn(),
  getProgressTimeline: vi.fn(),
  getCourses: vi.fn(),
  getRecommendedMentors: vi.fn(),
}));

const renderWithContext = (ui: React.ReactElement) => {
    // Isolated client instance per test
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } },
    });
    
    return render(
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <BrowserRouter>
                    {ui}
                </BrowserRouter>
            </AuthProvider>
        </QueryClientProvider>
    );
};

describe('LearnerDashboard Component Layout Resiliency', () => {
    it('does NOT trigger charAt TypeErrors when backend mentors array is corrupted minus the name property', async () => {
        
        // Simulating the exact missing variable UI regression bug gracefully
        vi.spyOn(learnerApi, 'getRecommendedMentors').mockResolvedValue({
            data: [{ id: '99', name: undefined as any, role: 'Data Scientist', img: '' }]
        });
        
        vi.spyOn(learnerApi, 'getProgressOverview').mockResolvedValue({ data: { hoursCompleted: 5, percentile: 7, focus: 2 } });
        vi.spyOn(learnerApi, 'getProgressTimeline').mockResolvedValue({ data: [] });
        vi.spyOn(learnerApi, 'getCourses').mockResolvedValue({ data: [] });

        renderWithContext(<LearnerDashboard />);

        // Instead of crashing, the mentor icon safely defaults to our generic '?' fallback character
        // We look for '?' wrapped inside the span fallback element
        const fallbackText = await screen.findByText('?');
        expect(fallbackText).toBeInTheDocument();
    });
});
