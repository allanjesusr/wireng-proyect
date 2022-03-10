import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomeScreen } from "../components/HomeScreen";
import { Landing } from "../components/ui/Landing";
import { AboutScreen } from "../components/ux/AboutScreen";
import { ContactScreen } from "../components/ux/ContactScreen";
import { Newsletter } from "../components/ux/Newsletter";
import { AeriaDesk } from '../components/products/wideband-antennas/desktop-portable-antennas/AeriaDesk';
import { AeriaFlex } from "../components/products/wideband-antennas/desktop-portable-antennas/AeriaFlex";
import { DeskAnt } from "../components/products/wideband-antennas/desktop-portable-antennas/DeskAnt";
import { DomeAnt } from "../components/products/wideband-antennas/desktop-portable-antennas/DomeAnt";
import { FlexAnt } from "../components/products/wideband-antennas/desktop-portable-antennas/FlexAnt";
import { OmniAnt } from "../components/products/wideband-antennas/desktop-portable-antennas/OmniAnt";
import { OmniWide } from "../components/products/wideband-antennas/desktop-portable-antennas/OmniWide";
import { SleekAnt } from "../components/products/wideband-antennas/desktop-portable-antennas/SleekAnt";
import { Empatch } from "../components/products/legacy-antennas/Empatch";
import { Micropatch } from "../components/products/legacy-antennas/Micropatch";
import { Maxwimax } from "../components/products/legacy-antennas/Maxwimax";
import { Omnimax } from "../components/products/legacy-antennas/Omnimax";
import { Winmax } from "../components/products/legacy-antennas/Winmax";
import { DomeAntAlpha } from "../components/products/wideband-antennas/concealed-wall-dome-antennas/DomeAntAlpha";
import { DomeAntDelta } from "../components/products/wideband-antennas/concealed-wall-dome-antennas/DomeAntDelta";
import { DomeAntGamma } from '../components/products/wideband-antennas/concealed-wall-dome-antennas/DomeAntGamma';
import { DomeAerial } from '../components/products/wideband-antennas/concealed-wall-dome-antennas/DomeAerial';
import { CubeAnt } from "../components/products/wideband-antennas/concealed-wall-dome-antennas/CubeAnt";
import { Panant } from "../components/products/wideband-antennas/concealed-wall-dome-antennas/Panant";
import { WallAnt } from "../components/products/wideband-antennas/concealed-wall-dome-antennas/WallAnt";
import { WinAerial2 } from "../components/products/wideband-antennas/on-window-antennas/WinAerial2";
import { WinAerial } from "../components/products/wideband-antennas/on-window-antennas/WinAerial";
import { AeriaLight } from '../components/products/wideband-antennas/pole-mast-mount-antennas/AeriaLight';
import { AeriaLight2 } from '../components/products/wideband-antennas/pole-mast-mount-antennas/AeriaLight2';
import { AeriaLightPlus } from '../components/products/wideband-antennas/pole-mast-mount-antennas/AeriaLightPlus';
import { AeriaLight2Plus } from '../components/products/wideband-antennas/pole-mast-mount-antennas/AeriaLight2Plus';
import { AeriaLightMini } from '../components/products/wideband-antennas/pole-mast-mount-antennas/AeriaLightMini';
import { AeriaLog } from "../components/products/wideband-antennas/pole-mast-mount-antennas/AeriaLog";
import { AeriaLogLight } from "../components/products/wideband-antennas/pole-mast-mount-antennas/AeriaLogLight";
import { AeriaWide } from "../components/products/wideband-antennas/pole-mast-mount-antennas/AeriaWide";
import { Giant } from "../components/products/wideband-antennas/pole-mast-mount-antennas/Giant";
import { WideAnt } from "../components/products/wideband-antennas/pole-mast-mount-antennas/WideAnt";
import { WideAntLite } from "../components/products/wideband-antennas/pole-mast-mount-antennas/WideAntLite";
import { YagirefQLP } from "../components/products/wideband-antennas/pole-mast-mount-antennas/YagirefQLP";
import { YagirefPlus } from "../components/products/wideband-antennas/pole-mast-mount-antennas/YagirefPlus";
import { YagirefLite } from "../components/products/wideband-antennas/pole-mast-mount-antennas/YagirefLite";
import { YagiMax } from "../components/products/wideband-antennas/pole-mast-mount-antennas/Yagimax";


