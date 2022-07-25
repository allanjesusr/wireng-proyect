import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Card, Button } from 'react-bootstrap';

import { cardProps } from '../../interfaces/interfaces';



export const ProductCard: FC<cardProps> = ({ id, name, short_description, image, shopify }) => {

    const navigate = useNavigate();

    const onClickCard = () => {
        navigate(`/products/${id}`);
    }

    return (
        <Col sm key={id} className="pe-5 pb-5">
            <Card className="animate__animated animate__fadeIn">
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
                <Card.Body>
                    <div className="card__button-group">
                        <Button onClick={onClickCard} >Product Information</Button>
                        <Button
                            variant="secondary"
                            href={shopify}
                            className="mt-3"
                            style={{
                                display: 'flex',
                                justifyContent: 'center ',
                                alignItems: 'center',
                            }}><i className="fa-solid fa-arrow-right-long me-2"></i>Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>

        </Col>
    )
}
