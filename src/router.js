import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home/Home.vue";
import PopularMoviesInfo from "./components/PopularMoviesInfo/PopularMoviesInfo.vue";

const routes = [
    {
        path: "/Vue.js-Movie-Database",
        component: Home,
    },
    {
        path: "/Vue.js-Movie-Database/popularMovies",
        component: PopularMoviesInfo,
    },
    {
        path: "/", 
        redirect: "/Vue.js-Movie-Database", 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
