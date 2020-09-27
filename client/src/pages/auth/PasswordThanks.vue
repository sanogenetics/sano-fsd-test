<template>
    <div id="PasswordThanks" class="bg-sano-red-orange h-full min-h-screen">
        <SvgSymbols />
        <div :class="`bg-sano-burgundy fixed top-0 bottom-0 left-0 right-0 ${fade ? '' : 'faded-out'} to-fade-in`"></div>
        <div class="text-white text-center flex flex-col justify-between min-h-screen h-full relative z-10">
            <div class="fixed h-full top-0 bottom-0 left-0 right-0">
                <!-- eslint-disable -->
                <svg class="block mx-auto min-h-screen h-full" style="transform: translateY(-50%);">
                    <defs>
                        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="14348.375" y1="-15291.2109" x2="20108.3438" y2="-15291.2109" gradientTransform="matrix(-1.578467e-09 -0.0361 -0.0361 1.578467e-09 -342.5517 687.1356)"><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/><stop offset="0.09" style="stop-color:#FFFFFF;stop-opacity:0.6"/><stop offset="0.14" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop offset="0.19" style="stop-color:#FFFFFF;stop-opacity:0.8"/><stop offset="0.23" style="stop-color:#FFFFFF;stop-opacity:0.1"/><stop offset="0.31" style="stop-color:#FFFFFF"/><stop offset="0.41" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop offset="0.44" style="stop-color:#FFFFFF;stop-opacity:0.8"/><stop offset="0.48" style="stop-color:#FFFFFF;stop-opacity:0.1"/><stop offset="0.61" style="stop-color:#FFFFFF"/><stop offset="0.69" style="stop-color:#FFFFFF;stop-opacity:0.1"/><stop offset="0.76" style="stop-color:#FFFFFF;stop-opacity:0.3"/><stop offset="0.8" style="stop-color:#FFFFFF;stop-opacity:0.6"/><stop offset="0.83" style="stop-color:#FFFFFF;stop-opacity:0.3"/><stop offset="0.9" style="stop-color:#FFFFFF;stop-opacity:0.6"/><stop offset="0.99" style="stop-color:#FFFFFF;stop-opacity:0.1"/></linearGradient>
                        <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="171.1074" y1="65.0068" x2="249.2646" y2="65.0068"><stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.1"/><stop  offset="0.09" style="stop-color:#FFFFFF;stop-opacity:0.6"/><stop  offset="0.14" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop  offset="0.19" style="stop-color:#FFFFFF;stop-opacity:0.8"/><stop  offset="0.23" style="stop-color:#FFFFFF;stop-opacity:0.1"/><stop  offset="0.31" style="stop-color:#FFFFFF"/><stop  offset="0.41" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop  offset="0.44" style="stop-color:#FFFFFF;stop-opacity:0.8"/><stop  offset="0.48" style="stop-color:#FFFFFF;stop-opacity:0.1"/><stop  offset="0.61" style="stop-color:#FFFFFF"/><stop  offset="0.69" style="stop-color:#FFFFFF;stop-opacity:0.1"/><stop  offset="0.76" style="stop-color:#FFFFFF;stop-opacity:0.3"/><stop  offset="0.8" style="stop-color:#FFFFFF;stop-opacity:0.6"/><stop  offset="0.83" style="stop-color:#FFFFFF;stop-opacity:0.3"/><stop  offset="0.9" style="stop-color:#FFFFFF;stop-opacity:0.6"/><stop  offset="0.99" style="stop-color:#FFFFFF;stop-opacity:0.1"/></linearGradient>
                        <symbol id="helix" viewBox="165.5 -45 88.5 218.5"><path fill="url(#SVGID_1_)" d="M248.708-38.999c0,6.262-1.099,11.921-3.358,17.303c-2.013,4.793-4.907,9.254-8.849,13.637c-7.318,8.133-17.232,14.746-26.82,21.141c-9.577,6.387-19.48,12.992-26.782,21.109c-3.927,4.365-6.811,8.809-8.815,13.582c-2.249,5.357-3.342,10.993-3.342,17.229s1.093,11.87,3.342,17.229c2.004,4.774,4.888,9.217,8.815,13.583c7.301,8.116,17.205,14.721,26.783,21.109c9.588,6.395,19.5,13.006,26.819,21.141c3.942,4.381,6.837,8.842,8.851,13.636c2.259,5.381,3.358,11.042,3.358,17.302h-0.191c0-6.234-1.094-11.87-3.342-17.228c-2.005-4.774-4.889-9.218-8.815-13.583c-7.302-8.115-17.205-14.721-26.783-21.109c-9.587-6.395-19.5-13.006-26.819-21.141c-3.942-4.381-6.836-8.842-8.849-13.636c-2.259-5.381-3.358-11.042-3.358-17.303c0-6.262,1.098-11.921,3.358-17.303c2.013-4.793,4.907-9.254,8.849-13.637c7.317-8.133,17.231-14.746,26.819-21.141c9.575-6.387,19.479-12.992,26.782-21.109c3.928-4.365,6.811-8.809,8.814-13.582c2.25-5.357,3.343-10.993,3.343-17.229H248.708z"/><path opacity="0.1" fill="#FFFFFF" enable-background="new    " d="M209.901,12.816c-19.583,13.062-39.255,26.061-39.255,52.181s19.68,39.125,39.264,52.188c19.583-13.062,39.259-26.061,39.259-52.181S229.487,25.88,209.901,12.816z"/><path opacity="0.1" fill="#FFFFFF" enable-background="new" d="M209.91,117.186c19.583-13.062,39.259-26.061,39.259-52.181c0-9.228-2.457-16.816-6.497-23.35c-24.114,16.083-48.075,32.266-51.329,62.262C197.08,108.641,203.499,112.91,209.91,117.186z"/><radialGradient id="SVGID_2_" cx="17228.3672" cy="-15306.6016" r="1278.7521" gradientTransform="matrix(-1.578467e-09 -0.0361 -0.0361 1.578467e-09 -342.5517 687.1356)" gradientUnits="userSpaceOnUse"><stop  offset="0.88" style="stop-color:#FFFFFF;stop-opacity:0"/><stop  offset="1" style="stop-color:#FFFFFF"/></radialGradient><path opacity="0.19" fill="url(#SVGID_2_)" enable-background="new    " d="M210.18,12.816c-19.582,13.062-39.255,26.061-39.255,52.181s19.68,39.124,39.264,52.188c19.584-13.062,39.26-26.06,39.26-52.181S229.766,25.88,210.18,12.816z"/><path fill="url(#SVGID_3_)" d="M249.265,65.007c0,6.26-1.098,11.92-3.358,17.301c-2.013,4.794-4.907,9.254-8.849,13.636c-7.318,8.134-17.231,14.745-26.819,21.14c-9.578,6.387-19.481,12.992-26.783,21.107c-3.927,4.365-6.81,8.809-8.814,13.582c-2.25,5.357-3.343,10.993-3.343,17.228h-0.191c0-6.261,1.098-11.92,3.358-17.302c2.012-4.793,4.907-9.254,8.847-13.635c7.317-8.134,17.231-14.746,26.819-21.14c9.578-6.388,19.481-12.993,26.783-21.108c3.928-4.365,6.811-8.808,8.814-13.582c2.25-5.357,3.344-10.992,3.344-17.227s-1.094-11.87-3.344-17.227c-2.004-4.774-4.887-9.217-8.814-13.582c-7.302-8.116-17.205-14.721-26.783-21.108c-9.587-6.394-19.5-13.007-26.819-21.14c-3.941-4.381-6.835-8.842-8.847-13.636c-2.259-5.38-3.358-11.04-3.358-17.302h0.191c0,6.235,1.093,11.87,3.343,17.228c2.004,4.774,4.888,9.216,8.815,13.582c7.302,8.116,17.206,14.721,26.783,21.108c9.588,6.395,19.5,13.006,26.818,21.139c3.942,4.383,6.837,8.843,8.85,13.637C248.169,53.087,249.265,58.746,249.265,65.007z"/>
                        </symbol>
                    </defs>
                    <use xlink:href="#helix" />
                </svg>
                <!-- eslint-enable -->
            </div>
            <div class="fixed h-full top-0 bottom-0 left-0 right-0">
                <svg class="block mx-auto min-h-screen h-full" style="transform: translateY(50%);">
                    <use xlink:href="#helix" />
                </svg>
            </div>

            <router-link class="block mt-6 w-24 mx-auto" :to="{ name: 'landing' }">
                <span class="sano-screenreader-only">Sano home</span>
                <div class="sano-logo-lockup">
                    <div>
                        <svg class="sano-svg-white sano-use-svg">
                            <use xlink:href="#sano-symbol" />
                        </svg>
                    </div>
                    <div>
                        <svg class="sano-svg-white sano-use-svg">
                            <use xlink:href="#sano-wordmark" />
                        </svg>
                    </div>
                </div>
            </router-link>

            <div :class="`w-full max-w-xs mx-auto px-4 py-12 ${fade ? '' : 'faded-out'} to-fade-in`">
                <h1 class="sano-h1 mb-6 md:mb-4 mt-4 noSelect">
                    Sorted
                </h1>
                <p class="leading-tight pb-1 mb-1 noSelect">A reset link is en route&nbsp;to</p>
                <p class="py-2 mb-4 text-sano-burgundy rounded noSelect" style="background: rgba(255, 255, 255, 0.5);">
                    {{ $route.params.email }}
                </p>
                <p class="-mb-4 noSelect">
                    Please check your inbox to complete the reset process. You can now close&nbsp;this&nbsp;tab.
                </p>
            </div>
            <div :class="`${fade ? '' : 'faded-out'} to-fade-in`">
                <p class="mb-6 max-w-xs mx-auto leading-tight noSelect">
                    No email yet?<br />
                    Please check your spam&nbsp;folder
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import SvgSymbols from "@/layouts/SvgSymbols";

export default {
    name: "PasswordThanks",
    components: {
        SvgSymbols,
    },
    data() {
        return {
            fade: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.fade = true;
        }, 300);

        if (!this.$route.params.email) {
            this.$router.push("/login");
        }
    },
};
</script>

<style scoped>
.faded-out {
    opacity: 0;
}

.to-fade-in {
    transition: opacity 0.45s ease-in-out;
}
</style>
