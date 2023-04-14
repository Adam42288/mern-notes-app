
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import { AuthProvider } from './utils/auth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AuthProvider>
        <App />
    </AuthProvider>
);
