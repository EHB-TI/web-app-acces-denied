import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap"
import '../layout/PageNotFound.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function PageNotFound() {
    return (
        <div class="notFound">
            <div class="error404">
        <div class="container">
<div class="row text-center">
<div class="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
<div class="row">
<div class="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
<h1 class="m-0">404</h1>
<h6>Page not found</h6>
<p>We could not find what you are looking for, please go back to our <span class="text-info"><a href="/">Home</a></span> page</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    )
}

export default PageNotFound
