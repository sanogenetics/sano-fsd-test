<template>
    <div id="NotFound" class="bg-sano-pink-light min-h-screen h-full text-white overflow-hidden">
        <div :class="`absolute top-0 left-0 right-0 bottom-0 bg-sano-blue ${fade_in ? 'fade-in' : 'opacity-0'}`"></div>
        <TopNav white-version />
        <div :class="`delay-fade absolute top-0 bottom-0 sano-grid-offset ${fade_in ? 'fade-in' : 'opacity-0'}`">
            <div class="absolute top-0 left-0 right-0 h-24" style="background: linear-gradient(rgba(67, 62, 165, 1), rgba(67, 62, 165, 0));"></div>
            <div class="absolute bottom-0 left-0 right-0 h-48" style="background: linear-gradient(rgba(67, 62, 165, 0), rgba(67, 62, 165, 1));"></div>
            <div
                class="absolute bottom-0 left-0 top-0 w-24"
                style="background: linear-gradient(-90deg, rgba(67, 62, 165, 0), rgba(67, 62, 165, 1));"
            ></div>
            <div
                class="absolute bottom-0 right-0 top-0 w-48 md:w-76"
                style="background: linear-gradient(90deg, rgba(67, 62, 165, 0), rgba(67, 62, 165, 0.6) 25%, rgba(67, 62, 165, 1) 50%);"
            ></div>
        </div>
        <div :class="`delay-fade sano-screen-center ${fade_in ? 'fade-in' : 'opacity-0'}`">
            <div class="w-full md:w-1/2 relative">
                <h1 class="sano-screenreader-only">
                    Oops! Page not found.
                </h1>
                <div class="sano-magnify-group sano-border-shine rounded-full bg-sano-blue" aria-hidden="true">
                    <div class="absolute rounded-full overflow-hidden top-0 bottom-0 left-0 right-0 z-10">
                        <div class="absolute right-0 left-0 top-0 bottom-0 rounded-full" style="background: rgba(255, 255, 255, 0.2);"></div>
                        <div
                            class="absolute right-0 left-0 top-0 bottom-0 rounded-full"
                            style="background: rgba(255, 255, 255, 0.2); transform: translate(-50%, -35%);"
                        ></div>
                        <div class="bg-sano-red-orange text-white sano-pnf-label" style="top: 105px; left: 84px; width: 70px;">
                            <span class="text-xs sano-medium">Page</span>
                        </div>
                        <div class="text-sano-red-orange bg-white sano-pnf-label" style="top: 147px; left: 168px; width: 60px;">
                            <span class="text-xs sano-medium">not</span>
                        </div>
                        <div class="bg-sano-red-orange text-white sano-pnf-label" style="top: 189px; left: 126px; width: 82px;">
                            <span class="text-xs sano-medium">found</span>
                        </div>
                    </div>
                    <img class="sano-oops z-20" src="@/assets/images/misc/oops.png" alt="" />
                </div>
            </div>
            <div class="w-full relative z-10 pt-48 md:w-1/2">
                <p class="missing-message max-w-xs mx-auto text-center md:text-left pt-8 md:pt-0">
                    <span v-if="custom_message" v-html="custom_message" />
                    <span v-else>
                        It seems we are missing this piece of this sequence, and the page you’re looking for doesn't exist. If you think something is
                        wrong please
                        <button class="text-white no-underline border-b border-white" @click="openIntercom">
                            let us know
                        </button>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from "@/layouts/TopNav";

export default {
    name: "NotFound",
    components: {
        TopNav,
    },
    props: {
        custom_message: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            fade_in: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.fade_in = true;
        }, 0);
    },
    methods: {
        openIntercom() {
            window.Intercom("show");
        },
    },
};
</script>

<style scoped lang="scss">
.fade-in {
    transition: opacity 0.45s ease-in-out;
}

.delay-fade {
    transition-delay: 0.3s;
}

/* Extend the grid and 'over-fades' outside of the content bounds */
.sano-grid-offset {
    left: -20px;
    top: 30px;
    width: 65%;
}

.sano-magnify-group {
    @apply w-64 h-64 absolute top-0 left-0;
    right: auto;

    @media (max-width: 767px) {
        left: 50%;
        transform: translateX(-115%) scale(0.8);
    }

    @media (max-width: 576px) {
        transform: translateX(-80%) scale(0.6);
    }
}

.missing-message {
    @media (max-width: 767px) and (min-width: 576px) {
        transform: translateX(20%);
    }
}

.sano-oops {
    position: absolute;
    width: 300px;
    right: -263px;
    top: 35px;
    max-width: none;
}

.sano-screen-center {
    @apply flex flex-wrap items-stretch absolute w-full px-4;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 768px) {
        width: 600px;
        padding: 0;
    }
}

.sano-pnf-label {
    position: absolute;
    text-transform: uppercase;
    letter-spacing: 4px;
    height: 30px;
    margin-top: -1px;
    /* This means positioning these labels is easy, as they will always be well
        ** positioned on multiples of the spacing value */
    transform: translate(-50%, -50%);

    span {
        position: absolute;
        /* Tweak vertical position */
        top: calc(50% + 1px);
        /* 3px is to account for letter spacing at end */
        left: calc(50% + 3px);
        transform: translate(-50%, -50%);
        line-height: 1;
    }
}
</style>
