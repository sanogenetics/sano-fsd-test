function decodeJWT(token) {
    const base64Url = token.split(".")[1],
        base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
}

const AuthPlugin = {
    setToken(token) {
        if (token) {
            localStorage.setItem("authToken", token);
        }
    },

    destroyToken() {
        localStorage.removeItem("authToken");
    },

    logout() {
        this.destroyToken();
        window.Intercom("shutdown");
    },

    getDecodedToken() {
        const token = localStorage.getItem("authToken");
        if (token) {
            const dt = decodeJWT(token),
                expiration = dt.exp,
                now = Date.now() / 1000;
            if (now < expiration) {
                return dt;
            }
        }
        this.destroyToken();
        return null;
    },

    getToken() {
        const token = localStorage.getItem("authToken");
        if (token) {
            const dt = decodeJWT(token),
                expiration = dt.exp,
                now = Date.now() / 1000;
            if (now < expiration) {
                return token;
            }
        }
        this.destroyToken();
        return null;
    },

    getUser() {
        const dt = this.getDecodedToken();
        if (dt) return dt.user_id;
        return null;
    },

    getUserEmail() {
        const dt = this.getDecodedToken();
        if (dt) return dt.user_email;
        return null;
    },

    isAdmin() {
        const dt = this.getDecodedToken();
        if (dt) return dt.role === "admin";
        return false;
    },

    isTeam() {
        const dt = this.getDecodedToken();
        if (dt) return (dt.role === "admin") | (dt.role === "team");
        return false;
    },

    loggedIn() {
        return !!this.getToken();
    },

    needsRefresh() {
        const dt = this.getDecodedToken();
        if (dt) {
            const expiration = dt.exp,
                now = Date.now() / 1000;
            if (now > expiration - 50 * 59) {
                return true;
            }
        }
        return false;
    },
};

export default function (Vue) {
    Vue.auth = AuthPlugin;

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get() {
                return Vue.auth;
            },
        },
    });
}