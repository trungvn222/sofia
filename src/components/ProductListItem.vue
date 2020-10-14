<template>
<div class="products__item">
    <div class="products__item__inner">
        <router-link :to="link" class="products__item__inner__thumb">
            <img :src="thumbUrl" :alt="title">
            <span class="products__item__inner__thumb__view-more">
                <span>View More</span>
            </span>
        </router-link>
        <h2 class="products__item__inner__title">
            <router-link :to="link">
                {{title}}
            </router-link>
        </h2>
    </div>

</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        thumbUrl: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        }
    },
    computed: {
        link(): any {
            return {
                name: 'ProductDetail',
                params: {
                    slug: this.slug
                }
            }
        }
    }
})
</script>

<style lang="scss">
@import '../assets/scss/mixins';

.products {
    &__item {
        &__inner {
            &__thumb {
                padding-top: 66%;
                position: relative;
                display: block;

                img,
                &__view-more {
                    position: absolute;
                    top: 0;
                    height: 100%;
                    width: 100%;
                }

                img {
                    object-fit: contain;

                }

                &__view-more {
                    left: 0px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #fff;
                    background: rgba(#000000, 0.8);
                    text-transform: uppercase;
                    font-size: 16px;
                    opacity: 0;
                    transition: opacity 0.2s linear;
                    will-change: opacity;

                    span {
                        display: block;
                        padding: 15px 15px;
                        width: 200px;
                        border: 1px solid #fff;
                        max-width: calc(100% - 30px);
                    }
                }
            }

            &__title {
                font-size: 18px;
                text-align: center;
                color: #000;
                padding: 10px 0;

                a {
                    color: inherit;
                    text-decoration: none;

                    &:hover {
                        text-decoration: none;
                    }
                }
            }

        }

        &:hover & {
            &__inner {
                &__thumb {
                    &__view-more {
                        opacity: 1;
                    }
                }
            }
        }
    }

    @include respond-to('medium') {
        &__item {
            &__inner {
                &__title {
                    font-size: 20px;
                }
            }
        }
    }
}
</style>
