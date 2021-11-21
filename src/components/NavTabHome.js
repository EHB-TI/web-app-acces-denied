import React from 'react'
import { Nav , Col, Tab, Row} from 'react-bootstrap'

function NavTabHome() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="tab-container mt-5">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Search car</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Sell car</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Contact us</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                <h1>Search for your Dreamcar</h1>
                <p>Discover all unique advertisements, and maybe you will find your dream car.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <h1>Sell your car now</h1>
                <p>Post an advertisements to sell your car in a few clicks.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <h1>A question?</h1>
                <h1>Do you encounter any problems?</h1>
                <p>Feel free to contact us, using our website you can directly send us an email. We would be glad to help you further.</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    )
}

export default NavTabHome
