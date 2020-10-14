<template>
<div class="logo">
    <router-link :to="{ name: 'Home' }">
        <img alt="Sofia" :src="logoSrc" />
    </router-link>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from 'vue'
import LogoWhite from '@/assets/imgs/logo-white.png';
import LogoBlack from '@/assets/imgs/logo-black.png';

export default defineComponent({
    props: {
        dark: Boolean,
        logoUrl: {
            type: String,
            require: true,
            default: LogoWhite
        },
        logoUrlDark: {
            type: String,
            require: true,
            default: LogoBlack
        }
    },
    computed: {
        logoSrc(): string {
            return this.dark ? this.logoUrlDark : this.logoUrl;
        }
    }
})
</script>

<style lang="scss">
.logo {
    position: relative;
    z-index: 10;

    img {
        width: 97px;
        height: auto;
    }
}
</style>
