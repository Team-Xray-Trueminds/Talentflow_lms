import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class GlobalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F7F9FB] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white p-12 rounded-[40px] shadow-2xl border border-[#E0E3E5]/50 animate-scale-in">
            <div className="w-20 h-20 bg-[#FFDAD6] rounded-[2.5rem] flex items-center justify-center text-[#BA1A1A] mx-auto mb-8">
              <span className="material-symbols-outlined text-4xl">error</span>
            </div>
            <h1 className="text-3xl font-black text-[#191C1E] font-headline tracking-tight mb-4">Architectural Fault</h1>
            <p className="text-[#434653] font-medium leading-relaxed mb-8">
              We encountered an unexpected structural error. Our curators have been notified.
            </p>
            <div className="space-y-4">
              <button 
                onClick={() => window.location.reload()}
                className="w-full py-4 bg-[#00327D] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#00327D]/20 transition-all hover:scale-[1.02] active:scale-95 border-none cursor-pointer"
              >
                Rebuild Interface
              </button>
              <Link 
                to="/"
                className="block w-full py-4 text-[#00327D] font-black text-[10px] uppercase tracking-widest hover:underline no-underline"
              >
                Return to Campus
              </Link>
            </div>
            {import.meta.env.DEV && (
              <pre className="mt-8 p-4 bg-[#F2F4F6] rounded-xl text-[10px] text-left overflow-auto text-[#BA1A1A]">
                {this.state.error?.message}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
