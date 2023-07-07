import React, { PureComponent } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from 'src/core/ErrorBoundary/interfaces';

class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            errorCode: '',
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({
            hasError: true,
            errorCode: error.message,
        });

        console.error('Error occurred:', error, errorInfo);
    }

    handleReload = (): void => {
        this.setState({
            hasError: false,
            errorCode: '',
        });
    };

    renderError(): React.ReactNode {
        return (
            <div>
                <p>An error occurred: {this.state.errorCode}</p>
                <button onClick={this.handleReload}>Reload</button>
            </div>
        );
    }

    render() {
        if (this.state.hasError) {
            return this.renderError();
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
