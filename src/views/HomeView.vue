<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import PlayerBar from "../components/PlayerBar.vue";
import MusicBackground from "../components/MusicBackground.vue";
import { useMusicStore } from '../stores/music';
''
const music = useMusicStore();

music.setImageBg('https://images.hdqwalls.com/wallpapers/cute-anime-girl-caty-hairs-5h.jpg');
</script>

<template>
    <div class="flex flex-col justify-between h-screen bg-black relative">
        <NavBar />
        <MusicBackground />
        <PlayerBar />
    </div>
</template>