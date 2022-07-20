import { useEffect, useState } from "react"
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { loged } from "../../Redux/loginSlice"
import illustration from "./Enthusiastic-pana.svg"
import "./LoginPage.css"

const LoginPage = () => {
    const dispatch = useDispatch()

    const [login, setLogin] = useState({
        username: "",
        password:""
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setLogin(prevEvent =>({
            ...prevEvent,
            [name]: value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(login.username === "ihda.anwari" && login.password === "a"){
            dispatch(loged())
         
        }
        else{
            alert("pasword or username not match")
        }
        
    }

    useEffect(()=>{
       
    }, )

    return (
        <div className="login-page d-flex align-items-center justify-content-center" style={{ backgroundColor: "white", height: "100vh" }}>
            <Container>
                <Row className="border border-2" style={{ height: "540px" }}>
                    <Col lg={6} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "#66BFBF" }}>
                        <div className="text-center py-5">
                            <img alt="tes" src={illustration} style={{ width: "250px", maxWidth: "695px" }} />
                            <Card.Title className="greeting">
                                Welcome Back!
                            </Card.Title>
                        </div>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center align-items-center">
                        <Container className="my-5">
                            <Form onSubmit={handleSubmit}>
                                <Card.Title className="text-center form-title">
                                    Please Login
                                </Card.Title>
                                <div className="px-5">
                                    <Form.Label>
                                        Username
                                    </Form.Label>
                                    <Form.Control type="text" className="rounded-pill" name="username" onChange={handleChange}/>
                                    <Form.Label className="pt-2">
                                        Password
                                    </Form.Label>
                                    <Form.Control type="password" className="rounded-pill" name="password" onChange={handleChange}/>
                                    <div className="text-center">
                                        <Button type="submit" className="w-50 mt-5 rounded-pill" style={{ backgroundColor: "#FF0063" }}>Login</Button>
                                    </div>
                                </div>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage;