import { Helmet } from 'react-helmet';
import { Container, Button, Offcanvas, Form } from 'react-bootstrap';

import { ProductsList } from './ProductsList';
import { ChangeEvent, FormEvent, useState } from 'react';

import data from '../../data/data.json';

export const AntennasScreen = () => {

    const { products } = data;

    const [openFilter, setOpenFilter] = useState(false);
    const [typeSelected, setTypeSelected] = useState('');
    const [mimoSelected, setMimoSelected] = useState('');
    const [gainSelected, setGainSelected] = useState('');
    const [usageSelected, setUsageSelected] = useState<string[]>([]);

    const handleOpen = () => {
        setOpenFilter(true);
    };

    const handleClose = () => {
        setOpenFilter(false);
    };

    const handleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
        let select = (e.target.value);
        setTypeSelected(select);
    };

    const handleChangeMimo = (e: ChangeEvent<HTMLInputElement>) => {
        let selectedMimo = (e.target.value);
        setMimoSelected(selectedMimo);
    }

    const handleChangeUsage = (e: ChangeEvent<HTMLInputElement>) => {
        let selectedUsage = (e.target.value);
        usageSelected.push(selectedUsage);
        setUsageSelected(usageSelected);

    }

    const handleChangeGain = (e: ChangeEvent<HTMLInputElement>) => {
        let selecGain = (e.target.value);
        setGainSelected(selecGain);
    }

    return (
        <>
            <Helmet>
                <title>Antennas by WirEng® | WirEng®</title>
                <meta name="description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
                <meta name="keywords" content="WirEng®, antennas, atennas accesories" />

                <meta property="og:title" content="Antennas by WirEng® | WirEng®" />
                <meta property="og:description" content="WirEng® is the worldwide leader in ultra wide band, ultra high gain antennas" />
            </Helmet>
            <Container>

                <div className="d-flex justify-content-center mt-5 mb-5">

                    <h1>Antennas by WirEng®</h1>

                </div>

                {/* <div style={{
                    margin: '1rem 0px 2rem 0px'
                }}>
                    <Button
                        variant="primary"
                        onClick={handleOpen}
                        style={{ padding: '0.7rem', fontSize: '1.2rem' }}
                    >
                        Menu Filter
                    </Button>
                </div> */}

                {/* <Offcanvas show={openFilter} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Antenna Search</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <h4 style={{ margin: '1rem 0px' }}>Type</h4>
                        <Form>
                            <Form.Check
                                type="checkbox"
                                value="Directional"
                                label="Directional"
                                onChange={handleChangeType}
                            />
                            <Form.Check
                                type="checkbox"
                                value="Omnidirectional"
                                label="Omnidirectional"
                                onChange={handleChangeType}
                            />
                        </Form>
                        <h4 style={{ margin: '1rem 0px' }}>MIMO</h4>
                        <Form>
                            <Form.Check
                                type="checkbox"
                                label="No"
                                value="No"
                                onChange={handleChangeMimo}
                            />
                            <Form.Check
                                type="checkbox"
                                label="2x2"
                                value="2x2"
                                onChange={handleChangeMimo}
                            />
                            <Form.Check
                                type="checkbox"
                                label="4x2"
                                value="4x2"
                                onChange={handleChangeMimo}
                            />
                            <Form.Check
                                type="checkbox"
                                label="4x4"
                                value="4x4"
                                onChange={handleChangeMimo}
                            />
                            <div>
                                <Form.Check
                                    type="checkbox"

                                    label="8x2"
                                    value="8x2"
                                    onChange={handleChangeMimo}
                                />
                                <Form.Check
                                    type="checkbox"

                                    label="8x4"
                                    value="8x4"
                                    onChange={handleChangeMimo}
                                />
                                <Form.Check
                                    type="checkbox"

                                    label="8x8"
                                    value="8x8"
                                    onChange={handleChangeMimo}
                                />
                            </div>
                        </Form>
                        <h4 style={{ margin: '1rem 0px' }}>Usage</h4>
                        <Form>
                            <Form.Check
                                type="checkbox"
                                label="Stationary"
                                value="Stationary"
                                onChange={handleChangeUsage}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Marine"
                                value="Marine"
                                onChange={handleChangeUsage}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Mobile"
                                value="Mobile"
                                onChange={handleChangeUsage}
                            />
                            <Form.Check
                                type="checkbox"
                                label="Portable"
                                value="Portable"
                                onChange={handleChangeUsage}
                            />
                        </Form>
                        <h4 style={{ margin: '1rem 0px' }}>Gain</h4>
                        <Form>
                            <Form.Check
                                type="checkbox"
                                label="> 12db"
                                value="> 12db"
                                onChange={handleChangeGain}
                            />

                            <Form.Check
                                type="checkbox"
                                label="> 9db"
                                value="> 9db"
                                onChange={handleChangeGain}
                            />

                            <Form.Check
                                type="checkbox"
                                label="> 6db"
                                value="> 6db"
                                onChange={handleChangeGain}
                            />
                        </Form>
                    </Offcanvas.Body>
                </Offcanvas> */}

                <ProductsList
                    category="Antennas"
                    type={typeSelected}
                    mimo={mimoSelected}
                    gain={gainSelected}
                    usage={usageSelected}
                />
            </Container>

        </>
    )
}
