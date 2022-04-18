import { Route, Routes } from 'react-router-dom'

import { HomeScreen } from '../components/HomeScreen'
import { CubeAnt } from '../components/product/old-products/concealed-wall-dome-antennas/CubeAnt'
import { DomeAerial } from '../components/product/old-products/concealed-wall-dome-antennas/DomeAerial'
import { DomeAntAlpha } from '../components/product/old-products/concealed-wall-dome-antennas/DomeAntAlpha'
import { DomeAntDelta } from '../components/product/old-products/concealed-wall-dome-antennas/DomeAntDelta'
import { DomeAntGamma } from '../components/product/old-products/concealed-wall-dome-antennas/DomeAntGamma'
import { WinAerial } from '../components/product/old-products/concealed-wall-dome-antennas/on-window-antennas/WinAerial'
import { WinAerial2 } from '../components/product/old-products/concealed-wall-dome-antennas/on-window-antennas/WinAerial2'
import { Panant } from '../components/product/old-products/concealed-wall-dome-antennas/Panant'
import { WallAnt } from '../components/product/old-products/concealed-wall-dome-antennas/WallAnt'
import { AeriaDesk } from '../components/product/old-products/desktop-portable-antennas/AeriaDesk'
import { AeriaFlex } from '../components/product/old-products/desktop-portable-antennas/AeriaFlex'
import { DeskAnt } from '../components/product/old-products/desktop-portable-antennas/DeskAnt'
import { DomeAnt } from '../components/product/old-products/desktop-portable-antennas/DomeAnt'
import { FlexAnt } from '../components/product/old-products/desktop-portable-antennas/FlexAnt'
import { OmniAnt } from '../components/product/old-products/desktop-portable-antennas/OmniAnt'
import { OmniWide } from '../components/product/old-products/desktop-portable-antennas/OmniWide'
import { SleekAnt } from '../components/product/old-products/desktop-portable-antennas/SleekAnt'
import { Empatch } from '../components/product/old-products/legacy-antennas/Empatch'
import { Maxwimax } from '../components/product/old-products/legacy-antennas/Maxwimax'
import { Micropatch } from '../components/product/old-products/legacy-antennas/Micropatch'
import { Omnimax } from '../components/product/old-products/legacy-antennas/Omnimax'
import { Winmax } from '../components/product/old-products/legacy-antennas/Winmax'
import { AeriaLight } from '../components/product/old-products/pole-mast-mount-antennas/AeriaLight'
import { AeriaLight2 } from '../components/product/old-products/pole-mast-mount-antennas/AeriaLight2'
import { AeriaLight2Plus } from '../components/product/old-products/pole-mast-mount-antennas/AeriaLight2Plus'
import { AeriaLightMini } from '../components/product/old-products/pole-mast-mount-antennas/AeriaLightMini'
import { AeriaLightPlus } from '../components/product/old-products/pole-mast-mount-antennas/AeriaLightPlus'
import { AeriaLog } from '../components/product/old-products/pole-mast-mount-antennas/AeriaLog'
import { AeriaLogLight } from '../components/product/old-products/pole-mast-mount-antennas/AeriaLogLight'
import { AeriaWide } from '../components/product/old-products/pole-mast-mount-antennas/AeriaWide'
import { Giant } from '../components/product/old-products/pole-mast-mount-antennas/Giant'
import { WideAnt } from '../components/product/old-products/pole-mast-mount-antennas/WideAnt'
import { WideAntLite } from '../components/product/old-products/pole-mast-mount-antennas/WideAntLite'
import { YagiMax } from '../components/product/old-products/pole-mast-mount-antennas/Yagimax'
import { YagirefLite } from '../components/product/old-products/pole-mast-mount-antennas/YagirefLite'
import { YagirefPlus } from '../components/product/old-products/pole-mast-mount-antennas/YagirefPlus'
import { YagirefQLP } from '../components/product/old-products/pole-mast-mount-antennas/YagirefQLP'
import { ProductScreen } from '../components/products/ProductScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Footer } from '../components/ui/Footer'
import { NavbarComponent } from '../components/ui/NavbarComponent'
import { AboutScreen } from '../components/ux/AboutScreen'
import { ContactScreen } from '../components/ux/ContactScreen'
import { Newsletter } from '../components/ux/Newsletter'
import { ProductRoutes } from './ProductRoutes';

