import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
export default function Layout({ children }) {
    return (
    <>
        <Header />
        <div style={{minHeight:"60vh"}}>
        {children}
        </div>
        <Footer/>
    </>
    )
}