import { Button, Card, Container } from "react-bootstrap"

export const ResultCard = ({resultQuiz, setResultQuiz, setquestion, setstats})=>{
    const reset =()=>{
        setResultQuiz([])
        setquestion([])
        setstats([])
        console.log("reset")
    }

    

    return (
        <Container className="w-50 d-inline-block">
            <Card>
                <Card.Body className="p-5 text-center">
                    <Card.Title>Your Score <h3>{resultQuiz[0].correct*10}</h3></Card.Title>
                    
                    {/* <Card.Text>Correct Answer {console.log(resultQuiz[0])}</Card.Text> */}
                    <Card.Text>Correct Answer {resultQuiz[0].correct}</Card.Text>
                    <Card.Text>Incorrect Answer {resultQuiz[0].incorrect}</Card.Text>
                    <Card.Text>Empty Answer {resultQuiz[0].remaining}</Card.Text>
                    <Card.Text>Answered Answer {resultQuiz[0].answered}</Card.Text>
                    <Button onClick={reset} className="mt-2">Reset</Button>
                    
                </Card.Body>
            </Card>
        </Container>
    )
}