export const DashboardRoutes = () => {
    return (
        <>
            <NavbarComponent />

            <Routes>

                <Route path="home" element={ <HomeScreen /> }/>
                <Route path="search" element={ <SearchScreen /> }/>
                <Route path="product/:productId" element={ <ProductScreen /> }/>
                <Route path="products/*" element={ <ProductRoutes /> }/>
                <Route path="about-wireng/" element={ <AboutScreen /> }/>

                {/* CONTACT US */}
                <Route path="get-in-touch/" element={ <ContactScreen /> }/>
                <Route path="subscribe-to-newsletter/" element={ <Newsletter /> }/>

                {/* OLD PRODUCTS */}
                <Route path="aeriadesk/" element={ <AeriaDesk /> }/>
                <Route path="aeriaflex/" element={ <AeriaFlex /> }/>
                <Route path="deskant/" element={ <DeskAnt /> }/>
                <Route path="domeant/" element={ <DomeAnt /> }/>
                <Route path="flexant/" element={ <FlexAnt /> }/>
                <Route path="omniant/" element={ <OmniAnt /> }/>
                <Route path="omniwide/" element={ <OmniWide /> }/>
                <Route path="sleekant/" element={ <SleekAnt /> }/>
                <Route path="empatch-v/" element={ <Empatch /> }/>
                <Route path="micropatch/" element={ <Micropatch /> }/>
                <Route path="maxwimax/" element={ <Maxwimax /> }/>
                <Route path="omnimax/" element={ <Omnimax /> }/>
                <Route path="winmax/" element={ <Winmax /> }/>
                <Route path="domeant-alpha/" element={ <DomeAntAlpha /> }/>
                <Route path="domeant-delta/" element={ <DomeAntDelta /> }/>
                <Route path="domeant-gamma/" element={ <DomeAntGamma /> }/>
                <Route path="domeaerial/" element={ <DomeAerial /> }/>
                <Route path="cubeant/" element={ <CubeAnt /> }/>
                <Route path="panelant/" element={ <Panant /> }/>
                <Route path="wallant/" element={ <WallAnt /> }/>
                <Route path="winaerial/" element={ <WinAerial /> }/>
                <Route path="winaerial2/" element={ <WinAerial2 /> }/>
                <Route path="aerialight/" element={ <AeriaLight /> }/>
                <Route path="aerialight2/" element={ <AeriaLight2 /> }/>
                <Route path="aerialight-plus/" element={ <AeriaLightPlus /> }/>
                <Route path="aerialight2-plus/" element={ <AeriaLight2Plus /> }/>
                <Route path="aerialight-mini/" element={ <AeriaLightMini /> }/>
                <Route path="aerialog/" element={ <AeriaLog /> }/>
                <Route path="aerialog-lite/" element={ <AeriaLogLight /> }/>
                <Route path="aeriawide75/" element={ <AeriaWide /> }/>
                <Route path="giant/" element={ <Giant /> }/>
                <Route path="wideant/" element={ <WideAnt /> }/>
                <Route path="wideant-light/" element={ <WideAntLite /> }/>
                <Route path="yagiref-qlp/" element={ <YagirefQLP /> }/>
                <Route path="yagimax/" element={ <YagiMax /> }/>
                <Route path="yagiref-plus/" element={ <YagirefPlus /> }/>
                <Route path="yagiref-lite/" element={ <YagirefLite /> }/>

            </Routes>

            <Footer />
        </>
    )
}
