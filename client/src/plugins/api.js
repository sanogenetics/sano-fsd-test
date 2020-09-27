import api from "@/api/export"; // uses alias defined in vue.config.js

export default function (Vue) {
    Vue.api = api;

    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return Vue.api;
            },
        },
    });
}
