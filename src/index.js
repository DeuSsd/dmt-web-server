import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Body/pages/App';
import state from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App state = {state}/>
);



