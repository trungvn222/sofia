<template>
<default>
    <banner-text text="Page Not Found, Go To Home" :imageUrl="OurStoryImageUrl" :link="{ name: 'Home' }"></banner-text>
</default>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import Default from "@/templates/Default.vue";
import BannerText from "@/components/BannerText.vue";
import OurStoryImage from '@/assets/imgs/homepage-our-story.png';

export default defineComponent({
    data() {
        return {
            OurStoryImageUrl: OurStoryImage
        }
    },
    components: {
        BannerText,
        Default
    },
});
</script>
