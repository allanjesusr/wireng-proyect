import { AppRouter } from './routers/AppRouter';
import { DataContext } from './context/DataContext';

import dataList from './data/data.json';

export const WirengApp = () => {
    
    const data = dataList;

    return (
        
        <DataContext.Provider value={data}>

            <AppRouter />

        </DataContext.Provider>
    )
}
