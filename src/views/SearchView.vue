<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import MusicCard from '../components/MusicCard.vue';
import SearchBar from '../components/SearchBar.vue';
</script>

<template>
    <div class="min-h-screen w-full bg-darker">
        <NavBar />
        <div class="content">
            <SearchBar class="pt-28" />
            <div class="w-full grid grid-cols-4 gap-10 pl-12 mt-8">
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
                <MusicCard image-url="https://assets.puzzlefactory.pl/puzzle/302/116/original.jpg" />
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.content
    max-width: 1400px
    margin: 0 auto
</style>