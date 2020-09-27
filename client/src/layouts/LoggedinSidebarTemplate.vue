<!-- overflow-hidden -->
<template>
    <div
        id="template-top"
        class="sm:flex-no-wrap min-h-screen flex flex-wrap w-full bg-sano-pink-light"
    >
        <transition name="fade-load">
            <div v-show="!ready_to_show_main" class="sm:fixed w-full">
                <div class="flex flex-wrap sm:flex-no-wrap" aria-hidden="true">
                    <div class="sm:w-2/5 md:w-1/4 h-px" style="max-width: 320px;"></div>
                    <div class="w-3/5 md:w-3/4 flex-shrink-0 flex-grow opacity-50 xl:pl-5 xl:pr-10`">
                        <div class="max-w-xl mx-auto">
                            <div class="mx-4">
                                <div class="w-full bg-white py-16 border border-sano-pink mt-6 text-center text-xl text-sano-pink">
                                    <div class="h-24 mx-auto relative w-full">
                                        <transition-group name="fade-load">
                                            <div key="stage-2" class="absolute sano-pin-v-mid w-full">
                                                <svg class="sano-use-svg sano-svg-pink mx-auto">
                                                    <use xlink:href="#spinner" />
                                                </svg>
                                            </div>
                                        </transition-group>
                                    </div>
                                </div>
                                <div v-for="(row, r_index) in rows" :key="r_index">
                                    <div v-if="page_name !== 'dashboard'" class="w-full mt-6 mb-10 flex">
                                        <div class="w-full md:w-1/2 md:mr-2 bg-white py-32 border border-sano-pink"></div>
                                        <div class="w-full md:w-1/2 md:ml-2 bg-white py-32 border border-sano-pink hidden md:block"></div>
                                    </div>
                                    <div v-else class="w-full bg-white py-32 border border-sano-pink mt-6 mb-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="fade-load">
            <div
                v-show="ready_to_show_main"
                class="w-full md:mb-10 md:w-3/4 flex-shrink-0 flex-grow py-px xl:pl-5 xl:pr-12 overflow-hidden"
            >
                <slot name="main-content"></slot>
            </div>
        </transition>
        <aside
            class="sano-side-bar border-sano-pink flex-shrink-0 w-full relative md:w-1/4 sm:w-2/5 sm:border-b-0 z-10"
        >
            <div class="fade-load-leave-active bg-white absolute top-0 left-0 w-full h-full"></div>
            <!-- <div
                class="fade-load-leave-active bg-sano-pink absolute top-0 right-0 w-px h-full"
                :style="`z-index: ${page_name === 'dashboard' ? '1' : '51'};`"
            ></div> -->
            <div :class="`${sticky_sidebar ? 'sticky-sidebar' : ''}`">
                <slot name="sidebar-content"></slot>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: "LoggedinSidebarTemplate",
    props: {
        sticky_sidebar: Boolean,
        page_name: String,
    },
    data() {
        return {
            ready_to_show_main: false,
            show_spinner: false,
            rows: [0, 1],
        };
    },
    mounted() {
        // Don't show the spinner right away, because when the dashboard loads fast
        // (as it should) there's no time to animate so it looks out of place
        this.show_spinner = true;
        setTimeout(() => {
            this.ready_to_show_main = true;
        }, 1000);
    },
};
</script>

<style scoped lang="scss">
.fade-load-enter-active {
    transition: opacity 0.6s ease-in-out 0.45s;
}

.fade-load-leave-active {
    transition: opacity 0.45s ease-in-out;
}

.fade-load-leave-to,
.fade-load-enter {
    opacity: 0;
}

.sano-side-bar {
    @media (max-width: 575px) {
        background: transparent !important;
    }

    @media (min-width: 576px) {
        max-width: 320px;
        order: -1;
    }

    &.full-width-sm {
        @media (max-width: 767px) {
            max-width: 100% !important;
        }
    }
}

.sticky-sidebar {
    @media (min-width: 576px) {
        @apply sticky z-50;
        top: 4rem;
    }
}

.sticky-sidebar:not(.min-header) {
    @media (max-width: 991px) and (min-width: 576px) {
        top: 3rem;
    }

    @media (min-width: 992px) {
        top: 7.35rem;
    }
}
</style>
