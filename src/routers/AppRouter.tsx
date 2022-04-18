import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Landing } from '../components/ui/Landing';

import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <BrowserRouter>

          <Routes>
            <Route path="/" element={ <Landing /> }/>
            <Route path="/*" element={ <DashboardRoutes /> }/>

          </Routes>
          
        </BrowserRouter>
    )
}
