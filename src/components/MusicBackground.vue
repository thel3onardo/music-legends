<script setup lang="ts">
import { useMusicStore } from '../stores/music';

const music = useMusicStore();
</script>

<template>
    <div class="h-full w-full bg-cover bg-center bg-no-repeat bg-gradient transition-all" :style="{ 'backgroundImage': `url('${music.getImageBg}')`}"></div>
</template>

<style lang="sass" scoped>
.bg-gradient
    position: relative
    &::before
        transition: background .3s ease
        content: ''
        position: absolute
        width: 100%
        height: 100%
        background: linear-gradient(0deg, rgba(20, 6, 31, 0.8), rgba(20, 6, 31, 0.4), rgba(20, 6, 31, 0.2))

    @media screen and (max-width: 768px)
        &::before
            content: ''
            position: absolute
            width: 100%
            height: 100%
            background: rgba(0, 0, 0, .75)
</style>