import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface Props {
    id: string;
    name: string;
    description: string;
    image: string;
}

export const ProductCard = ({ id, name, description, image}: Props ) => {
    return (
        <Col sm key={id}>
            <Card>
                <Card.Img variant="top" src={image} alt={name}/>
                <Card.Body>
                    <Card.Title> {name}</Card.Title>
                    <Card.Text> {description} </Card.Text>
                    <Link to={`/product/${id}`}>
                        {name}
                    </Link>
                </Card.Body>
            </Card>

        </Col>
    )
}
