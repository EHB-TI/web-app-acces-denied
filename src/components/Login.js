import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../firebase/context"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const { loginLog } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      await loginLog()
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <div className="App" id="login-banner">
      <Card className="login-card">
        <Card.Body>
          <h2 className="text-center mb-4">Log in</h2>
          <hr/>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="text-label">Email</Form.Label>
              <Form.Control className="border-r" type="email" ref={emailRef} required placeholder="example@gmail.com"/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="text-label">Password</Form.Label>
              <Form.Control className="border-r"  type="password" ref={passwordRef} required placeholder="P@ssw0rd"/>
            </Form.Group>
            <Button disabled={loading} className="app-button border-r" type="submit" >
              Log in
            </Button>
          </Form>
        </Card.Body>
          <div className="app-link">
            <Link to="/forgot-password">Forgot your password?</Link>
          </div>
          <div className="app-link blue">
            <Link to="/signup">Need an account? Sign Up</Link>
          </div>
      </Card>
 
    </div>
  )
}