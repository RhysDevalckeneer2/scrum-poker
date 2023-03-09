<script lang="ts">
// Import components
import MenuListItemIcon from './MenuListItemIcon.vue'
export default {
    name: "MenuListItem",
    props: {
        link: String,
        label: String,
        iconName: String,
    },
    components: {
        MenuListItemIcon
    },
}
</script>

<template>
    <a :href="link" class="py-2.5 px-3 text-slate-800 block text-sm hover:bg-slate-100">
        <MenuListItemIcon :iconName="iconName"/>
        {{ label }}
    </a>
</template>