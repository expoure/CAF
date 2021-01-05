import React, { Suspense } from 'react';
import { render } from 'react-dom';
import './index.css';
import { AuthProvider } from './contexts/auth.context'
import { MessageProvider } from './contexts/message.context'
import { Routes } from './routes'
import { Provider } from 'react-redux'
import { store } from './redux'
import './i18n'

render(
    <Provider store={store}>
        <AuthProvider>
            <MessageProvider>
                <Suspense fallback={<div>Loading</div>}>
                    <Routes />
                </Suspense>
            </MessageProvider>
        </AuthProvider>
    </Provider>,
    document.getElementById('root')
);
    