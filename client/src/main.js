import Vue from "vue";
import Meta from "vue-meta";
import { has } from "lodash";
import VueGtm from "vue-gtm";
import axios from "axios";
import Vuelidate from "vuelidate";
import VueSweetalert2 from "vue-sweetalert2";
// import VueTables from 'vue-tables-2';
// Vue.use(VueTables.ClientTable);
import VueAutosize from "vue-autosize";
import VueTextareaAutosize from "vue-textarea-autosize";
import VueScrollTo from "vue-scrollto";
import SocialSharing from "vue-social-sharing";
import Fragment from "vue-fragment";
import store from "./store/store";
import router from "./router";
import App from "./App";
import Auth from "./plugins/auth";
import Toast from "./plugins/toast";
import Api from "./plugins/api";

Vue.use(VueGtm, {
    id: "GTM-PBBTLT7",
    enabled: process.env.VUE_APP_MODE === "prod",
    // enabled: false,
    debug: false,
    // debug: true,
    vueRouter: router,
    // ignoredViews: ['homepage'] // If router, you can exclude some routes name (case insensitive) (optional)
});

Vue.prototype.$http = axios;
Vue.use(Vuelidate);
const swalOptions = {
    confirmButtonClass: "sano-btn border-sano-red-orange bg-sano-red-orange text-white",
    cancelButtonClass: "sano-btn border-sano-blue bg-sano-blue text-white",
    customClass: "sano-modal",
    buttonsStyling: false,
    reverseButtons: true,
};

Vue.use(VueSweetalert2, swalOptions);
Vue.use(VueAutosize);
Vue.use(VueTextareaAutosize);
Vue.use(VueScrollTo);
Vue.use(SocialSharing);

Vue.use(require("vue-moment"));

Vue.use(Auth);
Vue.use(Toast);
Vue.use(Api);

Vue.use(Meta);

// allows fragments to be wrapped around the root vue template (a blank HTML element)
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;
Vue.prototype.location = window.location;

Vue.directive("click-outside", {
    bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his childrens
            if (!(el === event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unbind(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
    },
});

// Request interceptor
axios.interceptors.request.use(
    async (request) => {
        if (request.url[0] === "/") {
            if (has(window, "__PRERENDER_INJECTED")) {
                // TBD: consider fetching from a live db
                request.url = `http://localhost:5000${request.url}`;
            } else {
                request.url = process.env.VUE_APP_API_URL + request.url;
            }
            const token = Vue.auth.getToken();
            if (token) request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axios.interceptors.response.use(
    (response) => {
        // update jwt if a new one is sent back - also handles login
        Vue.auth.setToken(response.headers.token);
        return response;
    },
    /* eslint-disable */
    function (error) {
        if (error.response) {
            switch (error.response.status) {
			case 409:
				break; // resource already exists during a create
            case 400:
				if (error.response.data.error) {
					Vue.toast({ type: "error", title: error.response.data.error });
				} else {
					Vue.toast({ type: "error", title: "Server error unspecified" });
				}
				break;
			case 422:
				Vue.toast({ type: "error", title: "Invalid parameters sent to endpoint" });
				break;
			case 429:
				Vue.toast({ type: "error", title: "Too many attempts. Please wait 1 minute and try again" });
				break;
			case 401:
				Vue.auth.destroyToken();
				Vue.toast({ type: "error", title: error.response.data.error });
				router.push("/login");
				break;
			case 404:
				Vue.toast({ type: "error", title: error.response.data.error });
				router.push("/notfound");
				break;
			case 405:
				Vue.toast({ type: "error", title: "API end point does not exist" });
				break;
			default:
				Vue.toast({ type: "error", title: `Unrecognised response code ${error.response.status}` });
            }
        } else {
            Vue.toast({ type: "error", title: "Network Error" });
        }
        return Promise.reject(error);
	}
	/* eslint-enable */
);

// Route Guards
router.beforeEach(async (to, from, next) => {
    // set the query params of the route in the store
    ["referral_code", "charity", "study_key", "utm_source", "utm_medium", "utm_campaign", "utm_content", "id", "click"].forEach((prop) => {
        if (to.query[prop]) {
            store.dispatch("setQueryParameter", { key: prop, value: to.query[prop] });
        }
    });

    if (to.meta.title) {
        document.title = `${to.meta.title} | Sano Genetics`;
    } else {
        document.title = "Sano";
    }

    if (
        to.matched.some((record) => {
            return record.meta.requiresGuest;
        }) &&
        Vue.auth.loggedIn()
    ) {
        // prevent access to 'requiresGuest' routes from logged in users
        next({
            path: "/research",
        });
    } else if (
        to.matched.some((record) => {
            return record.meta.requiresAdmin;
        }) &&
        !Vue.auth.isAdmin()
    ) {
        // prevent access to 'requiresAdmin' routes from users without admin in their jwt
        Vue.toast({ type: "error", title: "Admins only" });
        next({
            path: "/research",
        });
    } else if (
        to.matched.some((record) => {
            return record.meta.requiresTeam;
        }) &&
        !Vue.auth.isTeam()
    ) {
        // prevent access to 'requiresTeam' routes from users without admin in their jwt
        Vue.toast({ type: "error", title: "Team members only" });
        next({
            path: "/research",
        });
    } else if (
        to.matched.some((record) => {
            return record.meta.requiresAuth;
        }) &&
        !Vue.auth.loggedIn()
    ) {
        // prevent access to 'requiresAuth' routes from logged out users
        Vue.toast({ type: "info", title: "Please log in first" });
        next({
            path: "/login",
            query: { redirect: to.fullPath },
        });
    } else {
        next();
    }
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

// on hot-reload clear the console
window.addEventListener("message", (e) => {
    if (e.data && typeof e.data === "string" && e.data.match(/webpackHotUpdate/)) {
        console.clear();
    }
});
