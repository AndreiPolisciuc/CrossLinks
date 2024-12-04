import React from 'react';
import {Container, Row} from "react-bootstrap";
import MissionaryCard from "./MissionaryCard";

function Missionaries(props) {
    const missionaries = [
        {
            img:"missioner1.jpg",
            title:"Pastor Jon",
            text:"Cross Links supports pastors and community workers throughout Moldova as well as several in Romania and Ukraine"
        },
        {
            img:"missioner2.jpg",
            title:"Missionary Iuri Sirtmaci",
            text:"Yura is the primary representative of Cross-Links in Moldova. He is serving as an associate of Cross-Links, giving oversight to the various programs and initiatives."
        },
        {
            img:"missioner3.jpg",
            title:"Missionary Irina Civga",
            text:"Irina serves as a representative between pastors and Cross-Links"
        }
    ]
    return (
        <Container id={"missionaries"} className={'mt-5 '} >
            <h1 className={'text-center'}>Our Missionaries</h1>
            <hr className={'mt-0 mb-4'}></hr>
            <Row xs={1} md={2} lg={3} className={"d-flex flex-wrap"}>
                {missionaries.map(el => (
                        <MissionaryCard
                            img={el.img}
                            title={el.title}
                            text={el.text}
                        />
                ))
                }

            </Row>
        </Container>
    );
}

export default Missionaries;