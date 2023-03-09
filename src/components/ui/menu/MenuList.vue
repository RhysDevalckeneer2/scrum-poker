<script lang="ts">
import MenuListItem from './MenuListItem.vue';

export default {
    name: "MenuList",
    components: { MenuListItem },
    data() {
        return {
            items: [
                { label: "Create table", link: "/sessions/create", iconName: "pi-plus" },
                { label: "Join table", link: "/sessions/join", iconName: "pi-sign-in" },
                { label: "Github repo", link: "https://github.com/RhysDevalckeneer2/scrum-poker", iconName: "pi-github" },
                { label: "Dark mode", link: "#", iconName: "pi-moon" },
            ]
        }
    }
}
</script>

<template>
    <div class="absolute bg-white w-52 left-0 rounded z-20 shadow mt-2">
        <MenuListItem 
            v-for="item in items"
            :label="item.label" 
            :link="item.link"
            :iconName="item.iconName"    
        />
        <Divider />
        <a 
            href="https://github.com/RhysDevalckeneer2/scrum-poker/issues" 
            target="_blank"
            class="py-2.5 px-3 text-red-500 block text-sm hover:bg-red-50 flex justify-between items-center">
                Found an issue?
            <i class="pi pi-external-link ml-2 text-sm"></i>
        </a>
        <p class="pt-2 pb-2.5 px-3 text-slate-400 block text-xs">
            Version 0.1.0
        </p>
    </div>
</template>