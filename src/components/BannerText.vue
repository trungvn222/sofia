<template>
<div :class="containerClass">
    <img :alt="text" :src="imageUrl" />
    <div class="container-full banner-text__inner">
        <h3>
            <router-link v-if="link" :to="link">{{text}}</router-link>
            <template v-else>{{text}}</template>
        </h3>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    props: {
        imageUrl: String,
        text: String,
        link: Object,
        size: {
            type: String,
            default: 'full-height' // full-height or half-height
        }
    },
    computed: {
        containerClass() {
            const classes = ['banner-text'];
            switch (this.size) {
                case 'half-height':
                    classes.push('banner-text--half-height');
                    break;
            }
            return classes;
        }
    }
})
</script>

<style lang="scss">
.banner-text {
    height: 100vh;
    position: relative;

    &__inner {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);

        h3 {
            color: #fff;
            font-size: 30px;

            a {
                color: #fff;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &--half-height {
        height: 50vh;
    }
}
</style>
