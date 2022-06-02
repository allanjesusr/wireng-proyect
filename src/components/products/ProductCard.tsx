import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Card } from 'react-bootstrap';

import { cardProps } from '../../interfaces/interfaces';

export const ProductCard: FC<cardProps> = ({ id, name, short_description, image }) => {

    const navigate = useNavigate();

    const onClickCard = () => {
        navigate(`/product/${id}`);
    }

    return (
        <Col sm key={id} className="pe-5 pb-5">
            <Card onClick={onClickCard} className="pointer">
                <Card.Title
                    style={{
                        fontSize: '1.5rem',
                        textAlign: 'center',
                    }}
                    className="p-2 d-flex justify-content-center"> {name}</Card.Title>
                <Card.Img variant="top" src={image} alt={short_description} />
                <Card.Body>

                    <Card.Text style={{
                        fontSize: '1.2rem',
                        textAlign: 'center',
                    }}>{short_description}</Card.Text>
                </Card.Body>
            </Card>

        </Col>
    )
}
