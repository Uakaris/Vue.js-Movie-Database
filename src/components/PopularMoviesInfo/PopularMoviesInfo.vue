<template>
    <div class="PopularMoviesInfoContainer">
        <div>
            <router-link to="/TMDB-Code-Challenge" class="HomeButton"
                >Home</router-link
            >
        </div>
        <h1 class="PopularMoviesInfoHeading">Popular Movies</h1>
        <PopularMoviesList :movies="movies" />
        <p v-if="loading && page === 1">Loading...</p>
        <p v-if="error">{{ error }}</p>
        <p v-if="loading">Loading more movies...</p>
        <button
            v-if="!loading"
            class="LoadMoreButton"
            @click="loadMoreMovies"
            :disabled="loading"
        >
            Load More
        </button>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as apiService from "../../services/apiService";
import PopularMoviesList from "../PopularMoviesList/PopularMoviesList.vue";

export default {
    components: {
        PopularMoviesList,
    },
    setup() {
        const movies = ref([]);
        const page = ref(1);
        const loading = ref(false);
        const error = ref(null);

        const fetchPopularMovies = async (page) => {
            loading.value = true;
            try {
                const data = await apiService.fetchPopularMovies(page);
                movies.value.push(...data.results);
            } catch (err) {
                error.value = err.message;
            } finally {
                loading.value = false;
            }
        };

        onMounted(() => {
            fetchPopularMovies(page.value);
        });

        const loadMoreMovies = () => {
            page.value += 1;
            fetchPopularMovies(page.value);
        };

        return {
            movies,
            page,
            loading,
            error,
            loadMoreMovies,
        };
    },
};
</script>

<style scoped>
.PopularMoviesInfoHeading {
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 22px;
    margin-bottom: 12px;
}

.PopularMoviesInfoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.LoadMoreButton {
    color: white;
    display: flex;
    margin-top: 22px;
    margin-bottom: 12px;
    padding: 12px 22px;
    background: rgba(74, 74, 74, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: all 0.3s ease;
}

.LoadMoreButton:hover {
    background: rgba(74, 74, 74, 0.15);
    transform: scale3d(1.05, 1.05, 1);
}

.Loading {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.HomeButton {
    color: white;
    display: flex;
    margin-top: 22px;
    margin-bottom: 12px;
    padding: 12px 22px;
    background: rgba(74, 74, 74, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    text-decoration: none;
    transition: all 0.3s ease;
}

.HomeButton:hover {
    background: rgba(74, 74, 74, 0.15);
    transform: scale3d(1.05, 1.05, 1);
}
</style>
