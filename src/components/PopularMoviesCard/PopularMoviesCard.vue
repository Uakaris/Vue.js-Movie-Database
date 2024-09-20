<template>
    <li class="MovieCard">
        <img
            class="MoviePoster"
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
        />
        <h2 class="MovieTitle">{{ movie.title }}</h2>
        <div class="accordion" :id="uniqueId">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button"
                        type="button"
                        @click="toggleCollapse"
                        :aria-expanded="isOpen"
                        :aria-controls="collapseId"
                    >
                        Overview
                    </button>
                </h2>
                <div
                    :id="collapseId"
                    class="accordion-collapse"
                    :class="{ collapse: !isOpen }"
                >
                    <div class="accordion-body">{{ movie.overview }}</div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isOpen: false,
        };
    },
    computed: {
        uniqueId() {
            return `accordion-${this.movie.id}`;
        },
        collapseId() {
            return `collapse-${this.movie.id}`;
        },
    },
    methods: {
        toggleCollapse() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped>
.MovieTitle {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px;
}

.MovieCard {
    display: flex;
    flex-direction: column;
    background: rgba(74, 74, 74, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.MoviePoster {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

p {
    color: white;
    text-align: justify;
    margin: 12px;
}
</style>
