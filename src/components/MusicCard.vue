<script setup lang="ts">
    const properties = defineProps({
        imageUrl: {
            type: String,
            required: true,
        }
    })
</script>

<template>
    <div class="w-52 shadow-lg shadow-green-400/40 rounded-xl overflow-hidden transition">
        <img :src="imageUrl" alt="testing" class="h-full object-cover" />
    </div>
</template>