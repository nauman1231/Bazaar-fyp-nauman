import React, { Component } from 'react'
import "./ExpandedCard.scss";
import Icon from "../../assets/images/Avatar.jpg";


export default class ExpandedCard extends Component {
    render() {
        return (
            <>
                <div className="ExpandedCardContainer">

                    <div className="ImageContainer">
                        <img className="ExpandedCardImage" src={Icon}></img>
                    </div>


                    <div className="ExpandedCardDetailContainer">

                        <div className="DetailInnerContainer">
                            <div className="heading">
                                <p>Heading</p>
                            </div>
                            <div className="content">
                                <p>Sub-Heading</p>
                            </div>

                        </div>
                        
                        <div className="DetailInnerContainer">
                        <div className="heading">
                            <p>Heading</p>
                        </div>
                        <div className="content">
                            <p>Sub-Heading</p>
                        </div>

                    </div>
                    <div className="DetailInnerContainer">
                    <div className="heading">
                        <p>Heading</p>
                    </div>
                    <div className="content">
                        <p>Sub-Heading</p>
                    </div>

                </div>
                <div className="DetailInnerContainer">
                <div className="heading">
                    <p>Heading</p>
                </div>
                <div className="content">
                    <p>Sub-Heading</p>
                </div>

            </div>
            <div className="DetailInnerContainer">
            <div className="heading">
                <p>Heading</p>
            </div>
            <div className="content">
                <p>Sub-Heading</p>
            </div>

        </div>

        <div className="DetailInnerContainer">
        <div className="heading">
            <p>Heading</p>
        </div>
        <div className="content">
            <p>Sub-Heading</p>
        </div>

    </div>
    <div className="DetailInnerContainer">
    <div className="heading">
        <p>Heading</p>
    </div>
    <div className="content">
        <p>Sub-Heading</p>
    </div>

</div>
<div className="DetailInnerContainer">
<div className="heading">
    <p>Heading</p>
</div>
<div className="content">
    <p>Sub-Heading</p>
</div>

</div>



                    </div>

                </div>

            </>
        )
    }
}
