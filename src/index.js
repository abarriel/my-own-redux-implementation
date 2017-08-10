import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Provider from './provider';
import { createStore } from './store';
import App from './App';

const initialState = { title: 'COUCOU....' };
const store = createStore(initialState);

const root = (
    <Provider store={store}>
        <App />
    </Provider>
);

const mountNode = document.getElementById('root');
render(root, mountNode);
