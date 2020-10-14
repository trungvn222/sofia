<template>
<default>
    <hero-banner :slides="slides" />
    <div class="container">
        <heading class="text-center my-5" title="Featured Products" />
        <product-list :products="featuredProducts" />
        <div class="text-center">
            <router-link class="view-more-btn" :to="{ name: 'Products' }">View All Products >></router-link>
        </div>

    </div>
    <banner-text text="Our Story" :imageUrl="OurStoryImageUrl" :link="{ name: 'OurStory' }"></banner-text>
</default>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import Default from "@/templates/Default.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import ProductList from "@/components/ProductList.vue";
import Heading from "@/components/Heading.vue";
import BannerText from "@/components/BannerText.vue";
import thumbUrl1 from '@/assets/imgs/product-1.png';
import OurStoryImage from '@/assets/imgs/homepage-our-story.png';
import {
    useStore,
    mapGetters
} from 'vuex';

import Slide1 from '@/assets/imgs/hero-banner-1.png';
import Slide2 from '@/assets/imgs/hero-banner-2.png';
import Slide3 from '@/assets/imgs/hero-banner-3.png';

export default defineComponent({
    components: {
        HeroBanner,
        ProductList,
        Heading,
        BannerText,
        Default
    },
    data() {
        return {
            slides: [Slide1, Slide2, Slide3],
            OurStoryImageUrl: OurStoryImage
        }
    },
    computed: {
        ...mapGetters(['featuredProducts'])
    },
    created() {
        const store = useStore();
        store.dispatch('getFeaturedProducts');
    }
});
</script>

<style lang="scss">
.view-more-btn {
    display: inline-block;
    padding: 15px 20px;
    border: 1px solid #000;
    border-radius: 100px;
    margin: 40px 0;
    color: #000;

    &:hover {
        color: #fff;
        background: #000;
        text-decoration: none;
    }
}
</style>
