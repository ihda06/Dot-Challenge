import { Button, Card, Form, Container } from "react-bootstrap"
import { useTimer } from 'react-timer-hook';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export const QuestionCard = () => {
    let data = useSelector(state => state.question.questions)
    data = data[0].results
    const [dataQuestion, setDataQuestion] = useState(data)
    const [index, setIndex] = useState(0)
    const [listQ, setlistQ] = useState([])


    let expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    // useEffect(() => {
    //     console.log(dataQuestion)
    // }, [])

    useEffect(()=>{
        
        let rand = Math.floor(Math.random()*(2-0)+0)
        console.log(rand)
        let ans = dataQuestion[index].correct_answer
        let opt = [...dataQuestion[index].incorrect_answers]
        opt.splice(2, 0, ans)
        setlistQ(opt)
    }, [index])

    return (
        <>
            <Container className="w-100 d-inline-block">
                <Card>
                    <Card.Header>
                        <Card.Text>
                            Time {minutes}:{seconds}
                        </Card.Text>
                    </Card.Header>
                    <Card.Body className="p-5">
                        {/* <img src={img1} style={{ maxWidth: "350px" }} /> */}
                        <Form>
                            <p>{dataQuestion[index].question.replaceAll("&quot;", `"`)}</p>
                            {listQ.map((item)=>{
                                return(
                                    <Form.Check type="radio" label={item} value={item}></Form.Check>
                                )
                            })}
                        <Button variant="success" className="mt-3 me-2"onClick={()=>index==listQ.length ? setIndex(0): setIndex(index+1)}>Next</Button>
                        <Button variant="danger" className="mt-3 me-5"onClick={()=>index==0 ? setIndex(listQ.length) : setIndex(index-1)}>Back</Button>
                        <Button variant="warning" className="mt-3" type="submit" >Submit</Button>
                        </Form>

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}