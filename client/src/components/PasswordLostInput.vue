<template>
    <div id="PasswordLostInput">
        <div v-if="loading" class="text-center">
            <svg v-if="internal" class="w-12 h-12 sano-use-svg sano-svg-red-orange inline-block">
                <use xlink:href="#spinner" />
            </svg>
            <img v-else src="@/assets/images/misc/dna_spinner_white.svg" alt="loading" class="inline-block" />
        </div>
        <div v-else-if="completed" class="text-center">
            Check your inbox!
        </div>
        <div v-else>
            <div v-if="internal" class="mb-5"></div>
            <div v-else>
                <div class="relative my-2 rounded">
                    <label class="sano-screenreader-only">Email</label>
                    <input
                        v-model.trim="email"
                        :autofocus="'autofocus'"
                        class="sano-input rounded appearance-none w-full leading-tight"
                        :placeholder="starting_email"
                        type="email"
                        spellcheck="false"
                        @keyup.enter="sendResetLink"
                    />
                    <div class="sano-text-input-focuser"></div>
                </div>
            </div>

            <div class="relative z-10">
                <button
                    :style="`opacity: 1`"
                    class="sano-btn w-full border-white text-white bg-sano-red-orange"
                    @click="sendResetLink"
                >
                    Request reset
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

const touchMap = new WeakMap();

export default {
    name: "PasswordLostInput",
    props: {
        internal: Boolean,
        starting_email: {
            type: String,
            default: "user@email.com",
        },
    },
    data() {
        return {
            email: this.starting_email === "user@email.com" ? "" : this.starting_email,
            loading: false,
            completed: false,
        };
    },
    methods: {
        
        sendResetLink() {
            this.loading = true;
            this.$api.auth
                .reset(this.email)
                .then(() => {
                    if (this.internal) {
                        this.$router.push({
                            name: "settings",
                        });
                    } else {
                        this.$router.push({
                            name: "password-thanks",
                            params: { email: this.email },
                        });
                    }
                    this.loading = false;
                    this.completed = true;
                })
                .catch(() => {
                    this.$toast({
                        type: "error",
                        title: "There was a problem with the email input.",
                    });
                    this.loading = false;
                });
        },
    },
};
</script>

<style scoped lang="scss">
.login-error-holder {
    min-height: 1.1rem;
}

.sano-input {
    @apply border border-sano-pink;
}
</style>
