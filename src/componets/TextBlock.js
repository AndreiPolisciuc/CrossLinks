import React from 'react';
import {Container} from "react-bootstrap";

function TextBlock(props) {
    return (
        <Container className={'mt-5 '}>
            <div className={"green-text-block"} style={{backgroundImage: 'url("background.jpg")'}}>
                <p className={"p-lg-5 p-sm-3"}>
                    Cross-Links is engaged in humanitarian aid, economic development and pastorial support.
                    We also support several institutions and ministries. Short term missions trips are taken
                    several times each year to minister to churches, orphanges and serve with existing ministries.
                </p>
            </div>
        </Container>
    );
}

export default TextBlock;