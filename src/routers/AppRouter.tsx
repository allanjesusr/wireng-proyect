import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomeScreen } from "../components/HomeScreen";
import { Landing } from "../components/ui/Landing";
import { AboutScreen } from "../components/ux/AboutScreen";
import { ContactScreen } from "../components/ux/ContactScreen";
import { Newsletter } from "../components/ux/Newsletter";

// Old Products imports

import { AeriaDesk } from '../components/products/old-products/desktop-portable-antennas/AeriaDesk';
import { AeriaFlex } from "../components/products/old-products/desktop-portable-antennas/AeriaFlex";
import { DeskAnt } from "../components/products/old-products/desktop-portable-antennas/DeskAnt";
import { DomeAnt } from "../components/products/old-products/desktop-portable-antennas/DomeAnt";
import { FlexAnt } from "../components/products/old-products/desktop-portable-antennas/FlexAnt";
import { OmniAnt } from "../components/products/old-products/desktop-portable-antennas/OmniAnt";
import { OmniWide } from "../components/products/old-products/desktop-portable-antennas/OmniWide";
import { SleekAnt } from "../components/products/old-products/desktop-portable-antennas/SleekAnt";
import { Empatch } from "../components/products/old-products/legacy-antennas/Empatch";
import { Micropatch } from "../components/products/old-products/legacy-antennas/Micropatch";
import { Maxwimax } from "../components/products/old-products/legacy-antennas/Maxwimax";
import { Omnimax } from "../components/products/old-products/legacy-antennas/Omnimax";
import { Winmax } from "../components/products/old-products/legacy-antennas/Winmax";
import { DomeAntAlpha } from "../components/products/old-products/concealed-wall-dome-antennas/DomeAntAlpha";
import { DomeAntDelta } from "../components/products/old-products/concealed-wall-dome-antennas/DomeAntDelta";
import { DomeAntGamma } from '../components/products/old-products/concealed-wall-dome-antennas/DomeAntGamma';
import { DomeAerial } from '../components/products/old-products/concealed-wall-dome-antennas/DomeAerial';
import { CubeAnt } from "../components/products/old-products/concealed-wall-dome-antennas/CubeAnt";
import { Panant } from "../components/products/old-products/concealed-wall-dome-antennas/Panant";
import { WallAnt } from "../components/products/old-products/concealed-wall-dome-antennas/WallAnt";
import { WinAerial2 } from "../components/products/old-products/concealed-wall-dome-antennas/on-window-antennas/WinAerial2";
import { WinAerial } from "../components/products/old-products/concealed-wall-dome-antennas/on-window-antennas/WinAerial";
import { AeriaLight } from '../components/products/old-products/pole-mast-mount-antennas/AeriaLight';
import { AeriaLight2 } from '../components/products/old-products/pole-mast-mount-antennas/AeriaLight2';
import { AeriaLightPlus } from '../components/products/old-products/pole-mast-mount-antennas/AeriaLightPlus';
import { AeriaLight2Plus } from '../components/products/old-products/pole-mast-mount-antennas/AeriaLight2Plus';
import { AeriaLightMini } from '../components/products/old-products/pole-mast-mount-antennas/AeriaLightMini';
import { AeriaLog } from "../components/products/old-products/pole-mast-mount-antennas/AeriaLog";
import { AeriaLogLight } from "../components/products/old-products/pole-mast-mount-antennas/AeriaLogLight";
import { AeriaWide } from "../components/products/old-products/pole-mast-mount-antennas/AeriaWide";
import { Giant } from "../components/products/old-products/pole-mast-mount-antennas/Giant";
import { WideAnt } from "../components/products/old-products/pole-mast-mount-antennas/WideAnt";
import { WideAntLite } from "../components/products/old-products/pole-mast-mount-antennas/WideAntLite";
import { YagirefQLP } from "../components/products/old-products/pole-mast-mount-antennas/YagirefQLP";
import { YagirefPlus } from "../components/products/old-products/pole-mast-mount-antennas/YagirefPlus";
import { YagirefLite } from "../components/products/old-products/pole-mast-mount-antennas/YagirefLite";
import { YagiMax } from "../components/products/old-products/pole-mast-mount-antennas/Yagimax";

// New Products imports

