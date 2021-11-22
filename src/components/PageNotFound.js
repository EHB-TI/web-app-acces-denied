import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap"

function PageNotFound() {
    return (
        <div className="App">
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">404 - Page not found</h2>
              
                <div className="w-100 text-center mt-3">
                    <Link to="/contact-us">Are you searching for something specific? Do you need help?</Link>
                </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
               <Link to="/">Go back to the homepage.</Link>
            </div>
        </div>
    )
}

export default PageNotFound