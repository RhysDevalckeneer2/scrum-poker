<script lang="ts">
export default {
    name: "MenuListItemIcon",
    props: {
        iconName: String,
    },
    components: {}
}
</script>

<template>
    <i :class="['pi', iconName, 'mr-2.5']"></i>
</template>