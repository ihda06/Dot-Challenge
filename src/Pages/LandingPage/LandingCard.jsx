import { Button, Card, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addQuiz, play } from "../../Redux/statusSlice"
import img1 from "./Teleportation-amico.png"

export const LandingCard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = () =>{
        dispatch(addQuiz())
        dispatch(play())
        navigate("./setting")
    }



return (
    <Container className="w-50 d-inline-block text-center">
        <Card>
            <Card.Body className="p-5">
                <img src={img1} style={{ maxWidth: "350px" }} />
                <h3>Welcome Back!</h3>
                <h5>Wanna play?</h5>
                <Button variant="outline-success" onClick={handleClick}>Lets Go!</Button>
            </Card.Body>
        </Card>
    </Container>

)
}