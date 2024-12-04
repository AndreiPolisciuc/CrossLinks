import React from 'react';
import {Container} from "react-bootstrap";

function AboutUs(props) {
    return (
        <Container id={"about-us"} className={'mt-5 '} >
            <div className={"white-text-block"} style={{backgroundImage:'url("background.jpg")'}}>
                <h1 className={"pt-5 mb-0"}>About Us</h1>
                <p className={"p-lg-5 p-sm-4"}>
                    Cross-Links, Inc. is a ministry of Humanitarian and Developmental
                    aid to Eastern Europe. Volunteers are committed to sharing God's love
                    by caring and sharing with people in need, whether physical or spiritual,
                    thereby giving witness to God's redemptive love. It is our desire to serve as a "link"
                    for those with similar wishes to make a difference in difficult situations and to facilitate
                    the association of persons and organizations of integrity in America and Eastern Europe.
                </p>
            </div>
        </Container>
    );
}

export default AboutUs;