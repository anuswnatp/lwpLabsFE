import * as React from "react"
import "./global.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./home";
import ReactHelmet from "../components/helmet";
// markup
const IndexPage = () => {
  return (
      <main>
        <title>LWP Labs</title>
        <ReactHelmet/>
          <Home/>
      </main>
  )
}

export default IndexPage
