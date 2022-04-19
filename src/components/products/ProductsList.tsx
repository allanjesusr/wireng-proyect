import { FC, useMemo } from 'react';

import { Row } from 'react-bootstrap';

import { getProductsByCategory } from '../../selectors/getProductsByCategory';
import { ProductCard } from './ProductCard';

interface Props {
    category?: string;
}

export const ProductsList: FC<Props> = ({ category = 'Antennas' }) => {

    const products = useMemo(() => getProductsByCategory(category), [category]);

    return (
            <Row xs={1} md={4} xl={6} xxl={8} className="g-4">

                {
                    products.map( ({id, name, description, image}) => (
                        <ProductCard 
                            key={id}
                            id={id}
                            name={name}
                            description={description}
                            image={image}
                        /> 
                    ))
                }

            </Row>

    )
}
