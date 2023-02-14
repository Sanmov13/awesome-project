import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError/ui/PageError';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
        // You can render any custom fallback UI
            // eslint-disable-next-line i18next/no-literal-string
            return <Suspense fallback=""><PageError /></Suspense>;
        }

        // eslint-disable-next-line react/jsx-no-useless-fragment, react/destructuring-assignment
        return <>{this.props.children}</>;
    }
}

export default ErrorBoundary;
