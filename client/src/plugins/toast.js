export default function (Vue) {
    Vue.toast = Vue.swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
    });

    Object.defineProperties(Vue.prototype, {
        $toast: {
            get() {
                return Vue.toast;
            },
        },
    });
}
