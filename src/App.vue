<script lang="ts">
// Import layouts
import AppHeader from './layouts/AppHeader.vue'
import AppFooter from './layouts/AppFooter.vue'

export default {
    name: "App",
    components: {
        AppHeader: AppHeader,
        AppFooter: AppFooter
    }
}
</script>

<template>
    <AppHeader />
        <router-view />
    <AppFooter />
</template>
