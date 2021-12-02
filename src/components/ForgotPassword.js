import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../firebase/context"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }
    setLoading(false)
  }

  return (
    <div className="App" id="login-banner">
      <Card className="forgotpassword-card">
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          <p className="mb-2">You can reset your password below by providing your email address.</p>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="text-label">Email</Form.Label>
              <Form.Control className="border-r" type="email" ref={emailRef} required placeholder="your@email.com"/>
            </Form.Group>
            <Button disabled={loading} className="app-button border-r" type="submit">
              Reset password
            </Button>
          </Form>
        </Card.Body>
          <div className="app-link">
            <Link to="/login">Login</Link>
          </div>
          <div className="app-link blue">
            <Link to="/signup">Need an account? Sign up</Link>
          </div>
      </Card>
    </div>
  )
}