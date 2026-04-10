import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ErrorBoundary from '../ErrorBoundary';

const MaliciousComponent = () => {
    throw new Error('Simulated Hard Crash');
};

describe('Global ErrorBoundary Resiliency', () => {
    it('catches crashes and renders a fallback UI instead of unmounting the DOM', () => {
        // Prevent console.error noise locally during intentional throw
        const originalError = console.error;
        console.error = vi.fn();
        
        render(
            <ErrorBoundary>
                <MaliciousComponent />
            </ErrorBoundary>
        );

        // Fallback interface assertions
        expect(screen.getByText(/Unexpected Error/i)).toBeInTheDocument();
        expect(screen.getByText(/Simulated Hard Crash/i)).toBeInTheDocument();

        // Restore context
        console.error = originalError;
    });

    it('renders normal children if no crash occurs gracefully', () => {
        render(
            <ErrorBoundary>
                <div>Safe Clean Render</div>
            </ErrorBoundary>
        );

        expect(screen.getByText(/Safe Clean Render/i)).toBeInTheDocument();
        expect(screen.queryByText(/Unexpected Error/i)).not.toBeInTheDocument();
    });
});
