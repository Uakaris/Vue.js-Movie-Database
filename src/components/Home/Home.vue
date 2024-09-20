<template>
    <div class="HomeContainer">
        <h1 class="HomeTitle">Movie Database</h1>
        <router-link
            to="/Vue.js-Movie-Database/popularMovies"
            class="PopularButton"
        >
            Popular Movies
        </router-link>
    </div>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
.HomeContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 20px;
    color: #fff;
    overflow: hidden;
}

.PopularButton {
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

.PopularButton:hover {
    background: rgba(74, 74, 74, 0.15);
    transform: scale3d(1.05, 1.05, 1);
}
</style>
