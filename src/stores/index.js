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
            const res = instance.post("feedback/submit/" + this.userID, {
                rating: this.rating,
                comment: this.feedback
            });
            console.log(res.data);
        } catch (error) {
            console.error(error);
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