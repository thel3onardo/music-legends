<script setup lang="ts">
import Heart from 'vue-material-design-icons/Heart.vue';
import VolumeHigh from 'vue-material-design-icons/VolumeHigh.vue';
import ArrowExpand from 'vue-material-design-icons/ArrowExpand.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
import PlayOutline from 'vue-material-design-icons/PlayOutline.vue';
import Replay from 'vue-material-design-icons/Replay.vue'
</script>

<template>
    <div class="w-full bg-dark font-eesti">
        <div class="flex justify-center py-6 2xl:py-8 relative">
            <div class="flex items-center h-full absolute left-0 top-0 pl-10">
                <Heart :size="32" class="mr-6 2xl:mr-10 text-green-300" />
                <div class="flex flex-col text-white">
                    <h3 class="font-medium text-xl 2xl:text-2xl">Warriors</h3>
                    <p class="text-sm 2xl:text-lg text-gray uppercase">Riot games ft. Imagine Dragons</p>
                </div>
            </div>
            <div class="flex items-center text-white">
                <Replay :size="32" />
                <div class="flex px-12 2xl:px-20">
                    <ChevronLeft :size="32" />
                    <PlayOutline :size="32" />
                    <ChevronRight :size="32" />
                </div>
                <Replay :size="32" />
            </div>
            <div class="flex items-center text-gray absolute right-0 pr-10">
                <VolumeHigh :size="28" class="mr-10" />
                <ArrowExpand :size="28" />
            </div>
        </div>
    </div>
</template>