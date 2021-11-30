import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../firebase/context"

export default function AdminRoute({ component: Component, props, ...rest  }) {
  
  var admin = props.admin;
  console.log(admin);
  return (
    
    <Route
      {...rest}
      render={props => {
        return  admin ?    <Component {...props} />  : <Redirect to="/404" />;
      }}
    ></Route>
  )
}