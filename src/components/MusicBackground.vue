<script setup lang="ts">
import { useMusicStore } from '../stores/music';

const music = useMusicStore();
</script>

<template>
    <div class="h-full w-full bg-cover bg-center bg-no-repeat bg-gradient" :style="{ 'backgroundImage': `url('${music.getImageBg}')`}"></div>
</template>

<style lang="sass" scoped>
.bg-gradient
    position: relative
    &::before
        content: ''
        position: absolute
        width: 100%
        height: 100%
        background: linear-gradient(0deg, rgba(20, 6, 31, 0.8), rgba(20, 6, 31, 0.4), rgba(20, 6, 31, 0.2))
</style>