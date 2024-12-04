import React from 'react';
import {Container, Row} from "react-bootstrap";

function Footer(props) {
    return (
        <div className={"footer"}>
            <Container className={'text-center p-5'}>
                <Row className={"mb-2"}>
                    <b>Our e-mail:</b>
                    <div>
                        <a href="mailto:information@cross-links.org">information@cross-links.org</a>
                    </div>

                </Row>
                <Row className={"mb-2"}>
                    <b>Or you can reach us at our mailing address:</b>
                    <span>
                        Cross Links Inc.
                        P. O. Box 104
                        Akron, PA 17501
                    </span>
                </Row>
                <Row className={"mb-2"}>
                    <b>Or you can give us a call at:</b>
                    <div>
                        <a href="tel:(717) 575-3328">
                            (717) 575-3328
                        </a>
                    </div>

                </Row>
                <Row>
                    <span className={'fs-6 fst-italic mb-2'}>We welcome your support:</span>
                    <div className={"mb-4"}>
                        <img className={"w-75 justify-content-center"} style={{maxWidth: "70px"}}
                             alt="Make payments with PayPal - it's fast, free and secure!"
                             src={"PayPal.gif"} />
                    </div>
                </Row>
                <Row className={"fs-6 d-block"}>
                    Cross Links is registered as a non-profit 501 (c) (3) charitable organization
                </Row>
            </Container>
        </div>
    );
}

export default Footer;