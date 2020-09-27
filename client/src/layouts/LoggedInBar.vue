<template>
    <div
        v-if="$auth.loggedIn()"
        class="my-sano-nav shadow-sano-standard sm:shadow-none relative"
        :style="`border-bottom-color: ${route_specific_color}; z-index: 101;`"
        :class="{ block: $store.getters.menu_hidden }"
    >
        <div class="container max-w-2xl mx-auto">
            <div class="flex relative sano-wider-nav leading-proper-none lg:px-px">
                <div v-for="(item, index) in items" :key="index" :class="`w-1/4 sm:w-1/5 lg:w-auto ${item.show_mobile ? '' : 'hidden sm:block'}`">
                    <div class="sm:-mb-px lg:mr-6">
                        <!-- eslint-disable -->
                        <router-link
                            :to="'/' + item.path"
                            class="my-sano-nav-link block"
                            :class="`${$route.path !== '/' + item.path ? 'text-sano-burgundy border-sano-pink-light lg:border-white' : show_menu_on_mob ? 'text-sano-red-orange border-white' : 'text-sano-red-orange border-sano-red-orange'}`"
                            :data-cy="item.title"
                        >
                        <!-- eslint enable -->
                            <div :class="`relative h-4 w-${item.icon_width} lg:mr-1 mx-auto flex flex-col justify-end`">
                                <svg
                                    :class="`sano-use-svg ${$route.path == '/' + item.path ? 'sano-svg-red-orange' : 'sano-svg-burgundy'}`"
                                    :viewBox="item.view_box"
                                    v-html="item.svg_path"
                                ></svg>
                            </div>
                            <div class="h-4 text-sano-sm block" style="line-height: 1.2;" v-html="item.title"></div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "LoggedInBar",
    data() {
        return {
            /* eslint-disable */
            items: [
                {
                    title: "Home",
                    svg_path: `<g fill="none" stroke-width="1.05" opacity="0.95"><rect x="0.5" y="1" width="4" height="4" rx="0.5" /><rect x="7.5" y="1" width="4" height="4" rx="0.5" /><rect x="7.5" y="8" width="4" height="4" rx="0.5" /><rect x="0.5" y="8" width="4" height="4" rx="0.5" /></g>`,
                    path: "home",
                    view_box: "0 -2 14 15",
                    icon_width: "4",
                    show_mobile: true,
                },
                {
                    title: "Studies",
                    svg_path: `<g fill="none" stroke-width="0.9"><rect x="10.8125" y="0.625" width="2.5" height="9.39865" transform="rotate(90 10.8125 0.625)"/><rect x="17.5" y="5.68579" width="2.5" height="16.0861" transform="rotate(90 17.5 5.68579)"/><rect x="9.00488" y="10.7466" width="2.5" height="7.59122" transform="rotate(90 9.00488 10.7466)"/></g>`,
                    path: "research",
                    view_box: "0 -1 18 16",
                    icon_width: "5",
                    show_mobile: true,
                }
            ],
            /* eslint-enable */
        };
    },
    computed: {
        route_specific_color() {
            const inner_page_names = ["research"];
            return inner_page_names.indexOf(this.$route.name) < 0 ? "#FFF5F3" : "#F7D2D2";
        },
        show_menu_on_mob() {
            return !this.$store.state.mobile_menu_hidden;
        },
    },
};
</script>

<style scoped lang="scss">
.my-sano-nav {
    @apply w-full z-100 bg-white border-b border-t border-sano-pink-light;

    @media (max-width: 991px) {
        @apply bottom-0 border-t-0 fixed;
    }

    @media (min-width: 992px) {
        @apply sticky;
        top: 65px;
    }
}

.container {
    @media (max-width: 767px) {
        padding-left: 0;
        padding-right: 0;
    }
}

.my-sano-nav-link {
    @apply no-underline;

    @media (max-width: 991px) {
        @apply text-center w-full p-2 border-t relative;

        &:before {
            @apply absolute right-0 bg-sano-pink-light;
            content: "";
            top: 0.65rem;
            bottom: 0.65rem;
            width: 2px;
        }
    }

    @media (min-width: 992px) {
        @apply text-left flex items-center pt-4 pb-5;
    }
}
</style>
