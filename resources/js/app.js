/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'
require('./bootstrap');
window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPhoneAlt, faComments, faUserCircle, faCheckCircle, faStar, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faPhoneAlt)
library.add(faComments)
library.add(faUserCircle)
library.add(faCheckCircle)
library.add(faStar)
library.add(faTag)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('navbar', require('./components/Navbar').default)
Vue.component('homepage', require('./components/Homepage').default)
Vue.component('homepage-banner', require('./components/HomepageBanner').default)
Vue.component('homepage-php-features', require('./components/HomepagePhpFeatures').default)
Vue.component('homepage-packages', require('./components/HomepagePackages').default)
Vue.component('homepage-php-limit', require('./components/HomepagePhpLimit').default)
Vue.component('homepage-all-features', require('./components/HomepageAllFeatures').default)
Vue.component('homepage-support-laravel', require('./components/HomepageSupportLaravel').default)
Vue.component('homepage-php-modules', require('./components/HomepagePhpModules').default)
Vue.component('homepage-linux-section', require('./components/HomepageLinuxSection').default)
Vue.component('my-footer', require('./components/MyFooter').default)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
