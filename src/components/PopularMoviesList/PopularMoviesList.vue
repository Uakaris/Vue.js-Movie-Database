<template>
    <div class="ListContainer">
        <ul class="PopularMoviesList">
            <PopularMoviesCard
                v-for="movie in movies"
                :key="movie.id"
                :movie="movie"
            />
        </ul>
    </div>
</template>

<script>
import PopularMoviesCard from "../PopularMoviesCard/PopularMoviesCard.vue";

export default {
    components: {
        PopularMoviesCard,
    },
    props: {
        movies: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.PopularMoviesList {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-gap: 2rem;
    padding: 1rem;
}

@media (max-width: 600px) {
    .PopularMoviesList {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 601px) and (max-width: 900px) {
    .PopularMoviesList {
        grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
}

@media (min-width: 1601px) and (max-width: 4000px) {
    .PopularMoviesList {
        grid-template-columns: repeat(8, minmax(200px, 1fr));
    }
}

.ListContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style: none;
}
</style>
