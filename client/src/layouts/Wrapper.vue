<template>
    <div id="Wrapper">
        <div class="min-h-screen flex flex-col">
            <div class="flex-grow">
                <TopNav v-if="!is_survey" />
                <LoggedInBar v-if="!is_survey" />
                <div class="h-auto">
                    <router-view></router-view>
                </div>
            </div>
            <FooterBar v-if="!is_survey" />
        </div>
    </div>
</template>

<script>
import TopNav from "@/layouts/TopNav";
import FooterBar from "@/layouts/FooterBar";
import LoggedInBar from "@/layouts/LoggedInBar";

export default {
    components: {
        TopNav,
        FooterBar,
        LoggedInBar,
    },
    computed: {
        is_survey() {
            return this.$route.path.indexOf("/survey/") > -1;
        },
    },
};
</script>

<style scoped lang="scss"></style>
