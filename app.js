import { PhotoWall } from './components/PhotoWall.js';

const app = Vue.createApp({});
app.component('photo-wall', PhotoWall);
app.mount('#app'); 