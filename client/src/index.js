
import ReactDOM from 'react-dom/client'
import './index.css';
import  App from './App';
import { AuthProvider } from './utils/auth'
import { NotesContextProvider } from './utils/noteAuth'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AuthProvider>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
    </AuthProvider>
);
