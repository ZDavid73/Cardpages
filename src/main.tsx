import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './routes/appRoutes';

createRoot(document.getElementById('root')!).render(
  <Router /> 
);