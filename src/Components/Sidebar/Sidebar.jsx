import { Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loged } from "../../Redux/loginSlice"
import profile from "./profile.png"

import "./Sidebar.css"

export const Sidebar = () => {
    const isPlaying = useSelector(state => state.player.isPlay)
    const dispatch = useDispatch()
    const lastScore = useSelector(state=> state.player)
    const navigate = useNavigate()

    return (
        
        <Container className="py-5 d-flex align-content-between flex-wrap vh-100">
            <div className="profile">
                <img src={profile} style={{ maxWidth: "75px" }} alt="tes" className="py-3 rounded-circle" />
                <h3>Hello!</h3>
                <h3>Ihda</h3>
                <p className="logout" onClick={()=>{dispatch(loged())}}>Logout</p>
                {!isPlaying ?
                <p className="logout" onClick={()=>{navigate("/landingpage")}}>Back</p>:null
                
            }
            </div>
            <div className="your-score">
                <p>Status : {isPlaying ? `Playing..` : "zZzzZzzz"}</p>
                    <h4>Your stats</h4>
                    <p>total quiz : {lastScore.totalQuiz}</p>
                    <p>Last Score: {lastScore.score}</p>
                </div>
            </Container>
    )
}