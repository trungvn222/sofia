<template>
<header :class="containerClass">
    <div class="header__inner d-flex align-items-center justify-content-between">
        <Logo :dark="isLogoDark" />
        <ToggleMenuButton class="header__inner__toggle-menu" :active="toggleMenu" :type="isBtnDark" :onClick="handleToggleMenu" />
        <Navigation :show="toggleMenu" />
    </div>
</header>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

import Navigation from "@/components/Navigation.vue";
import ToggleMenuButton from "@/components/ToggleMenuButton.vue";
import Logo from "@/components/Logo.vue";

export default defineComponent({
    props: {
        dark: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Navigation,
        ToggleMenuButton,
        Logo,
    },
    data() {
        return {
            toggleMenu: false,
            headerScrolling: false,
        }
    },
    methods: {
        handleToggleMenu() {
            this.toggleMenu = !this.toggleMenu
        },
        handleScroll(): void {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                this.headerScrolling = true
            } else {
                this.headerScrolling = false
            }
        }
    },

    computed: {
        containerClass(): any {
            return {
                'container-full': true,
                'header': true,
                'header--scrolling': this.headerScrolling
            }
        },
        isLogoDark(): boolean {
            const w = window.innerWidth;
            return this.headerScrolling || (this.toggleMenu && w <= 767) || this.dark;
        },
        isBtnDark(): string {
            return (this.toggleMenu || this.headerScrolling || this.dark) ? 'dark' : '';
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    }
})
</script>

<style lang="scss">
@import '../assets/scss/mixins';

.header {
    position: fixed;
    left: 0px;
    right: 0px;
    z-index: 99;

    &__inner {
        padding-top: 15px;
        padding-bottom: 15px;

        &__toggle-menu {
            position: relative;
            z-index: 10;
        }
    }

    &--scrolling {
        background: #fff;
    }
}

@include respond-to('large') {
    .header {
        &__inner {
            padding-top: 25px;
            padding-bottom: 25px;
        }
    }
}
</style>
