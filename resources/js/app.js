require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

mix.disableNotifications();

const app = new Vue({
    el: '#app',
});
