import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

let root = ReactDOM.createRoot(document.getElementById('root'));                       


root.render(                                                                           
    <>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </>
    
)