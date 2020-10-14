<template>
<div v-if="gallery.length" class="product-gallery">
    <div class="product-gallery__image-full">
        <img :src="getGalleryActive.image1Url" alt="">
    </div>
    <div class="product-gallery__image-thumbs">
        <div v-for="item in gallery" :key="item.id" class="product-gallery__image-thumbs__item" @click="handleGalleryItemClick(item.id)">
            <div class="product-gallery__image-thumbs__item__inner">
                <img :src="item.thumbUrl" alt="">
            </div>

        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from 'vue';
import IProductGallery from '@/interfaces/IProductGallery';

export default defineComponent({
    props: {
        gallery: {
            type: Array as PropType < Array < IProductGallery >> ,
            default: () => [],

        }
    },
    data() {
        return {
            galleryActive: 1,
        }
    },
    computed: {
        getGalleryActive(): IProductGallery {

            const imageIndex = this.gallery.findIndex(g => g.id === this.galleryActive);
            return this.gallery[imageIndex];
        },
    },
    methods: {
        handleGalleryItemClick(id: number) {
            this.galleryActive = id;
        }
    },
});
</script>

<style lang="scss">
.product-gallery {
    &__image-full {
        height: calc(100vh - 300px);

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__image-thumbs {
        display: flex;
        margin-left: -5px;
        margin-right: -5px;

        &__item {
            width: 25%;
            padding: 0px 5px;
            cursor: pointer;

            &__inner {
                border: 1px solid var(--border-color);
                height: 100px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>
