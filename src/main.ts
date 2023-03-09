import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from './router'

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Please come back! 😭";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});

createApp(App).use(router).mount('#app')
