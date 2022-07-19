import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import profile from "./profile.png"

import "./Sidebar.css"

export const Sidebar = () => {
    const isPlaying = useSelector(state => state.player.isPlay)

    return (
        // <div className="h-100 d-inline-block">
            <Container className="py-5 d-flex align-content-between flex-wrap vh-100">
                <div className="profile">
                    <img src={profile} style={{ maxWidth: "75px" }} className="py-3 rounded-circle" />
                    <h3>Hello!</h3>
                    <h3>Ihda</h3>
                    <p>Logout</p>
                </div>
                <div className="your-score">
                    <p>Status : {isPlaying ? `Playing..` : "zZzzZzzz"}</p>
                    <h4>Your stats</h4>
                    <p>Your quiz</p>
                    <p>Last Score</p>
                </div>
            </Container>
        // </div>
    )
}