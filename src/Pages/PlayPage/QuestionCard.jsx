import { Button, Card, Form, Container, Row, Col } from "react-bootstrap"
import { useTimer } from 'react-timer-hook';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuiz, addScore } from "../../Redux/statusSlice";



export const QuestionCard = ({ listQuestion, setListQuestion, result, setResult }) => {
    const dispatch = useDispatch()

    const [index, setIndex] = useState(0)
    const [QuizStats, setQuizStats] = useState({
        answered: 0,
        remaining: 10,
        correct: 0,
        incorrect: 0
    })



    let expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds()+20);
    const {
        seconds,
        minutes,
    } = useTimer({ expiryTimestamp, onExpire: () => {autoSubmit()} });





    const handleChange = (indexlist, indexans) => {
        let newDataQuestion = listQuestion.results;
        let newans = newDataQuestion[indexlist].newAns.map((item, idx) => {
            if (idx === indexans) {
                let newSelected = !item.isSelected
                return { ...item, isSelected: newSelected }
            } else {
                return { ...item, isSelected: false }
            }
        })
        newDataQuestion[indexlist].newAns = newans
        if (newDataQuestion[indexlist]["playerAns"] === undefined) {
            setQuizStats({ ...QuizStats, remaining: QuizStats.remaining - 1, answered: QuizStats.answered + 1 })
        }
        newDataQuestion[indexlist]["playerAns"] = newDataQuestion[indexlist].newAns[indexans].ans
        setListQuestion({ ...listQuestion, results: newDataQuestion })


    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        autoSubmit()
    }

    const autoSubmit = () => {
        
        let listAnswer = listQuestion.results.map((item) => {
            return item.playerAns
        })
        let newlistAns = []
        for (let i = 0; i <= listAnswer.length; i++) {
            if (listAnswer[i] === undefined) {
                break
            } else {
                newlistAns.push(listAnswer[i])
            }
        }
        const listCorrect = listQuestion.results.map((item) => {
            return item.correct_answer
        })

        let counterCorrect = 0
        let counterInCorrect = 0
        newlistAns.map((item, idx) => {
            if (item === listCorrect[idx]) {
                counterCorrect++
            } else {
                counterInCorrect++
            }
        })
        
        setQuizStats({ ...QuizStats, correct: counterCorrect, incorrect: counterInCorrect })
        dispatch(addQuiz())
        const newresult = {
            answered: QuizStats.answered,
            remaining: QuizStats.remaining,
            correct: counterCorrect,
            incorrect: counterInCorrect
        }
        dispatch(addScore(counterCorrect * 10))
        setResult([...result, newresult])
        
    }





    return (
        <>
            <Container className="w-100 d-inline-block">
                <Card>
                    <Card.Header>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <div className="pe-3">
                                        Time {minutes}:{seconds}

                                    </div>
                                </Col>
                                <Col>
                                    <div className="pe-3">
                                        Quiz Number {index + 1}
                                    </div>
                                </Col>
                                <Col>
                                    <div className="pe-3">
                                        Remaining Question :{QuizStats.remaining}
                                    </div>
                                </Col>
                                <Col>
                                    <div className="pe-3">
                                        Total Answered Question :{QuizStats.answered}
                                    </div>
                                </Col>

                            </Row>
                        </Card.Text>
                    </Card.Header>
                    <Card.Body className="p-5">
                        <h4>{listQuestion.results[index].question}</h4>

                        <Form onSubmit={handleSubmit}>

                            {listQuestion.results[index].newAns.map((item, idx) => {
                                return (
                                    <Form.Check key={idx} type="radio" label={item.ans} value={item.ans} checked={item.isSelected} onChange={() => { handleChange(index, idx) }}></Form.Check>
                                )
                            })}
                            <Button variant="danger" className="mt-3 me-2" onClick={() => index === 0 ? setIndex(9) : setIndex(index - 1)}><BsArrowLeftCircle />BACK</Button>
                            <Button variant="success" className="mt-3 me-5" onClick={() => (index === 9 ? setIndex(0) : setIndex(index + 1))}>NEXT<BsArrowRightCircle /></Button>
                            <Button variant="warning" className="mt-3" type="submit" >Submit</Button>
                        </Form>

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}