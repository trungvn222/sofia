<template>
<default>
    <banner-text class="text-center" text="Products" :imageUrl="OurStoryImageUrl" size="half-height"></banner-text>
    <div class="container-full py-5">
        <div class="row">
            <div class="col-12 col-lg-3">
                <heading class="mb-5" title="Products Category" />
                <ul v-if="categories.length > 0" class="reset-ul">
                    <li class="mb-3" v-for="cat in categories" :key="cat.ID">
                        <div class="checkbox">
                            <input v-model="selectedCats" type="checkbox" name="product-category[]" :id="`product-category-${cat.termID}`" :value="cat.termID">
                            <label :for="`product-category-${cat.termID}`">{{cat.label}}</label>
                        </div>
                    </li>

                </ul>
            </div>
            <div class="col-12 col-lg-9">
                <product-list :products="products" />
            </div>
        </div>
    </div>
</default>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import {
    mapGetters,
    mapActions,
    useStore,
} from 'vuex';

import Default from "@/templates/Default.vue";
import ProductList from "@/components/ProductList.vue";
import BannerText from "@/components/BannerText.vue";
import OurStoryImage from '@/assets/imgs/homepage-our-story.png';
import Heading from "@/components/Heading.vue";

export default defineComponent({
    data() {
        return {
            selectedCats: [],
            OurStoryImageUrl: OurStoryImage
        }
    },
    components: {
        ProductList,
        BannerText,
        Heading,
        Default
    },
    computed: {
        ...mapGetters(['categories', 'products'])
    },
    methods: {
        ...mapActions(['setFilterProducts'])
    },
    watch: {
        selectedCats(value) {
            this.setFilterProducts(value);
        }
    },
    created() {
        const store = useStore();
        store.dispatch('getCategories');
        store.dispatch('getProducts');
    }
});
</script>

<style lang="scss">
.checkbox {
    position: relative;

    input {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 20px;
        height: 20px;
        opacity: 0;

        &:checked {
            &+label {
                &:before {
                    content: "✓";
                    color: #000;
                }
            }
        }
    }

    label {
        display: flex;
        align-items: center;
        cursor: pointer;

        &:before {
            content: "";
            display: block;
            width: 18px;
            height: 18px;
            border: 1px solid #000;
            margin-right: 15px;
            line-height: 15px;
            text-align: center;
            cursor: pointer;
        }
    }
}
</style>
