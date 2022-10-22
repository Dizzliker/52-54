import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {RegisterPage, LoginPage} from '../pages';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="page">
                    <Routes>
                        <Route path="/"         element={<LoginPage />}/>
                        <Route path="/register" element={<RegisterPage />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

const root = createRoot(document.querySelector('#root'));
root.render(<App />)