import { WideAnt5G } from "../components/products/directional-ultra-wide-band-antennas/single-directional-antennas/WideAnt5G";
import { WideAntPlus5G } from "../components/products/directional-ultra-wide-band-antennas/single-directional-antennas/WideAntPlus5G";
import { GiAnt5G } from "../components/products/directional-ultra-wide-band-antennas/single-directional-antennas/GiAnt5G";
import { WideAnt25GPlus } from "../components/products/directional-ultra-wide-band-antennas/mimo-2x2-directional-antennas/WideAnt25GPlus";
import { WideAnt25G } from '../components/products/directional-ultra-wide-band-antennas/mimo-2x2-directional-antennas/WideAnt25G';
import { WideAnt2Plus5GRef } from '../components/products/directional-ultra-wide-band-antennas/mimo-2x2-directional-antennas/WideAnt2Plus5GRef';
import { WideAnt45G4x2 } from '../components/products/directional-ultra-wide-band-antennas/mimo-4x2-directional-antennas/WideAnt45G4x2';
import { WideAnt4Plus5G4x2 } from '../components/products/directional-ultra-wide-band-antennas/mimo-4x2-directional-antennas/WideAnt4Plus5G4x2';
import { WideAnt45G4x4 } from "../components/products/directional-ultra-wide-band-antennas/mimo-4x4-directional-antennas/WideAnt45G4x4";
import { WideAnt4Plus5G4x4 } from "../components/products/directional-ultra-wide-band-antennas/mimo-4x4-directional-antennas/WideAnt4Plus5G4x4";
import { WideAnt85G8x2 } from "../components/products/directional-ultra-wide-band-antennas/mimo-8x2-directional-antennas/WideAnt85G8x2";
import { WideAnt8Plus5G8x2 } from "../components/products/directional-ultra-wide-band-antennas/mimo-8x2-directional-antennas/WideAnt8Plus5G8x2";
import { WideAnt85G8x4 } from "../components/products/directional-ultra-wide-band-antennas/mimo-8x4-directional-antennas/WideAnt85G8x4";
import { WideAnt8Plus5G8x4 } from "../components/products/directional-ultra-wide-band-antennas/mimo-8x4-directional-antennas/WideAnt8Plus5G8x4";
import { WideAnt85G8x8 } from "../components/products/directional-ultra-wide-band-antennas/mimo-8x8-directional-antennas/WideAnt85G8x8";
import { WideAnt8Plus5G8x8 } from "../components/products/directional-ultra-wide-band-antennas/mimo-8x8-directional-antennas/WideAnt8Plus5G8x8";
import { Omnirial25G } from "../components/products/omnidirectional-ultrawide-band-antennas/mimo-2x2-omni-antennas/Omnirial25G";
import { Omnirial2Plus5G } from "../components/products/omnidirectional-ultrawide-band-antennas/mimo-2x2-omni-antennas/Omnirial2Plus5G";
import { GigaMimoPlus5G } from "../components/products/omnidirectional-ultrawide-band-antennas/mimo-2x2-omni-antennas/GigaMimoPlus5G";
import { GigaMimo16Plus5G2x2 } from "../components/products/omnidirectional-ultrawide-band-antennas/mimo-2x2-omni-antennas/GigaMimo16Plus5G2x2";
import { Omnirial45G4x2 } from "../components/products/omnidirectional-ultrawide-band-antennas/mimo-4x2-omni-antennas/Omnirial45G4x2";
import { Omnirial4Plus5G4x2 } from '../components/products/omnidirectional-ultrawide-band-antennas/mimo-4x2-omni-antennas/Omnirial4Plus5G4x2';
import { GigaMimo16Plus5G4x2 } from '../components/products/omnidirectional-ultrawide-band-antennas/mimo-4x2-omni-antennas/GigaMimo16Plus5G4x2';
import { Omnirial45G4x4 } from "../components/products/omnidirectional-ultrawide-band-antennas/mimo-4x4-omni-antennas/Omnirial45G4x4";
import { Omnirial4Plus5G4x4 } from "../components/products/omnidirectional-ultrawide-band-antennas/mimo-4x4-omni-antennas/Omnirial4Plus5G4x4";
import { GigaMimo16Plus5G4x4 } from '../components/products/omnidirectional-ultrawide-band-antennas/mimo-4x4-omni-antennas/GigaMimo16Plus5G4x4';
import { Omnirial85G8x2 } from '../components/products/omnidirectional-ultrawide-band-antennas/mimo-8x2-omni-antennas/Omnirial85G8x2';
import { Omnirial8Plus5G8x2 } from '../components/products/omnidirectional-ultrawide-band-antennas/mimo-8x2-omni-antennas/Omnirial8Plus5G8x2';
import { Omnirial85G8x4 } from '../components/products/omnidirectional-ultrawide-band-antennas/mimo-8x4-omni-antennas/Omnirial85G8x4';
import { Omnirial85G8x8 } from "../components/products/omnidirectional-ultrawide-band-antennas/mimo-8x8-omni-antennas/Omnirial85G8x8";
import { Omnirial8Plus5G8x8 } from "../components/products/omnidirectional-ultrawide-band-antennas/mimo-8x8-omni-antennas/Omnirial8Plus5G8x8";
import { Octant5G } from "../components/products/omnidirectional-ultrawide-band-antennas/mimo-8x8-omni-antennas/Octant5G";
import { DroneAnt } from "../components/products/drone-antennas/DroneAnt";
import { DroneAntPlus } from "../components/products/drone-antennas/DroneAntPlus";
import { DroneAnt16 } from "../components/products/drone-antennas/DroneAnt16";
import { DroneAnt16Plus } from "../components/products/drone-antennas/DroneAnt16Plus";
import { Comb25G } from "../components/products/accesories/uwb-combiners/Comb25G";
import { Comb35G } from "../components/products/accesories/uwb-combiners/Comb35G";
import { Comb45G } from "../components/products/accesories/uwb-combiners/Comb45G";
import { LightningPro5GSMA } from "../components/products/accesories/uwb-lightning-strike-arresters/LightningPro5GSMA";
import { WRG400SMAMNM10MAU } from '../components/products/accesories/uwb-coaxial-cables-assemblies/WRG400SMAMNM10MAU';
import { WRG400SMAMNM20MAU } from '../components/products/accesories/uwb-coaxial-cables-assemblies/WRG400SMAMNM20MAU';
import { WRG400SMAMRANM10MAU } from "../components/products/accesories/uwb-coaxial-cables-assemblies/WRG400SMAMRANM10MAU";
import { WRG400SMAMRANM20MAU } from "../components/products/accesories/uwb-coaxial-cables-assemblies/WRG400SMAMRANM20MAU";
import { MimoMount2x2 } from '../components/products/accesories/mimo-brackets/MimoMount2x2';
import { MimoMount4x4 } from '../components/products/accesories/mimo-brackets/MimoMount4x4';
import { MimoMount8x8 } from "../components/products/accesories/mimo-brackets/MimoMount8x8";
import { ExtantSmafSnam } from '../components/products/accesories/everything-else/ExtantSmafSnam';
import { ExtantSmafTncm } from '../components/products/accesories/everything-else/ExtantSmafTncm';
import { ExtantSmafTs9 } from '../components/products/accesories/everything-else/ExtantSmafTs9';