export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Landing /> }/>
          <Route path="/home" element={ <HomeScreen /> }/>
          <Route path="/get-in-touch/" element={ <ContactScreen /> }/>
          <Route path="/support/*" element={ <AboutScreen /> }/>
          <Route path="/subscribe-to-newsletter/" element={ <Newsletter /> }/>

          {/* WIDEBAND ANTENNAS  -  DESKTOP/PORTABLE ANTENNA */}
          <Route path="/aeriadesk/" element={ <AeriaDesk /> }/>
          <Route path="/aeriaflex/" element={ <AeriaFlex /> }/>
          <Route path="/deskant/" element={ <DeskAnt /> }/>
          <Route path="/domeant/" element={ <DomeAnt /> }/>
          <Route path="/flexant/" element={ <FlexAnt /> }/>
          <Route path="/omniant/" element={ <OmniAnt /> }/>
          <Route path="/omniwide/" element={ <OmniWide /> }/>
          <Route path="/sleekant/" element={ <SleekAnt /> }/>

          {/* LEGACY ANTENNAS */}
          <Route path="/empatch-v/" element={ <Empatch /> }/>
          <Route path="/micropatch/" element={ <Micropatch /> }/>
          <Route path="/maxwimax/" element={ <Maxwimax /> }/>
          <Route path="/omnimax/" element={ <Omnimax /> }/>
          <Route path="/winmax/" element={ <Winmax /> }/>

          {/* WIDEBAND ANTENNAS - CONCEALED/WALL/DOME ANTENNA */}
          <Route path="/domeant-alpha/" element={ <DomeAntAlpha /> }/>
          <Route path="/domeant-delta/" element={ <DomeAntDelta /> }/>
          <Route path="/domeant-gamma/" element={ <DomeAntGamma /> }/>
          <Route path="/domeaerial/" element={ <DomeAerial /> }/>
          <Route path="/cubeant/" element={ <CubeAnt /> }/>
          <Route path="/panelant/" element={ <Panant /> }/>
          <Route path="/wallant/" element={ <WallAnt /> }/>

          {/* WIDEBAND ANTENNAS - ON WINDOW ANTENNAS */}
          <Route path="/winaerial/" element={ <WinAerial /> }/>
          <Route path="/winaerial2/" element={ <WinAerial2 /> }/>

          {/* WIDEBAND ANTENNAS - POLE/ MAST MOUNT ANTENNAS */}
          <Route path="/aerialight/" element={ <AeriaLight /> }/>
          <Route path="/aerialight2/" element={ <AeriaLight2 /> }/>
          <Route path="/aerialight-plus/" element={ <AeriaLightPlus /> }/>
          <Route path="/aerialight2-plus/" element={ <AeriaLight2Plus /> }/>
          <Route path="/aerialight-mini/" element={ <AeriaLightMini /> }/>
          <Route path="/aerialog/" element={ <AeriaLog /> }/>
          <Route path="/aerialog-lite/" element={ <AeriaLogLight /> }/>
          <Route path="/aeriawide75/" element={ <AeriaWide /> }/>
          <Route path="/giant/" element={ <Giant /> }/>
          <Route path="/wideant/" element={ <WideAnt /> }/>
          <Route path="/wideant-light/" element={ <WideAntLite /> }/>
          <Route path="/yagiref-qlp/" element={ <YagirefQLP /> }/>
          <Route path="/yagimax/" element={ <YagiMax /> }/>
          <Route path="/yagiref-plus/" element={ <YagirefPlus /> }/>
          <Route path="/yagiref-lite/" element={ <YagirefLite /> }/>


        </Routes>
      </BrowserRouter>
    )
}
