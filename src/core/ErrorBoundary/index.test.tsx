import React from 'react';
import { render, screen } from '@testing-library/react';

import ErrorBoundary from './index';

describe('ErrorBoundary', () => {
    it('renders children when there is no error', () => {
        render(
            <ErrorBoundary>
                <div>Children component</div>
            </ErrorBoundary>,
        );

        const childrenComponent = screen.getByText('Children component', { exact: true });
        expect(childrenComponent).toBeTruthy();
    });
});
