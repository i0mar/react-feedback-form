import { decorate, observable } from "mobx";
import instance from "./instance";

class Store {
    userID = null;
    rating = 0;
    feedback = "";

    submitFeedback = () => {
        console.log({
            userid: this.userID,
            rating: this.rating,
            feedback: this.feedback
        });
        try {
            const res = instance.put("feedback/submit/" + this.userID, {
                rating: this.rating,
                comment: this.feedback
            });
            console.log(res.data);
            alert("Feedback submitted!");
        } catch (error) {
            console.error(error);
            alert(`Failed to submit feedback.\nError: ${error}`);
        }
    };
}

decorate(Store, {
    userID: observable,
    stars: observable,
    feedback: observable
})

const newStore = new Store();

export default newStore;
