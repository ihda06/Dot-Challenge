import { Row, Col } from "react-bootstrap"
import { Sidebar } from "../../Components/Sidebar/Sidebar"
import { useTimer } from "react-timer-hook";
import { SettingCard } from "./SettingCard";

export const PlayPage = () => {
    

    return (
        <>
            <Row style={{ margin: "0", padding: "0" }} className="vh-100">
                <Col xs={2} style={{ backgroundColor: "#EAF6F6" }}>
                    <img src="" />
                    <Sidebar></Sidebar>
                </Col>
                <Col xs={10} className="d-flex justify-content-center align-items-center">
                    <SettingCard/>
                </Col>
            </Row>
        </>
    )
}