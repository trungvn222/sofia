<template>
<div class="hero-banner">
    <img alt="Sofia" :src="slides[currentSlideIndex]" />
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    props: {
        slides: {
            type: Array,
            default: () => []
        },

    },
    data() {
        return {
            currentSlideIndex: 0,
            interval: 0
        }
    },
    methods: {
        randomImage() {
            this.currentSlideIndex = ++this.currentSlideIndex % this.slides.length;
        }
    },
    created() {
        if (this.slides && this.slides.length) {
            this.interval = setInterval(this.randomImage, 3000);
        }

    },
    unmounted() {
        clearInterval(this.interval);
    }

})
</script>

<style lang="scss">
.hero-banner {
    height: 100vh;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
