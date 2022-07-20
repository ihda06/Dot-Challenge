import axios from "axios";
import he from "he"
import { useState, } from "react";
import { Button, Card, Container, Form } from "react-bootstrap"



export const SettingCard = ({setListQuestion}) => {
    // const navigate = useNavigate()
    const [question, setQuestion] = useState([])

    const convertData = (data)=>{
        let newData = {...data}
        const res = newData.results.map((item)=>{
            item.question = he.decode(item.question)
            item.correct_answer = he.decode(item.correct_answer)
            item.incorrect_answers = item.incorrect_answers.map((question)=>(he.decode(question)))
            return item
        })

        return {...newData, results: res}
        
    }

    const getQuestion = async (category, difficulty) => {
        const difficultyOp = ["easy", "medium", "hard"]
        let category1 = category
        let difficulty1 = difficulty
        if(category === "any"){
            category1 = Math.floor( Math.random() * (32 - 9) + 9);
            // console.log(category1);
        }
        if(difficulty === "any"){
            let index = Math.floor(Math.random() * (3 - 0) + 0)
            difficulty1 = difficultyOp[index]
            // console.log(difficulty1);
        }
        const res = await axios.get("https://opentdb.com/api.php", {
            params: {
                amount: 10,
                category: category1,
                difficulty: difficulty1,
                type: "multiple"
            }
        })
        return res.data
    }

    const processQuestion = (item) => {
        const data = { ...item }
        // console.log(data);
        const correct = {
            ans: data.correct_answer,
            isCorrect: true,
            isSelected: false,
        }
        const incorrect = data.incorrect_answers.map((item) => {
            const q = {
                ans: item,
                isCorrect: false,
                isSelected: false,
            }
            return q
        })
        // console.log(incorrect);
        // randoming position
        let rand = Math.floor(Math.random() * 4)

        const list = [...incorrect]
        list.splice(rand, 0, correct)
        return list

        // console.log(incorrect);

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const category = e.target["trivia_category"].value
        const difficult = e.target["difficulty"].value
        
        let data = await getQuestion(category, difficult)
        while (data.response_code === 1){
            data = await getQuestion(category, difficult)
        }
        // let newQuestiion = 
        data = convertData(data)
        data.results = data.results.map((item)=>{
            const listAns = processQuestion(item)
            item["newAns"] = listAns
            return item
        })
        setListQuestion(data)
        setQuestion(data.results)
        // dispatch(addData(data))
        // navigate("/landingpage/play")

    }

    return (

        <Container className="w-50 d-inline-block">
            <Card>
                <Card.Body className="p-5">
                    {/* <img src={img1} style={{ maxWidth: "350px" }} /> */}
                    <h3>Setting your quiz</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>
                            Select Category
                        </Form.Label>
                        <Form.Select name="trivia_category">
                            <option value="any">Any Category</option>
                            <option value="9">General Knowledge</option>
                            <option value="10">Entertainment: Books</option>
                            <option value="11">Entertainment: Film</option>
                            <option value="12">Entertainment: Music</option>
                            <option value="13">Entertainment: Musicals &amp; Theatres</option>
                            <option value="14">Entertainment: Television</option>
                            <option value="15">Entertainment: Video Games</option>
                            <option value="16">Entertainment: Board Games</option>
                            <option value="17">Science &amp; Nature</option>
                            <option value="18">Science: Computers</option>
                            <option value="19">Science: Mathematics</option>
                            <option value="20">Mythology</option>
                            <option value="21">Sports</option>
                            <option value="22">Geography</option>
                            <option value="23">History</option>
                            <option value="24">Politics</option>
                            <option value="25">Art</option>
                            <option value="26">Celebrities</option>
                            <option value="27">Animals</option>
                            <option value="28">Vehicles</option>
                            <option value="29">Entertainment: Comics</option>
                            <option value="30">Science: Gadgets</option>
                            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                            <option value="32">Entertainment: Cartoon &amp; Animations</option>
                        </Form.Select>
                        <Form.Label>
                            Select Difficulties
                        </Form.Label>
                        <Form.Select name="difficulty">
                            <option value="any">Any</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </Form.Select>
                        <Button variant="outline-success" type="submit" className="mt-3">Play</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}