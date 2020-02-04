import React, { Component } from 'react';
import StarsRating from "./StarsRating";
import store from "./stores";

class FeedbackForm extends Component {
    setFeedbackText = (event) => {
        store.feedback = event.target.value;
    }

    componentDidMount() {
        store.userID = this.props.match.params.userID;
    };

    render() {
        return (
            <div>
                <div>
                    <h3>Rate your experience</h3>
                    <StarsRating />
                </div>

                <br></br>
                <br></br>
                <br></br>

                <div>
                    <h3>Additional Feedback</h3>
                    <textarea style={{border: "1px solid lightGrey", resize: "none", borderRadius: "20px", width: "50%", height: "300px", padding: "20px", fontSize: "20px"}} onChange={this.setFeedbackText}/>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <button style={{backgroundColor: "purple", color: "white", borderRadius: "20px", width: "50%", height: "100px", border: "none", fontSize: "30px"}} onClick={store.submitFeedback}>Submit</button>
            </div>
        );
    };
};

export default FeedbackForm;