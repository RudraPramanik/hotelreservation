import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return(
        <Hero>
         <Banner title="404 page not found">
         <Link to='/' className="btn-primary">Return to Home Page </Link>
         </Banner>
         </Hero>
    )
}

export default ErrorPage
