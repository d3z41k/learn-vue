Vue.component('message', {
    props: ['title', 'body'],

    data() {
        return {
            isVisable: true
        }
    },

    template: `
        <article class="message" v-show="isVisable">
            <div class="message-header">
                {{ title }}

                <button type="button" @click="isVisable = false">x</button>
            </div>

            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `
})

new Vue({
    el: '#root'
})