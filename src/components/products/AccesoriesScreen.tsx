
import { ProductsList } from './ProductsList';

export const AccesoriesScreen = () => {
    return (
        <div className="layout__container">
            
            <div className="d-flex justify-content-center mt-5 mb-5">

                <h1>Antenna Accesories by WirEng®</h1>

            </div>

            <ProductsList category="Antenna Accesories"/>
        </div>
    )
}
