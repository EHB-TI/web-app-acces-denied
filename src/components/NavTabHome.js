import React from 'react'
import { Nav , Col, Tab, Row} from 'react-bootstrap'

function NavTabHome() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="tab-container">
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
         <h1>Search for your dreamcar</h1>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
         <h1>Sell your car</h1>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    )
}

export default NavTabHome
