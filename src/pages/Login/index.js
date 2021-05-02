import React, { useState, useEffect } from 'react'
import {
    Container,
    Input,
    Row,
    Col
} from "reactstrap"
import cogo from "cogo-toast"
import styles from "./style.module.scss"
import Button from "../../components/button"
import axiosInstance from '../../../axiosConfig'
function Login({Location}) {
    const [newUser, iAmNew] = useState(false)
    const [profession, setProfession] = useState("")
    const [signupData, setSignUpData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        isTeacher: false,
        isStudent: false,
        email: "",
        number: "",
        confirmPass: ""
    })
    const [error, setError] = useState({
        firstName: false,
        lastName: false,
        password: false,
        profession: false,
        email: false,
        number: false,
        confirmPass: false
    })
    const reset=()=>{
        setSignUpData({
            firstName: "",
            lastName: "",
            password: "",
            isTeacher: false,
            isStudent: false,
            email: "",
            number: "",
            confirmPass: ""
        })
        setProfession("")
        setError({
            firstName: false,
            lastName: false,
            password: false,
            profession: false,
            email: false,
            number: false,
            confirmPass: false
        })
    }
    const handlelLogin = (newUser) => {
        let data = {
            ...signupData,
            isTeacher: profession.toLowerCase() === "teacher" ? true : false,
            isStudent: profession.toLowerCase() === "student" ? true : false
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (newUser) {
            if (data.firstName === "" || !data.firstName) {
                setError({ ...error, firstName: true })
            } else if (data.lastName === "" || !data.lastName) {
                setError({ ...error, lastName: true })
            } else if (data.password === "" || !data.password) {
                setError({ ...error, password: true })
            } else if (data.confirmPass === "" || !data.confirmPass) {
                setError({ ...error, confirmPass: true })
            } else if (data.password !== data.confirmPass) {
                setError({ ...error, password: "not matched", confirmPass: "not matched" })
            } else if (!re.test(String(data.email).toLowerCase()) || !data.email || data.email === "") {
                setError({ ...error, email: true })
            } else if (!data.number || data.number === "" || data.number.toString().length < 10) {
                setError({ ...error, number: false })
            } else if (data.profession === "") {
                setError({ ...error, profession: false })
            } else {
                setError({
                    firstName: false,
                    lastName: false,
                    password: false,
                    profession: false,
                    email: false,
                    number: false,
                    confirmPass: false
                })
                axiosInstance.post("/users/createUser", data).then((res) => {
                    if (res.status === 200) {
                        cogo.success("Welcome Friend")
                        reset()
                    }
                }).catch(err => console.log(err))
            }
        } else {
            if (!re.test(String(data.email).toLowerCase()) || !data.email || data.email === "") {
                setError({ ...error, email: true })
            } else if (data.password === "" || !data.password) {
                setError({ ...error, password: true })
            } else {
                axiosInstance.post("/users/checkUser", data)
                .then(res => {
                    if (res.data.loggedIn && res.data.user === "exists") {
                        setError({
                            ...error,
                            email:false,
                            password:false
                        })
                        reset()
                        cogo.success("logged In");
                    } else if (res.data.user === "exists" && !res.data.loggegIn) {
                        setError({...error,password:true})
                        cogo.error("Wrong Password")
                    } else {
                        setError({...error,email:true,password:true})
                        cogo.error("User does not exists")
                    }
                }).catch(err => console.log(err))
            }
        }
    }
    return (
        <div>
            <Container className={`mb-5 ${styles.formContainer}`}>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={10} lg={6}>
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <h1>{newUser ? `Sign up` : `Login`}</h1>
                        </div>
                        {!newUser ?
                            <LoginView
                                setSignUpData={(e) => setSignUpData(e)}
                                signupData={signupData}
                                error={error} /> :
                            <SignUpView setProfession={setProfession}
                                profession={profession}
                                setSignUpData={(e) => setSignUpData(e)}
                                signupData={signupData}
                                error={error}
                            />
                        }
                        <div className="w-100 d-flex flex-column justify-content-center pt-4 align-items-center">
                            <div>
                                <Button
                                    text={newUser ? `Sign Up` : `Login`}
                                    onClick={() => handlelLogin(newUser)}
                                    size="lg"
                                    color="primary"
                                />
                            </div>
                            <span
                                className={`mt-2 ${styles.hoverLink}`}
                                onClick={() => {
                                    // window.location.pathname="/signup"
                                    reset()
                                    iAmNew(prevState => !prevState)}}
                                role="button"
                                tabIndex={0}
                            >{newUser ? `Already a user?` : `New here?`}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
const SignUpView = ({ setProfession, profession, setSignUpData, signupData, error }) => <>

    <label htmlFor="SigninFName">First Name:</label>
    <Input
        style={{ borderColor: error.firstName === true ? "#e74c3c" : "" }}
        value={signupData.firstName}
        onChange={(e) => {
            setSignUpData({ ...signupData, firstName: e.target.value })
        }}
        type="text" id="SigninFName" />
    <label htmlFor="SigninLName">Last Name:</label>
    <Input
        style={{ borderColor: error.lastName === true ? "#e74c3c" : "" }}
        value={signupData.lastName}
        onChange={(e) => {
            setSignUpData({ ...signupData, lastName: e.target.value })
        }}
        type="text" id="SigninLName" />
    <label htmlFor="SigninMail">Email ID:</label>
    <Input
        style={{ borderColor: error.email === true ? "#e74c3c" : "" }}
        value={signupData.email}
        onChange={(e) => {
            setSignUpData({ ...signupData, email: e.target.value })
        }}
        type="email" id="SigninMail" />
    <label htmlFor="SigninPhone">Phone number:</label>
    <Input
        style={{ borderColor: error.number === true ? "#e74c3c" : "" }}
        value={signupData.number}
        onChange={(e) => {
            setSignUpData({ ...signupData, number: e.target.value })
        }}
        maxLength={10} type="number" id="SigninPhone" />
    <label htmlFor="SigninPass">Password:</label>
    <Input
        style={{ borderColor: error.password === true ? "#e74c3c" : "" }}
        value={signupData.password}
        onChange={(e) => {
            setSignUpData({ ...signupData, password: e.target.value })
        }}
        type="password" id="SigninPass" />
    <label htmlFor="SigninCon">Confirm Password:</label>
    <Input
        style={{ borderColor: error.confirmPass === true ? "#e74c3c" : "" }}
        value={signupData.confirmPass}
        onChange={(e) => {
            setSignUpData({ ...signupData, confirmPass: e.target.value })
        }}
        type="password" id="SigninCon" />
    <div className={styles.iAma}>
        <p style={{ color: error.profession === true ? "#e74c3c" : "" }}>I am a:</p>
        <span role="button"
            style={{ backgroundColor: profession.toLowerCase() === "teacher" ? "#2ecc71" : "" }}
            tabIndex={0}
            onClick={() => setProfession("teacher")}>
            Teacher
        </span>
        <span role="button"
            tabIndex={1}
            style={{ backgroundColor: profession.toLowerCase() === "student" ? "#2ecc71" : "" }}
            onClick={() => setProfession("Student")}>
            Student
        </span>
    </div>
</>
const LoginView = ({ setSignUpData,
    signupData,
    error }) => <>
        <label htmlFor="LogMail">Email ID:</label>
        <Input
        value={signupData.email}
            style={{ borderColor: error.email === true ? "#e74c3c" : "" }}
            type="email" onChange={e => setSignUpData({ ...signupData, email: e.target.value })} id="LogMail" />
        <label htmlFor="LogPass">Password:</label>
        <Input
            style={{ borderColor: error.password === true ? "#e74c3c" : "" }}
            value={signupData.password}
            type="password" onChange={e => setSignUpData({ ...signupData, password: e.target.value })} id="LogPass" />
    </>
export default Login
