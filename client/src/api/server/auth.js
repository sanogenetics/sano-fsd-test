import Vue from "vue";
import axios from "axios";

export function logout() {
    return new Promise((resolve, reject) => {
        axios
            .get("/x/logout", {
                withCredentials: true,
            })
            .then((response) => {
                Vue.prototype.$auth.destroyToken();
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function register(email) {
    return new Promise((resolve, reject) => {
        axios
            .post("/x/register", {
                email
            })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function check_registration(token) {
    return new Promise((resolve, reject) => {
        axios
            .post(`/x/register/${token}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function complete_registration(token, password_hash) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                "/x/register/complete",
                {
                    token,
                    password: password_hash,
                },
                { withCredentials: true }
            )
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function login(email, password_hash) {

    return new Promise((resolve, reject) => {
        axios
            .post(
                "/x/login",
                {
                    email,
                    password: password_hash
                },
                { withCredentials: true }
            )
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function reset(email) {
    return new Promise((resolve, reject) => {
        axios
            .post("/x/reset", {
                email,
            })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function check_reset(token) {
    return new Promise((resolve, reject) => {
        axios
            .post(`/x/reset/${token}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function complete_reset(token, password_hash) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                "/x/reset/complete",
                {
                    token,
                    password: password_hash,
                },
                { withCredentials: true }
            )
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}