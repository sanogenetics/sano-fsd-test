<template>
    <footer id="FooterBar" class="relative z-10">
        <div class="sano-footer bg-sano-blue pt-12 pb-12 sm:pb-20 lg:py-16 px-2 sm:px-0 md:px-3 lg:px-1">
            <div class="container max-w-sm md:max-w-2xl mx-auto">
                <div class="sano-wider-nav flex flex-wrap items-stretch">
                    <ul class="w-full md:w-2/5 lg:w-1/2 md:pr-4 lg:pr-8 text-sano-sm">
                        <div class="flex flex-wrap items-stretch">
                            <div class="w-full lg:w-1/3">
                                <li class="py-0 lg:pt-2">
                                    
                                </li>
                            </div>
                        </div>
                    </ul>
                    <div class="w-full md:w-3/5 lg:w-1/2 text-white md:pl-4 lg:pl-8 flex flex-col text-center md:text-left mt-4 sm:mt-10 md:mt-0">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: "FooterBar",
    data() {
        return {
            logged_in: this.$auth.loggedIn(),
        };
    },
    methods: {
        goToRegister() {
            let route = this.$route.name;
            if (this.$route.name === "study-landing") {
                route = this.$route.path.split("/land/")[1];
                if (route.indexOf("/") > -1) {
                    route = route.split("/")[0];
                }
                route += "*landing";
            }
            this.$router.push({ name: "register" });
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    @apply px-2;

    @media (min-width: 992px) and (max-width: 1152px) {
        @apply px-4;
    }
}

li {
    @apply px-0;
}

.left-col li {
    @apply pr-2;
}

.link {
    @apply inline-block py-2 px-3 text-grey no-underline text-sano-burgundy opacity-75;
}

.link:hover {
    @apply opacity-100;
}

.title {
    @apply inline-block py-2 px-3 text-sano-burgundy no-underline font-medium tracking-wide font-semibold;
}

.logo {
    @apply block items-center text-sano-burgundy mr-6 no-underline opacity-75;
}

.logo:hover {
    @apply opacity-100;
}

.sano-footer a:not(.sano-btn-narrow) {
    font-weight: 300;
    color: #fff;

    &:not(:hover) {
        text-decoration: none;
    }
}
</style>
