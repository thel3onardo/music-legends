<script setup lang="ts">
import Heart from 'vue-material-design-icons/Heart.vue';
import VolumeHigh from 'vue-material-design-icons/VolumeHigh.vue';
import ArrowExpand from 'vue-material-design-icons/ArrowExpand.vue';
</script>

<template>
    <div class="w-full bg-dark font-eesti">
        <div class="flex justify-between py-5">
            <div class="flex items-center">
                <Heart fillColor="#fff" :size="32" class="mr-10" />
                <div class="flex flex-col text-white">
                    <h3 class="font-medium text-2xl">Warriors</h3>
                    <p class="text-lg text-gray uppercase">Riot games ft. Imagine Dragons</p>
                </div>
            </div>
            <div class="flex items-center text-gray">
                <VolumeHigh :size="32" class="mr-10" />
                <ArrowExpand :size="32" />
            </div>
        </div>
    </div>
</template>