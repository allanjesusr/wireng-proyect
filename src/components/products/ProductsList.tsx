import { FC, useMemo, useState } from 'react';

import { Row } from 'react-bootstrap';

import { getProductsByCategory } from '../../selectors/getProductsByCategory';
import { ProductCard } from './ProductCard';
import { categoryProps } from '../../interfaces/interfaces';
import { getProductsByType } from '../../selectors/getProductsByType';
import { getProductsByGain } from '../../selectors/getProductsByGain';
import { getProductsByMimo } from '../../selectors/getProductsByMimo';
import { getProductsByUsage } from '../../selectors/getProductsByUsage';


export const ProductsList: FC<categoryProps> = ({ category = 'Antennas', type, gain, mimo, usage}) => {

    const [productsByCategories, setProductsByCategories] = useState([]);

    const productsCategory = useMemo(() => getProductsByCategory(category), [category]);
    const productsByType = getProductsByType(type as string);
    const productsByGain = getProductsByGain(gain as string);
    const productsByMimo = getProductsByMimo(mimo as string);
    const productsByUsage = getProductsByUsage(usage as string[]);


    return (
        <>
            {
                (type != '' ) ?
                    <Row xs={1} md={2} xl={3} xxl={4} className="g-4">

                        {
                            productsByType.map(({ id, name, short_description, image, shopify }) => (
                                <ProductCard
                                    key={id}
                                    id={id}
                                    name={name}
                                    short_description={short_description}
                                    image={image}
                                    shopify={shopify}
                                />
                            ))
                        }

                    </Row>
                    :
                    (gain != '') ?
                        <Row xs={1} md={2} xl={3} xxl={4} className="g-4">

                            {
                                productsByGain.map(({ id, name, short_description, image, shopify }) => (
                                    <ProductCard
                                        key={id}
                                        id={id}
                                        name={name}
                                        short_description={short_description}
                                        image={image}
                                        shopify={shopify}
                                    />
                                ))
                            }

                        </Row>
                        :
                        (mimo != '') ?
                        <Row xs={1} md={2} xl={3} xxl={4} className="g-4">

                            {
                                productsByMimo.map(({ id, name, short_description, image, shopify }) => (
                                    <ProductCard
                                        key={id}
                                        id={id}
                                        name={name}
                                        short_description={short_description}
                                        image={image}
                                        shopify={shopify}
                                    />
                                ))
                            }

                        </Row>
                        :
                        <Row xs={1} md={2} xl={3} xxl={4} className="g-4">

                            {
                                productsCategory.map(({ id, name, short_description, image, shopify }) => (
                                    <ProductCard
                                        key={id}
                                        id={id}
                                        name={name}
                                        short_description={short_description}
                                        image={image}
                                        shopify={shopify}
                                    />
                                ))
                            }

                        </Row>
            }

            {/* {
                (gain != '' ) ?
                <Row xs={1} md={2} xl={3} xxl={4} className="g-4">

                        {
                            productsByGain.map(({ id, name, short_description, image, shopify }) => (
                                <ProductCard
                                    key={id}
                                    id={id}
                                    name={name}
                                    short_description={short_description}
                                    image={image}
                                    shopify={shopify}
                                />
                            ))
                        }

                    </Row>
                    : 
                    <Row xs={1} md={2} xl={3} xxl={4} className="g-4">

                        {
                            productsCategory.map(({ id, name, short_description, image, shopify }) => (
                                <ProductCard
                                    key={id}
                                    id={id}
                                    name={name}
                                    short_description={short_description}
                                    image={image}
                                    shopify={shopify}
                                />
                            ))
                        }

                    </Row>
            } */}
        </>

    )
}
