<template>
    <div id="RegisterBox">
        <div v-if="loading" class="text-center">
            <img src="@/assets/images/misc/dna_spinner_white.svg" alt="loading" class="inline-block" />
        </div>

        <div v-else>
            <div class="relative my-2 rounded">
                <label class="sano-screenreader-only">Email</label>
                <input
                    ref="email_input"
                    v-model.trim="email"
                    class="sano-input rounded appearance-none w-full leading-tight"
                    placeholder="user@email.com"
                    data-cy="email input"
                    type="email"
                    spellcheck="false"
                    @keyup.enter="register"
                />
                <div class="sano-text-input-focuser"></div>
            </div>

            <div class="text-center relative z-10">
                <div class="text-sano-xs mb-6">
                </div>
                <button
                    style="opacity: 1"
                    class="sano-btn w-full border-white text-white bg-sano-red-orange"
                    data-cy="register button"
                    @click="register"
                >
                    Register
                </button>
            </div>
        </div>
    </div>
</template>

<script>
const touchMap = new WeakMap();

export default {
    name: "RegisterBox",
    data() {
        return {
            email: "",
            loading: false,
        };
    },
    methods: {
        register() {
            this.loading = true;
            this.$api.auth
                .register(this.email)
                .then(() => {
                    this.loading = false;
                    this.$router.push({
                        name: "register-thanks",
                        params: { email: this.email },
                    });
                })
                .catch(() => {
                    this.loading = false;
                });
        },
    },
};
</script>

<style scoped lang="scss">
.login-error-holder {
    min-height: 1.3rem;
}
</style>
