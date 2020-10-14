<template>
<default>
    <banner-text class="text-center" text="About" :imageUrl="OurStoryImageUrl" size="half-height"></banner-text>
    <div class="container">
        <heading class="text-center my-5" title="Comming Soon" />
    </div>
</default>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import Default from "@/templates/Default.vue";
import Heading from "@/components/Heading.vue";
import BannerText from "@/components/BannerText.vue";
import OurStoryImage from '@/assets/imgs/homepage-our-story.png';

export default defineComponent({
    components: {
        Heading,
        Default,
        BannerText
    },
    data() {
        return {

            OurStoryImageUrl: OurStoryImage
        }
    },
});
</script>
