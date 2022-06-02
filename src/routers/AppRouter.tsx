import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from '../components/ui/ScrollToTop';

import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>

          <Route path="/*" element={<DashboardRoutes />} />

        </Routes>


      </ScrollToTop>
    </BrowserRouter>
  )
}
