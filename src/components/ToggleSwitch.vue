<script setup lang="ts">
    defineProps({
        labelTitle: String,
        checked: Boolean,
    });

    defineEmits(['update:checked'])
</script>

<template>
    <label :for="labelTitle">
        <div class="relative">
            <input @input="(event) => $emit('update:checked', event.target.checked)" type="checkbox" :checked="checked" :id="labelTitle" class="sr-only"/>
            <div class="toggleBackground bg-[#3755898c] w-14 h-8 rounded-full grid grid-cols-2 justify-around content-center text-center text-white">
            </div>
            <div class="toggleBall absolute left-1 top-1 bg-[#375589] w-6 h-6 rounded-full transition text-center flex justify-center items-center">
                <slot />
            </div>
        </div>
    </label>
</template>

<style scoped>
    input:checked ~ .toggleBall {
    transform: translateX(100%);
    background-color: #3755898c;
    }
</style> 
