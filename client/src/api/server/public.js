import axios from "axios";


export function get_studies() {
    return new Promise((resolve, reject) => {
        axios
            .get("/studies")
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}