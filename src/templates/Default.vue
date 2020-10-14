<template>
<Header :dark="noBanner" />
<div v-if="noBanner" class="header-spacer"></div>
<slot></slot>
<Footer />
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
    props: {
        noBanner: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Header,
        Footer
    },
});
</script>

<style lang="scss">
@import '../assets/scss/mixins';

.header-spacer {
    padding-top: 150px;

    @include respond-to('medium') {
        padding-top: 200px;
    }
}
</style>
