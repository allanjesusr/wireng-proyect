import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DashboardRoutes } from './DashboardRoutes';
import { HomeScreen } from '../components/HomeScreen';


export const AppRouter = () => {
    return (
        <BrowserRouter>

          <Routes>
            
            <Route path="/*" element={ <DashboardRoutes /> }/>

          </Routes>
          
        </BrowserRouter>
    )
}
