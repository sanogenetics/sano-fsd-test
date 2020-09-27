import Vue from "vue";
import Router from "vue-router";
import NotFound from "./pages/misc/NotFound";
import Auth from "./layouts/Auth";
import Register from "./pages/auth/Register";
import RegisterThanks from "./pages/auth/RegisterThanks";
import PasswordLost from "./pages/auth/PasswordLost";
import PasswordThanks from "./pages/auth/PasswordThanks";

import Wrapper from "./layouts/Wrapper";
import Home from "./pages/participant/Home";
import Research from "./pages/participant/Research";

// import TestGoogleMapsApi from "./tests/pages/TestGoogleMapsApi"; // note this page is used for testing the google maps places API

const Login = () => import(/* webpackChunkName: "login_complete_reset" */ "./pages/auth/Login"),
    RegisterComplete = () => import(/* webpackChunkName: "login_complete_reset" */ "./pages/auth/RegisterComplete"),
    PasswordReset = () => import(/* webpackChunkName: "login_complete_reset" */ "./pages/auth/PasswordReset");

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: "*",
            name: "not-found",
            component: NotFound,
        },        
        // STANDARD ROUTES
        {
            path: "/",
            name: "",
            component: Wrapper,
            children: [
                {
                    path: "",
                    redirect: "/login",
                },
                {
                    path: "home",
                    name: "home",
                    component: Home,
                    meta: { requiresAuth: true, title: "Home" },
                },
                {
                    path: "research",
                    name: "research",
                    component: Research,
                    meta: { title: "Research" },
                },
            ]
        },
        // AUTH ROUTES
        {
            path: "/",
            component: Auth,
            children: [
                {
                    path: "login",
                    name: "login",
                    component: Login,
                    meta: { requiresGuest: true, title: "Login" },
                },
                {
                    path: "register",
                    name: "register",
                    component: Register,
                    meta: { requiresGuest: true, title: "Register" },
                },
                {
                    path: "thanks/register",
                    name: "register-thanks",
                    component: RegisterThanks,
                    meta: { requiresGuest: true, title: "Thanks!" },
                },
                {
                    path: "complete/:token",
                    name: "register-complete",
                    component: RegisterComplete,
                    meta: { requiresGuest: true, title: "Register" },
                },
                {
                    path: "password-lost",
                    name: "password-lost",
                    component: PasswordLost,
                    props: true,
                    meta: { requiresGuest: true, title: "Lost Password" },
                },
                {
                    path: "password-thanks",
                    name: "password-thanks",
                    component: PasswordThanks,
                    meta: { requiresGuest: true, title: "Thanks!" },
                },
                {
                    path: "resetpass/:token",
                    name: "password-reset",
                    component: PasswordReset,
                    meta: { title: "Reset Password" },
                },
            ],
        }
    ],
});
