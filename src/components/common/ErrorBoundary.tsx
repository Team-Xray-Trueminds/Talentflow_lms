import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error bound by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F2F4F6] flex flex-col items-center justify-center p-6 text-center font-sans tracking-[-0.02em]">
          <div className="bg-white p-12 rounded-[2rem] shadow-ambient max-w-lg w-full relative overflow-hidden border border-red-50">
            {/* Warning visual cue */}
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl">error</span>
              </div>
              
              <h2 className="text-2xl font-black text-[#191C1E] tracking-tight mb-2">Unexpected Error</h2>
              <p className="text-[#74777F] mb-6 leading-relaxed text-sm">
                A rendering anomaly occurred within the application layout. Our diagnostics caught the disruption to prevent further instability.
              </p>

              {this.state.error && (
                <div className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 mb-8 text-left overflow-hidden">
                   <p className="text-xs font-mono text-gray-500 break-words line-clamp-3">
                     {this.state.error.toString()}
                   </p>
                </div>
              )}
              
              <button 
                onClick={() => window.location.reload()}
                className="w-full flex items-center justify-center gap-2 bg-[#191C1E] text-white py-4 px-6 rounded-2xl font-bold shadow-soft hover:translate-y-[-2px] hover:shadow-ambient transition-all"
              >
                <span className="material-symbols-outlined text-sm">refresh</span> Reset Interface
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
