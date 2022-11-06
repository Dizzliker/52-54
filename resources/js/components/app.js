import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { AuthPage } from '../pages';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="page">
                    <AuthPage />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

const root = createRoot(document.querySelector('#root'));
root.render(<App />)
