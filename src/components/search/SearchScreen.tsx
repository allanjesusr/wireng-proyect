import { FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import { getProductsByName } from '../../selectors/getProductsByName';
import { ProductCard } from '../products/ProductCard';
import { AboutScreen } from '../ux/AboutScreen';



export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    console.log(q);

    const { formValues, onChange } = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    const filteredProducts = getProductsByName(q as any);

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <Container className="layout__container">

            <div className="mt-5 mb-5 d-flex justify-content-center">
                <h1>Search a WirEng® Product</h1>
            </div>

            <Row>

                <Row>
                    <Form onSubmit={handleSearch}>
                        <Row xs={1} md={3}>
                            <Col></Col>
                            <Col>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    name="searchText"
                                    autoComplete="off"
                                    placeholder="Search a Product..."
                                    className="mb-3 d-flex justify-content-center"
                                    value={searchText as any}
                                    onChange={onChange}
                                />
                                    <Button 
                                        variant="secondary" 
                                        type="submit"
                                        className="mb-3 "
                                    >
                                        Submit
                                    </Button>
                            </Col>
                            <Col></Col>
                        </Row>


                    </Form>
                </Row>

                <h2>Results</h2>

                <Row xs={1} md={2} lg={4} xl={8} xxl={10} className="g-4">

                    {
                        filteredProducts.map( product => (
                            <ProductCard 
                                key={product.id}
                                {...product}
                            />
                        ))
                    }
                
                
                </Row>

            </Row>



        </Container>
    )
}
