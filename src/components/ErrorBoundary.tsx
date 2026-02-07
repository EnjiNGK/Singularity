
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-background p-4">
                    <div className="glass-card-enhanced p-8 max-w-md w-full text-center">
                        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-8 h-8 text-destructive" />
                        </div>
                        <h1 className="text-2xl font-bold mb-4 text-foreground">
                            Qualcosa è andato storto
                        </h1>
                        <p className="text-muted-foreground mb-6">
                            Ci scusiamo per l'inconveniente. Si è verificato un errore imprevisto.
                            Prova a ricaricare la pagina.
                        </p>
                        <div className="flex flex-col gap-3">
                            <Button
                                onClick={() => window.location.reload()}
                                className="primary-button-glow flex items-center justify-center gap-2"
                            >
                                <RotateCcw size={18} />
                                Ricarica la pagina
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => window.location.href = '/'}
                                className="glass-button w-full"
                            >
                                Torna alla Home
                            </Button>
                        </div>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mt-8 text-left p-4 bg-muted/50 rounded-lg overflow-auto max-h-40 text-xs font-mono">
                                {this.state.error.toString()}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
