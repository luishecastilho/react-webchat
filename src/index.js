import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const chatContainer = document.createElement('div');
chatContainer.id = 'chatbox';
document.body.appendChild(chatContainer);

const root = ReactDOM.createRoot(chatContainer);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
