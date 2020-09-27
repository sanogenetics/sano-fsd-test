<template>
    <div
        id="TopNav"
        :class="`sticky top-0 ${white_version ? '' : 'border-b'} lg:border-b-0`"
        :style="`z-index: 101; border-color: ${route_specific_color}`"
    >
        <div :class="`text-white ${white_version ? '' : 'bg-white lg:text-sano-red-orange'} py-2`">
            <SvgSymbols />
            <div id="TopNavMob" class="lg:hidden flex justify-between px-3 items-center">
                <div class="w-8"></div>
                <button class="z-10 sano-logo-link" @click="gotoAndClosemenu('landing')">
                    <span class="sano-screenreader-only">Sano home</span>
                    <div class="w-16 h-6">
                        <!-- eslint-disable-next-line max-len --><!-- prettier-ignore -->
                        <svg :class="`sano-menu-transition sano-use-svg ${showMenuOnMob || white_version ? 'sano-svg-white' : 'sano-svg-red-orange'}`">
                            <use xlink:href="#sano-wordmark" />
                        </svg>
                    </div>
                </button>
                <button
                    :class="`sano-menu-transition sano-btn w-8 h-8 px-0 z-10
                        ${showMenuOnMob ? 'text-white bg-sano-red-orange' : white_version ? 'text-white' : 'text-sano-red-orange bg-white'}`"
                    style="border-color: transparent;"
                    aria-haspopup="true"
                    aria-label="toggle show/hide menu"
                    :aria-expanded="`${showMenuOnMob ? true : false}`"
                    @click="$store.commit('TOGGLE_MOBILE_MENU_HIDDEN')"
                >
                    <span :class="`sano-hamburger-line ${showMenuOnMob ? 'hamburger-close' : ''}`"></span>
                    <span :class="`sano-hamburger-line ${showMenuOnMob ? 'hamburger-close' : ''}`"></span>
                    <span :class="`sano-hamburger-line ${showMenuOnMob ? 'hamburger-close' : ''}`"></span>
                </button>
            </div>
            <transition name="mobile-menu">
                <nav v-show="showMenuOnMob" class="sano-nav-bar">
                    <div class="container max-w-2xl mx-auto">
                        <div class="sano-wider-nav items-center lg:flex justify-between">
                            <button class="hidden lg:flex sano-logo-link" @click="gotoAndClosemenu('landing')">
                                <span class="sano-screenreader-only">Sano home</span>
                                <div :class="`sano-logo-lockup w-24 ${white_version ? 'sano-svg-white' : 'sano-svg-red-orange'}`">
                                    <div>
                                        <svg class="sano-use-svg">
                                            <use xlink:href="#sano-symbol" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg class="sano-use-svg">
                                            <use xlink:href="#sano-wordmark" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <ul>
                                <li>
                                    <button class="sano-nav-link" aria-label="Go to Join research page" @click="gotoAndClosemenu('join-research')">
                                        Join Research
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="sano-nav-link"
                                        aria-label="Go to Personalised reports page"
                                        @click="gotoAndClosemenu('personalised-reports')"
                                    >
                                        Personalised Reports
                                    </button>
                                </li>
                                <li>
                                    <button class="sano-nav-link" aria-label="Go to About page" @click="gotoAndClosemenu('about')">
                                        About
                                    </button>
                                </li>
                                <li class="px-0 sm:px-2">
                                    <button
                                        aria-label="Go to Researchers page"
                                        :class="`${
                                            white_version ? 'border-white text-white' : 'bg-sano-pink border-sano-pink text-sano-burgundy'
                                        } sano-btn sano-btn-narrow register-btn`"
                                        @click="gotoAndClosemenu('researchers')"
                                    >
                                        For&nbsp;researchers
                                    </button>
                                </li>
                                <li v-if="loggedIn" class="p-0 lg:pr-0 relative">
                                    <button
                                        :class="`
                                            ${white_version ? 'border-white' : 'bg-sano-red-orange border-sano-red-orange'}
                                            ${showMenuOnMob ? 'bg-sano-burgundy border-sano-burgundy min-w-full' : ''}
                                            sano-menu-transition sano-btn sano-btn-narrow text-white relative w-full
                                        `"
                                        data-cy="topnav-logout"
                                        @click="logout"
                                    >
                                        Logout
                                    </button>
                                </li>
                                <!-- eslint-disable-next-line max-len --><!-- prettier-ignore -->
                                <div v-else class="flex justify-center bg-sano-burgundy border-sano-burgundy border lg:border-0 lg:bg-transparent rounded py-px -mx-1 items-center">
                                    <li class="double-btn">
                                        <!-- eslint-disable -->
                                        <button
                                            style="border-right: 0;"
                                            :class="`
                                                border-sano-burgundy bg-sano-burgundy 
                                                ${white_version ? 'lg:border-white lg:bg-transparent' : 'lg:bg-sano-red-orange lg:border-sano-red-orange'} 
                                                sano-btn sano-btn-narrow text-white
                                            `"
                                            @click="gotoAndClosemenu('login')"
                                        >
                                            Login
                                        </button>
                                        <!-- eslint-enable -->
                                    </li>
                                    <li class="p-0 flex">
                                        <!-- eslint-disable-next-line max-len --><!-- prettier-ignore -->
                                        <span :class="`bg-sano-burgundy ${white_version ? 'lg:bg-transparent' : 'lg:bg-sano-red-orange'} text-white py-1 -mx-2 mt-px lg:mt-1 relative z-10  h-6 overflow-hidden`">
                                            :
                                        </span>
                                        <!-- eslint-disable -->
                                        <button
                                            style="border-left: 0;"
                                            :class="`border-sano-burgundy bg-sano-burgundy ${ white_version ? 'lg:border-white lg:bg-transparent' : 'lg:bg-sano-red-orange lg:border-sano-red-orange'} sano-btn sano-btn-narrow text-white`"
                                            @click="goToRegister"
                                        >
                                            Sign&nbsp;Up
                                        </button>
                                        <!-- eslint-enable -->
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </transition>
        </div>
    </div>
</template>

<script>
import SvgSymbols from "@/layouts/SvgSymbols";

export default {
    name: "TopNav",
    components: {
        SvgSymbols,
    },
    props: {
        white_version: Boolean,
        path: {
            type: String,
            default: "/home",
        },
    },
    data() {
        return {
            loggedIn: this.$auth.loggedIn(),
            redirect: this.$route.path.startsWith("/study/") ? this.$route.path : "/home",
        };
    },
    computed: {
        showMenuOnMob() {
            return !this.$store.state.mobile_menu_hidden;
        },
        route_specific_color() {
            const inner_page_names = ["home", "reports", "research", "my-data", "settings", "pages"];
            return inner_page_names.indexOf(this.$route.name) < 0 ? "#FFF5F3" : "#F7D2D2";
        },
    },
    methods: {
        async logout() {
            await this.$api.auth.logout();
            this.loggedIn = this.$auth.loggedIn();
            this.$router.push({ name: "login" });
        },
        goToRegister() {
            let route = this.$route.name;
            if (this.$route.name === "study-landing") {
                route = this.$route.path.split("/land/")[1];
                if (route.indexOf("/") > -1) {
                    route = route.split("/")[0];
                }
                route += "*landing";
            }
            this.$store.dispatch("setCTASource", `topnav_${route}`);
            this.$router.push({ name: "register" });
        },
        gotoAndClosemenu(routename) {

            if (routename === "login") {
                this.$router.push({ name: routename, query: { redirect: this.redirect } });
            } else if (this.$route.name !== routename) {
                this.$router.push({ name: routename });
            }
        },
    },
};
</script>

<style scoped lang="scss">
.double-btn {
    @media (min-width: 992px) {
        padding-right: 0 !important;
        position: relative;
        left: 3px;
    }

    @media (max-width: 991px) {
        padding: 0 !important;
    }
}

.sano-logo-link {
    transition: transform 0.3s ease-in-out;

    &:focus {
        transform: scale(1.1);
    }

    &:after {
        display: none;
    }
}

.sano-nav-bar {
    @media (max-width: 991px) {
        /* Mobile menu & transition */
        @apply fixed left-0 right-0 top-0 bottom-0 bg-sano-red-orange;
        transition: opacity 0.3s ease-in-out;
    }

    /* Ensure menu is always visible on desktop */
    @media (min-width: 992px) {
        display: block !important;
        opacity: 1 !important;
    }

    & > div {
        /* all this positioning should center the list on screen,
        ** and allow it to scroll if it doesn't fit */
        @media (max-width: 991px) {
            @apply py-4 absolute right-0 left-0;
            height: calc(100% - 3rem);
            overflow: auto;
        }
    }

    ul {
        /* Most of the style differences between desktop & mobile */
        @apply text-lg text-center;

        @media (max-width: 991px) {
            @apply absolute pt-1 left-0 right-0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 200px;
        }

        @media (min-width: 992px) {
            @apply flex text-sano-sm items-center;
        }
    }

    li {
        @media (max-width: 767px) {
            &:not(.p-0) {
                @apply leading-tight;
                padding-top: 0.4rem;
                padding-bottom: 0.4rem;
            }
        }

        @media (min-width: 992px) {
            @apply px-1;
        }
    }
}

/* Transition menu with opacity, and add colour transitions for buttons */
.mobile-menu-enter,
.mobile-menu-leave-to {
    opacity: 0;
}

.sano-menu-transition {
    transition-property: background-color, color, border-color, opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.sano-btn {
    #TopNav &:hover,
    #TopNav &:before {
        transform: translateY(0);
    }
}

.register-btn {
    width: 100%;

    @media (min-width: 992px) {
        padding: 0.35rem 1rem;
        width: auto;
    }
}

.sano-hamburger-line {
    position: absolute;
    height: 1px;
    top: 0.65rem;
    left: 0.3rem;
    right: 0.3rem;
    background-color: currentColor;
    transition: transform 0.45s ease-in-out;

    &:nth-child(1) {
        transform-origin: left center;

        &.hamburger-close {
            transition-delay: 0.15s;
            transform: translate(15%, -200%) rotate(45deg) scaleX(0.86);
        }
    }

    &:nth-child(2) {
        top: 0.925rem;
        transition-duration: 0.45s;

        &.hamburger-close {
            transform: scaleX(0);
            transition: transform 0.3s ease-in-out;
        }
    }

    &:nth-child(3) {
        top: 1.25rem;
        transform-origin: left center;

        &.hamburger-close {
            transition-delay: 0.15s;
            transform: translate(15%, 0) rotate(-45deg) scaleX(0.86);
        }
    }
}

.sano-nav-link {
    @apply no-underline px-2 block w-full leading-tight;
    color: inherit;
}

.pin-half-rem {
    top: 0.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
}
</style>
