import { Row, Col } from "react-bootstrap"
import { Sidebar } from "../../Components/Sidebar/Sidebar"
import { SettingCard } from "./SettingCard";
import {  useState } from "react";
import { QuestionCard } from "./QuestionCard";
import { ResultCard } from "./ResultCard";

export const PlayPage = () => {
    
    const [listQuestion, setListQuestion] = useState([])
    const [resultQuiz, setResultQuiz] = useState([])
    

    
    

    return (
        <>
            <Row style={{ margin: "0", padding: "0" }} className="vh-100">
                <Col xs={2} style={{ backgroundColor: "#EAF6F6" }}>
                    <Sidebar></Sidebar>
                </Col>
                <Col xs={10} className="d-flex justify-content-center align-items-center">
                    {listQuestion.length < 1 && resultQuiz.length < 1 ? 
                    (<SettingCard listQuestion={listQuestion} setListQuestion={setListQuestion}/>): resultQuiz.length > 0 ? (<ResultCard resultQuiz={resultQuiz} setResultQuiz={setResultQuiz} setquestion={setListQuestion}></ResultCard>) : (<QuestionCard listQuestion={listQuestion} setListQuestion={setListQuestion} result={resultQuiz} setResult={setResultQuiz}/>)
                    }
                </Col>
            </Row>
        </>
    )
}