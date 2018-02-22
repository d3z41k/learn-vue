Vue.component('modal', {
    props: ['title', 'body'],

    data() {
        return {
            isVisable: true
        }
    },

    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    `
})

new Vue({
    el: '#root',

    data: {
        showModal: false
    }
})