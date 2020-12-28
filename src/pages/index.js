import * as React from "react"
import {Link} from "gatsby"
import "./global.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
// markup
const IndexPage = () => {
  return (
    <main>
      <title>Training Wale</title>
      <Link 
      role="Button"
      to="/Login"
      >Login</Link>
    </main>
  )
}

export default IndexPage
