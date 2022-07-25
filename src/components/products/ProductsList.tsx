import { FC, useMemo } from 'react';

import { Row } from 'react-bootstrap';

import { getProductsByCategory } from '../../selectors/getProductsByCategory';
import { ProductCard } from './ProductCard';
import { categoryProps } from '../../interfaces/interfaces';


export const ProductsList: FC<categoryProps> = ({ category = 'Antennas'}) => {

    const products = useMemo(() => getProductsByCategory(category), [category]);

    return (
        <Row xs={1} md={2} xl={3} xxl={4} className="g-4">

            {
                products.map(({ id, name, short_description, image, shopify }) => (
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

    )
}
