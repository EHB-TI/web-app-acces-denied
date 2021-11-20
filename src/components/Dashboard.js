import React, { useState } from "react"
import { Card, Button, Alert, ListGroup } from "react-bootstrap"
import { useAuth } from "../firebase/context"
import { Link, useHistory } from "react-router-dom"
import NavTabHome from "./NavTabHome"

export default function Dashboard() {

  return (
    <div className="App" id="home-banner">
      <NavTabHome/>



    </div>
  )
}