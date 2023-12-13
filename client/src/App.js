import BasicExample from "./components/Navbar";
//import BasicTable from "./components/Table"; 
//import EloTable from "./components/EloTable"; 
import ChartSection from "./components/ChartSection";
//import BasicTool from "./components/Tools";
import HeroSection from "./components/HeroSection";
import ProcessSection from "./components/ProcessSection";
import NoMeetingsSection from "./components/NoMeetingSection";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Image from 'react-bootstrap/Image';
import Footer from "./components/Footer";
import CorrelationComponent from "./components/CorrelationComponent";



function App() {


  return (
    <Container fluid align="center">
      <Row>
        <Col>
          <BasicExample />
        </Col>
      </Row>
      <HeroSection /> 
      <NoMeetingsSection />
      <CorrelationComponent />
      <ChartSection/>
      <ProcessSection style={{ marginTop: '50px' }} />
      <Footer />

    </Container>

  );
}

export default App;
