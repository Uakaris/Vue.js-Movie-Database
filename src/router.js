import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home/Home.vue";
import PopularMoviesInfo from "./components/PopularMoviesInfo/PopularMoviesInfo.vue";

const routes = [
    {
        path: "/TMDB-Code-Challenge",
        component: Home,
    },
    {
        path: "/TMDB-Code-Challenge/popularMovies",
        component: PopularMoviesInfo,
    },
    {
        path: "/", // Route for the root path
        redirect: "/TMDB-Code-Challenge", // Redirect to your desired route
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
