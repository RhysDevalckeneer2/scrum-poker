<script lang="ts">
import Divider from '../Divider.vue';


export default {
    name: "MenuButton",
    props: {
        version: String,
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    components: { Divider },
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
            <a href="/sessions/create"
                class="py-2.5 px-3 text-slate-800 block text-sm hover:bg-slate-100">
                <i class="pi pi-plus mr-2"></i>
                Create table
            </a>
            <a href="/sessions/join"
                class="py-2.5 px-3 text-slate-800 block text-sm hover:bg-slate-100">
                <i class="pi pi-sign-in mr-2"></i>
                Join table
            </a>
            <Divider />
            <a href="https://github.com/RhysDevalckeneer2/scrum-poker" target="_blank"
                class="py-2.5 px-3 text-slate-800 block text-sm hover:bg-slate-100">
                <i class="pi pi-github mr-2"></i>
                Github repo
            </a>
            <a href="#"
                class="line-through py-2.5 px-3 text-slate-300 block text-sm hover:bg-slate-100">
                <i class="pi pi-moon mr-2"></i>
                Dark mode
            </a>
            
            <Divider />
            <a href="https://github.com/RhysDevalckeneer2/scrum-poker/issues" target="_blank"
                class="py-2.5 px-3 text-red-500 block text-sm hover:bg-red-50 flex justify-between items-center">
                Found an issue?
                <i class="pi pi-external-link ml-2 text-sm"></i>
            </a>
            <p class="py-2.5 px-3 text-slate-400 block text-xs">
                Version 0.1.0
            </p>
        </div>
    </div>
</template>