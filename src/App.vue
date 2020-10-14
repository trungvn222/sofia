<template>
<router-view />
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Options({
    components: {
        Header,
        Footer
    },
})
export default class App extends Vue {
    msg!: string;
}
</script>

<style lang="scss">
@import './assets/scss/_app.scss';
</style>
