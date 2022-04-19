import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Col, Card, Button } from 'react-bootstrap';

interface Props {
    id: string;
    name: string;
    description: string;
    image: string;
}

export const ProductCard: FC<Props> = ({ id, name, description, image} ) => {
    return (
        <Col sm key={id}>
            <Card>
                <Card.Img variant="top" src={image} alt={name}/>
                <Card.Body>
                    <Card.Title> {name}</Card.Title>
                    <Card.Text> {description} </Card.Text>
                </Card.Body>
                    <Button variant="secondary" size="lg">
                        <Link 
                            to={`/product/${id}`} 
                            style={{ 
                                textDecoration: 'none', 
                                color: 'white',
                                fontWeight: 'bold',
                                justifyContent: 'center'
                            }}
                        >
                            {name}
                        </Link>
                    </Button>
            </Card>

        </Col>
    )
}
