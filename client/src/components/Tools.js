import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function BasicTool(props) {
    return (
        <>
            <Row xs={1} md={2} className="">

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>MERN</Card.Title>
                            <Card.Img variant="top" src="assets/images/MERN.png" alt="MERN stack"/>
                            <Card.Text>
                                This is a fullstack app utilizing Mongo Express Node and React.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>statsmodels-js</Card.Title>
                            <Card.Img variant="top" src="assets/images/540px-Npm-logo.svg.png" alt="NPM"/>
                            <Card.Text>
                                A JavaScript implementation of statistics methods based on jstat and mathjs
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>
            <Row xs={1} md={2} className="">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>react-bootstrap</Card.Title>
                            <Card.Img variant="top" src="assets/images/react-bootstrap-logo.svg" alt="react-bootstrap"/>
                            <Card.Text>
                                Used to create the frontend of the application
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title>chartjs/ react-chartjs-2</Card.Title>
                            <Card.Img variant="top" src="assets/images/chartjs-logo.svg" alt="chartjs-react"/>
                            <Card.Text>
                                Used to preform the data visualization
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </ >
    );
}

export default BasicTool;