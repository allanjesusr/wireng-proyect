import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Col, Card } from 'react-bootstrap';

interface Props {
    id: string;
    name: string;
    description: string;
    image: string;
}

export const ProductCard: FC<Props> = ({ id, name, description, image} ) => {

    const navigate = useNavigate();

    const onClickCard = () => {
        navigate(`/product/${id}`);
    }

    return (
        <Col sm key={id} className="pe-5 pb-5">
            <Card onClick={onClickCard} className="pointer">
                <Card.Img variant="top" src={image} alt={name}/>
                <Card.Body>
                    <Card.Title> {name}</Card.Title>
                    <Card.Text> {description} </Card.Text>
                </Card.Body>
                    {/* <Button variant="secondary" size="lg">
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
                    </Button> */}
            </Card>

        </Col>
    )
}
