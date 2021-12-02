import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../firebase/context"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const usernameRef = useRef()
  const { signup } = useAuth()
  const { signupData } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const {currentUser} = useAuth();

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      console.log(usernameRef.current.value)

      await signupData(emailRef.current.value, usernameRef.current.value);
      history.push("/")
    } catch (err){
      setError(`Failed to create an account, ${err}`)
    }
    setLoading(false)
  }

  return (
    <div className="App" id="login-banner">
      <Card className="signup-card">
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          <hr/>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="text-label">Email</Form.Label>
              <Form.Control  className="border-r" type="email" ref={emailRef} required placeholder="example@gmail.com"/>
            </Form.Group>
            <Form.Group id="name">
              <Form.Label className="text-label">Username</Form.Label>
              <Form.Control  className="border-r" type="name" ref={usernameRef} required placeholder="username"/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="text-label">Password</Form.Label>
              <Form.Control className="border-r" type="password" ref={passwordRef} required placeholder="P@ssw0rd" />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label className="text-label">Password confirmation</Form.Label>
              <Form.Control className="border-r" type="password" ref={passwordConfirmRef} required placeholder="P@ssw0rd"/>
            </Form.Group>
            <Button disabled={loading} className="app-button border-r" type="submit">
              Sign up
            </Button>
          </Form>
        </Card.Body>
        <div className="app-link blue">
          <Link to="/login">Already have an account? Log in</Link>
        </div>
      </Card>
    </div>
  )
}