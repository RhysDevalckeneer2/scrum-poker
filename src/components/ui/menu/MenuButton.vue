<script lang="ts">
import Divider from '../Divider.vue';
import MenuList from './MenuList.vue';

export default {
    name: "MenuButton",
    props: {
        version: String,
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    components: { Divider, MenuList },
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
}
</script>

<template>
    <div class="relative" @click="toggleVisibility">
        <button class="border border-slate-400 bg-white rounded px-2.5 py-2 flex justify-center items-center content-center hover:bg-slate-100">
            <i v-if="isVisible" class="pi pi-times text-lg text-slate-500"></i>
            <i v-else class="pi pi-bars text-lg text-slate-500"></i>
        </button>
        <div v-if="isVisible" class="absolute bg-white w-48 left-0 rounded z-20 shadow mt-2">
            <MenuList />
        </div>
    </div>
</template>