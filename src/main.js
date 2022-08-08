import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import components from '@/components/UI'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .directive('visible', (el, binding) => {
        el.style.visibility = binding.value ? 'visible' : 'hidden'
    })
    .directive('scroll', (el, binding) => {
        let f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }

        window.addEventListener('scroll', f)
    })
    .use(router)
    .use(store)
    .mount('#app')