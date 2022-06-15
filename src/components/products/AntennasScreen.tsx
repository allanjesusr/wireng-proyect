import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import { ProductsList } from './ProductsList';


export const AntennasScreen = () => {

    // const [mimoCheck, setMimoCheck] = useState(false);
    // const [usageCheck, setUsageCheck] = useState(false);
    // const [typesCheck, setTypesCheck] = useState(false);
    // const [gainCheck, setGainCheck] = useState(false);

    // let mimo: string[] = [];
    // let usage: string[] = [];
    // let gain: string[] = [];
    // let types: string[] = [];

    // const handleMimoChange = (event: any) => {
    //     mimo = event.target.value;
    //     setMimoCheck(!mimoCheck);
    //     console.log('mimo llamado');

    // }


    // const handleUsageChange = (event: any) => {
    //     usage = event.target.value;
    //     setUsageCheck(!usageCheck);
    //     console.log('usage llamado');
    // }

    // const handleGainChange = (event: any) => {
    //     gain = event.target.value;
    //     setGainCheck(!gainCheck);
    //     console.log('gain llamado');
    // }

    // const handleTypesChange = (event: any) => {
    //     types = event.target.value;
    //     setTypesCheck(!typesCheck);
    //     console.log('type llamado');
    // }



    // const handleSubmit = (event: any) => {
    //     event.preventDefault();
    //     console.log(mimo);
    //     console.log(usage);
    //     console.log(gain);
    //     console.log(types);
    // }


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
{/* 
                <h3>Refine Your Search</h3>
                <hr />

                <div className='d-flex justify-content-evenly mb-5'>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Type
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Form.Check
                                inline
                                label="Directional"
                                style={{
                                    color: 'white',
                                }}
                                name="type"
                                id="directional"
                                value="directional"
                                onChange={(e) => handleTypesChange(e)}
                            />
                            <Form.Check
                                inline
                                label="Omnidirectional"
                                style={{
                                    color: 'white',
                                }}
                                name="type"
                                id="omnidirectional"
                                value="omnidirectional"
                                onChange={handleTypesChange}
                            />
                            <Form.Check
                                inline
                                label="Any"
                                style={{
                                    color: 'white',
                                }}
                                name="type"
                                id="any"
                                value="any"
                                onChange={handleTypesChange}
                            />
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            MIMO
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Form.Check
                                inline
                                label=" 2x2"
                                style={{
                                    color: 'white',
                                }}
                                name="mimo"
                                id="2x2"
                                value="2x2"
                                onChange={handleMimoChange}
                            />
                            <Form.Check
                                inline
                                label="4x2"
                                style={{
                                    color: 'white',
                                }}
                                name="mimo"
                                id="4x2"
                                value="4x2"
                                onChange={handleMimoChange}
                            />
                            <Form.Check
                                inline
                                label="4x4"
                                style={{
                                    color: 'white',
                                }}
                                name="mimo"
                                id="4x4"
                                value="4x4"
                                onChange={handleMimoChange}
                            />
                            <Form.Check
                                inline
                                label="8x2"
                                style={{
                                    color: 'white',
                                }}
                                name="mimo"
                                id="8x2"
                                value="8x2"
                                onChange={handleMimoChange}
                            />
                            <Form.Check
                                inline
                                label="8x4"
                                style={{
                                    color: 'white',
                                }}
                                name="mimo"
                                id="8x4"
                                value="8x4"
                                onChange={handleMimoChange}
                            />
                            <Form.Check
                                inline
                                label="8x8"
                                style={{
                                    color: 'white',
                                }}
                                name="mimo"
                                id="8x8"
                                value="8x8"
                                onChange={handleMimoChange}
                            />
                        </Dropdown.Menu>
                    </Dropdown>


                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Usage
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Form.Check
                                inline
                                label="Stationary"
                                style={{
                                    color: 'white',
                                }}
                                name="usage"
                                id="stationary"
                                value="stationary"
                                onChange={handleUsageChange}
                            />
                            <Form.Check
                                inline
                                label="Mobile"
                                style={{
                                    color: 'white',
                                }}
                                name="usage"
                                id="mobile"
                                value="mobile"
                                onChange={handleUsageChange}
                            />
                            <Form.Check
                                inline
                                label="Marine"
                                style={{
                                    color: 'white',
                                }}
                                name="usage"
                                id="marine"
                                value="marine"
                                onChange={handleUsageChange}
                            />
                            <Form.Check
                                inline
                                label="Portable"
                                style={{
                                    color: 'white',
                                }}
                                name="usage"
                                id="portable"
                                value="portable"
                                onChange={handleUsageChange}
                            />
                            <Form.Check
                                inline
                                label="Any"
                                style={{
                                    color: 'white',
                                }}
                                name="usage"
                                id="any"
                                value="any"
                                onChange={handleUsageChange}
                            />
                        </Dropdown.Menu>
                    </Dropdown>


                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Gain
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Form.Check
                                inline
                                label="> 3dB"
                                style={{
                                    color: 'white',
                                }}
                                name="gain"
                                id="> 3dB"
                                value="> 3dB"
                                onChange={handleGainChange}
                            />
                            <Form.Check
                                inline
                                label="> 6dB"
                                style={{
                                    color: 'white',
                                }}
                                name="gain"
                                id="> 6dB"
                                value="> 6dB"
                                onChange={handleGainChange}
                            />
                            <Form.Check
                                inline
                                label="> 9dB"
                                style={{
                                    color: 'white',
                                }}
                                name="gain"
                                id="> 9dB"
                                value="> 9dB"
                                onChange={handleGainChange}
                            />
                            <Form.Check
                                inline
                                label="> 12dB"
                                style={{
                                    color: 'white',
                                }}
                                name="gain"
                                id="> 12dB"
                                value="> 12dB"
                            />
                        </Dropdown.Menu>
                    </Dropdown>

                    <Button variant="secondary">Submit</Button>
                </div> */}

                <ProductsList 
                    category="Antennas" 
                />
            </Container>

        </>
    )
}
