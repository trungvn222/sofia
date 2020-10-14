<template>
<button :class="containerClass" @click="onClick">
    <span class="hamburger__inner">
        <span></span>
    </span>
</button>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from 'vue'

export default defineComponent({
    props: {
        type: String,
        active: Boolean,
        onClick: Function
    },
    computed: {
        containerClass: function (): any {
            return {
                'hamburger': true,
                'hamburger--dark': this.type === 'dark',
                'active': this.active
            }
        }
    }
})
</script>

<style lang="scss">
.hamburger {
    --border-color: #fff;
    width: 30px;
    padding: 0;
    border: 0px;
    background: none;
    position: relative;
    border: 2px solid var(--border-color);
    border-radius: 100%;
    overflow: hidden;
    outline: none !important;
    cursor: pointer;
    $this: &;

    &:hover {
        --border-color: #000;
    }

    &--dark {
        --border-color: #000;
    }

    &:before {
        content: "";
        padding-top: 100%;
        display: block;
    }

    &__inner {
        position: absolute;
        top: 23%;
        left: 23%;
        right: 23%;
        bottom: 23%;

        &:before,
        &:after,
        span {
            content: "";
            position: absolute;
            left: 0px;
            height: 2px;
            width: 100%;
            background: var(--border-color);
        }

        &:before {
            top: 0px;
        }

        &:after {
            bottom: 0px;
        }

        span {
            top: 50%;
            transform: translateY(-50%);
        }
    }

    &.active & {
        &__inner {
            &:before {
                top: 50%;
                transform: translateY(-50%) rotate(45deg);
            }

            &:after {
                bottom: 50%;
                transform: translateY(50%) rotate(-45deg);
            }

            span {
                opacity: 0;
            }
        }
    }
}
</style>
