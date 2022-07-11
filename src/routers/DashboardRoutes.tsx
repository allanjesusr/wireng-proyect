import { Route, Routes } from 'react-router-dom';

import { ProductRoutes } from './ProductRoutes';

import { CubeAnt } from '../components/old-products/CubeAnt';
import { DomeAerial } from '../components/old-products/DomeAerial';
import { DomeAntAlpha } from '../components/old-products/DomeAntAlpha';
import { DomeAntDelta } from '../components/old-products/DomeAntDelta';
import { DomeAntGamma } from '../components/old-products/DomeAntGamma';
import { WinAerial } from '../components/old-products/WinAerial';
import { WinAerial2 } from '../components/old-products/WinAerial2';
import { Panant } from '../components/old-products/Panant';
import { WallAnt } from '../components/old-products/WallAnt';
import { AeriaDesk } from '../components/old-products/AeriaDesk';
import { AeriaFlex } from '../components/old-products/AeriaFlex';
import { DeskAnt } from '../components/old-products/DeskAnt';
import { DomeAnt } from '../components/old-products/DomeAnt';
import { FlexAnt } from '../components/old-products/FlexAnt';
import { OmniAnt } from '../components/old-products/OmniAnt';
import { OmniWide } from '../components/old-products/OmniWide';
import { SleekAnt } from '../components/old-products/SleekAnt';
import { Empatch } from '../components/old-products/Empatch';
import { Maxwimax } from '../components/old-products/Maxwimax';
import { Micropatch } from '../components/old-products/Micropatch';
import { Omnimax } from '../components/old-products/Omnimax';
import { Winmax } from '../components/old-products/Winmax';
import { AeriaLight } from '../components/old-products/AeriaLight';
import { AeriaLight2 } from '../components/old-products/AeriaLight2';
import { AeriaLight2Plus } from '../components/old-products/AeriaLight2Plus';
import { AeriaLightMini } from '../components/old-products/AeriaLightMini';
import { AeriaLightPlus } from '../components/old-products/AeriaLightPlus';
import { AeriaLog } from '../components/old-products/AeriaLog';
import { AeriaLogLight } from '../components/old-products/AeriaLogLight';
import { AeriaWide } from '../components/old-products/AeriaWide';
import { Giant } from '../components/old-products/Giant';
import { WideAnt } from '../components/old-products/WideAnt';
import { WideAntLite } from '../components/old-products/WideAntLite';
import { YagiMax } from '../components/old-products/Yagimax';
import { YagirefLite } from '../components/old-products/YagirefLite';
import { YagirefPlus } from '../components/old-products/YagirefPlus';
import { YagirefQLP } from '../components/old-products/YagirefQLP';
import { ProductScreen } from '../components/products/ProductScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Footer } from '../components/ui/Footer';
import { NavbarComponent } from '../components/ui/NavbarComponent';
import { AboutScreen } from '../components/about/AboutScreen';

import { HomeScreen } from '../components/HomeScreen';
import { DealerLocator } from '../components/locator/DealerLocator';
import { NotFound } from '../components/not-found/NotFound';
import { AffiliateProposal, B2bOemInquiery, CustomProductInquiry, DistributorshipInquiry, GovermmentInquiry, ResellershipInquiry } from '../components/services';
import { PostSalesSupport, PreSalesSupport, ContactScreen } from '../components/contact';

export const DashboardRoutes = () => {
    return (
        <>
            <NavbarComponent />

            <Routes>
                <Route path="" element={ <HomeScreen /> }/>
                <Route path="search" element={ <SearchScreen /> }/>
                <Route path="products/:productId" element={ <ProductScreen /> }/>
                <Route path="all-products/*" element={ <ProductRoutes /> }/>
                <Route path="about-wireng/" element={ <AboutScreen /> }/>
                <Route path="404" element={ <NotFound /> }/>

                {/* CONTACT US */}
                <Route path="get-in-touch/" element={ <ContactScreen /> }/>
                <Route path="pre-sales-support/" element={ <PreSalesSupport /> }/>
                <Route path="support/" element={ <PostSalesSupport /> }/>
                <Route path="affiliate-proposal/" element={ <AffiliateProposal /> }/>

                {/* SERVICES */}
                <Route path="custom-product-inquiry/" element={ <CustomProductInquiry />}/>
                <Route path="government-military-inquiry/" element={ <GovermmentInquiry />}/>
                <Route path="b2b-oem-inquiry/" element={ <B2bOemInquiery />}/>
                <Route path="resellership-inquiry/" element={ <ResellershipInquiry />}/>
                <Route path="distributorship-inquiry/" element={ <DistributorshipInquiry />}/>
                <Route path="affiliate-partnership-proposal/" element={ <AffiliateProposal />}/>

                {/* LOCATOR */}

                <Route path="dealer-locator/" element={ <DealerLocator />}/>

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