export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Landing /> }/>
          <Route path="/home" element={ <HomeScreen /> }/>

          {/* DIRECTIONAL ULTRA WIDE BAND ANTENNAS */}
          <Route path="/wideant-5g/" element={ <WideAnt5G /> } />
          <Route path="/wideant-plus-5g/" element={ <WideAntPlus5G /> } />
          <Route path="/giant-5g/" element={ <GiAnt5G /> } />
          <Route path="/wideant2-5g/" element={ <WideAnt25G /> } />
          <Route path="/wideant2-plus-5g/" element={ <WideAnt25GPlus /> } />
          <Route path="/wideant2-plus-5g-ref/" element={ <WideAnt2Plus5GRef /> } />
          <Route path="/wideant4-5g-4x2/" element={ <WideAnt45G4x2 /> } />
          <Route path="/wideant4-plus-5g-4x2/" element={ <WideAnt4Plus5G4x2 /> } />
          <Route path="/wideant4-5g-4x4/" element={ <WideAnt45G4x4 /> } />
          <Route path="/wideant4-plus-5g-4x4/" element={ <WideAnt4Plus5G4x4 /> } />
          <Route path="/wideant8-5g-8x2/" element={ <WideAnt85G8x2 /> } />
          <Route path="/wideant8-plus-5g-8x2/" element={ <WideAnt8Plus5G8x2 /> } />
          <Route path="/wideant8-5g-8x4/" element={ <WideAnt85G8x4 /> } />
          <Route path="/wideant8-plus-5g-8x4/" element={ <WideAnt8Plus5G8x4 /> } />
          <Route path="/wideant8-5g-8x8/" element={ <WideAnt85G8x8 /> } />
          <Route path="/wideant8-plus-5g-8x8/" element={ <WideAnt8Plus5G8x8 /> } />

          {/* OMNIDIRECTIONAL ULTRA WIDE BAND ANTENNAS */}
          <Route path="/omnirial2-5g/" element={ <Omnirial25G /> } />
          <Route path="/omnirial2-plus-5g/" element={ <Omnirial2Plus5G /> } />
          <Route path="/gigamimo-plus-5g/" element={ <GigaMimoPlus5G /> } />
          <Route path="/gigamimo16-plus-5g-2x2/" element={ <GigaMimo16Plus5G2x2 /> } />
          <Route path="/omnirial4-5g-4x2/" element={ <Omnirial45G4x2 /> } />
          <Route path="/omnirial4-plus-5g-4x2/" element={ <Omnirial4Plus5G4x2 /> } />
          <Route path="/gigamimo16-plus-5g-4x2/" element={ <GigaMimo16Plus5G4x2 /> } />
          <Route path="/omnirial4-5g-4x4/" element={ <Omnirial45G4x4 /> } />
          <Route path="/omnirial4-plus-5g-4x4/" element={ <Omnirial4Plus5G4x4 /> } />
          <Route path="/gigamimo16-plus-5g-4x4/" element={ <GigaMimo16Plus5G4x4 /> } />
          <Route path="/omnirial8-5g-8x2/" element={ <Omnirial85G8x2 /> } />
          <Route path="/omnirial8-plus-5g-8x2/" element={ <Omnirial8Plus5G8x2 /> } />
          <Route path="/omnirial8-5g-8x4/" element={ <Omnirial85G8x4 /> } />
          <Route path="/omnirial8-5g-8x8/" element={ <Omnirial85G8x8 /> } />
          <Route path="/omnirial8-plus-5g-8x8/" element={ <Omnirial8Plus5G8x8 /> } />
          <Route path="/octant-5g/" element={ <Octant5G /> } />

          {/* DRONE ANTENNA */}
          <Route path="/droneant/" element={ <DroneAnt /> } />
          <Route path="/droneant-plus/" element={ <DroneAntPlus /> } />
          <Route path="/droneant16/" element={ <DroneAnt16 /> } />
          <Route path="/droneant16-plus/" element={ <DroneAnt16Plus /> } />

          {/* ACCESORIES */}
          <Route path="/comb2-5g/" element={ <Comb25G /> } />
          <Route path="/comb3-5g/" element={ <Comb35G /> } />
          <Route path="/comb4-5g/" element={ <Comb45G /> } />
          <Route path="/lightning-pro-5g-sma/" element={ <LightningPro5GSMA /> } />
          <Route path="/wrg400-smam-nm-10m-au/" element={ <WRG400SMAMNM10MAU /> } />
          <Route path="/wrg400-smam-nm-20m-au/" element={ <WRG400SMAMNM20MAU /> } />
          <Route path="/wrg400-smam-ra-nm-10m-au/" element={ <WRG400SMAMRANM10MAU /> } />
          <Route path="/wrg400-smam-ra-nm-20m-au/" element={ <WRG400SMAMRANM20MAU /> } />
          <Route path="/mimomount2x2/" element={ <MimoMount2x2 /> } />
          <Route path="/mimomount4x4/" element={ <MimoMount4x4 /> } />
          <Route path="/mimomount8x8/" element={ <MimoMount8x8 /> } />
          <Route path="/extant-smaf-smam/" element={ <ExtantSmafSnam /> } />
          <Route path="/extant-smaf-tncm/" element={ <ExtantSmafTncm /> } />
          <Route path="/extant-smaf-ts9/" element={ <ExtantSmafTs9 /> } />






          


          {/* CONTACT US */}
          <Route path="/get-in-touch/" element={ <ContactScreen /> }/>
          <Route path="/support/*" element={ <AboutScreen /> }/>
          <Route path="/subscribe-to-newsletter/" element={ <Newsletter /> }/>

          {/* OLD PRODUCTS */}
          <Route path="/aeriadesk/" element={ <AeriaDesk /> }/>
          <Route path="/aeriaflex/" element={ <AeriaFlex /> }/>
          <Route path="/deskant/" element={ <DeskAnt /> }/>
          <Route path="/domeant/" element={ <DomeAnt /> }/>
          <Route path="/flexant/" element={ <FlexAnt /> }/>
          <Route path="/omniant/" element={ <OmniAnt /> }/>
          <Route path="/omniwide/" element={ <OmniWide /> }/>
          <Route path="/sleekant/" element={ <SleekAnt /> }/>
          <Route path="/empatch-v/" element={ <Empatch /> }/>
          <Route path="/micropatch/" element={ <Micropatch /> }/>
          <Route path="/maxwimax/" element={ <Maxwimax /> }/>
          <Route path="/omnimax/" element={ <Omnimax /> }/>
          <Route path="/winmax/" element={ <Winmax /> }/>
          <Route path="/domeant-alpha/" element={ <DomeAntAlpha /> }/>
          <Route path="/domeant-delta/" element={ <DomeAntDelta /> }/>
          <Route path="/domeant-gamma/" element={ <DomeAntGamma /> }/>
          <Route path="/domeaerial/" element={ <DomeAerial /> }/>
          <Route path="/cubeant/" element={ <CubeAnt /> }/>
          <Route path="/panelant/" element={ <Panant /> }/>
          <Route path="/wallant/" element={ <WallAnt /> }/>
          <Route path="/winaerial/" element={ <WinAerial /> }/>
          <Route path="/winaerial2/" element={ <WinAerial2 /> }/>
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
