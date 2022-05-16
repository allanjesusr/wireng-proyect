import { FC, useMemo } from 'react';

import { Row } from 'react-bootstrap';

import { getProductsByCategory } from '../../selectors/getProductsByCategory';
import { ProductCard } from './ProductCard';

interface Props {
    category: string;
}

export const ProductsList: FC<Props> = ({ category = 'Antennas'}) => {

    const products = useMemo(() => getProductsByCategory(category), [category]);

    return (
        <Row xs={1} md={2} xl={3} xxl={4} className="g-4">

            {
                products.map(({ id, name, purpose, image }) => (
                    <ProductCard
                        key={id}
                        id={id}
                        name={name}
                        purpose={purpose}
                        image={image}
                    />
                ))
            }

        </Row>

    )
}
