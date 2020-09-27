<template>
    <LoggedinSidebarTemplate page_name="dashboard">
        <template v-slot:main-content>
            <div class="max-w-xl mx-auto mb-10 sm:mb-0 min-h-screen">
            </div>
        </template>
        <template v-slot:sidebar-content>
        </template>
    </LoggedinSidebarTemplate>
</template>

<script>
import LoggedinSidebarTemplate from "@/layouts/LoggedinSidebarTemplate";

export default {
    name: "Home",
    components: {
        LoggedinSidebarTemplate,
    },
}
</script>

<style scoped lang="scss">
.sect {
    @apply relative bg-white mt-6 px-4 pt-5 pb-4 border border-sano-pink rounded overflow-hidden;
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.75));

    @media (min-width: 992px) {
        @apply p-6;
    }

    @media (min-width: 1200px) {
        @apply p-8;
    }
}

.hint-box {
    @apply bg-sano-pink-light border border-sano-pink text-sano-red-orange py-3 px-6 rounded leading-tight;
}

.avoid-main-padding {
    @media (min-width: 1200px) {
        @apply -ml-5 pl-5 pr-12;
        width: calc(100% + 4.25rem);
    }
}
</style>
