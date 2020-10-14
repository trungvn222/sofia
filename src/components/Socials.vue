<template>
<div :class="containerClass">
    <div class="socials__inner">
        <a class="socials__inner__item" target="__blank" :v-if="facebookUrl" :href="facebookUrl">
            <img src="@/assets/imgs/facebook.svg" alt="facebook">
        </a>
        <a class="socials__inner__item" target="__blank" :v-if="youtubeUrl" :href="youtubeUrl">
            <img src="@/assets/imgs/youtube.svg" alt="youtube">
        </a>
        <a class="socials__inner__item" target="__blank" :v-if="instagramUrl" :href="instagramUrl">
            <img src="@/assets/imgs/instagram.svg" alt="instagram">
        </a>
    </div>

</div>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from 'vue'

export default defineComponent({
    props: {
        facebookUrl: String,
        youtubeUrl: String,
        instagramUrl: String,
        size: {
            type: String,
            default: 'medium'
        }
    },
    computed: {
        containerClass(): Array < string > {
            return ['socials', `socials--${this.size}`];
        }
    }
})
</script>

<style lang="scss">
.socials {
    &__inner {

        &__item {
            display: inline-block;
            vertical-align: middle;

            img {
                display: block;
                width: 100%;
            }

            &:hover {
                img {
                    filter: brightness(0.5);
                }
            }
        }
    }

    &--small & {
        &__inner {
            margin-left: -10px;
            margin-right: -10px;

            &__item {
                width: 30px;
                margin-left: 10px;
                margin-right: 10px;
            }
        }
    }

    &--medium & {
        &__inner {
            margin-left: -15px;
            margin-right: -15px;

            &__item {
                margin-left: 15px;
                margin-right: 15px;
                width: 48px;
            }
        }
    }
}
</style>
