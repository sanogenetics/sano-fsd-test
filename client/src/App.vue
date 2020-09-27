<template>
    <div id="app" :class="`${last_interaction_key ? '' : 'hide-focus-children'}`" @mousedown="mouseInteract" @keydown="keyInteract">
        <router-view />
    </div>
</template>

<script>
import Vue from "vue";
import "./assets/css/main.css";
import { getLSPrivacyServices } from "./js/helpers/localstorage";

export default {
    name: "App",
    metaInfo() {
        return {
            title: "Sano Genetics | DNA Testing for Health & Genetics Research",
        };
    },
    data() {
        return {
            last_interaction_key: false,
        };
    },
    mounted() {
        const self = this;
    },
    methods: {
        // intercom - disable if user cookie preference (in privacy) has been set

        mouseInteract() {
            this.last_interaction_key = false;
        },
        keyInteract() {
            this.last_interaction_key = true;
        },
    },
};
</script>

<style lang="scss"></style>
