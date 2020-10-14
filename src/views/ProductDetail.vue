<template>
<default noBanner="true">
    <div class="container pb-5">
        <div class="row">
            <div class="col-12 col-lg-6 mb-4">
                <product-gallery v-if="productDetail" :gallery="productDetail.gallery" />
            </div>
            <div class="col-12 col-lg-6">
                <heading class="mb-5" v-if="productDetail" :title="productDetail.title" />
                <div class="product_meta">
                    <p><span>CODE: </span>TB2 - 02 - 0002</p>
                    <p><span>DIMENSIONS: </span>W2600xD1100xH760</p>
                    <p><span>MATERIAL: </span></p>
                    <ul class="material">
                        <li>America Walnut</li>
                        <li>Manufactured wood combined with Veneer</li>
                    </ul>
                </div>
                <a @click.prevent="handleShowForm" class="btn-primary mt-4" href="">GET FREE QUOTE</a>
            </div>
        </div>

        <heading class="mt-5 mb-3 text-center" v-if="relatedProduct.length > 0" title="Related Products" />
        <ProductList :products="relatedProduct" />
        <div v-if="showForm" class="modal">
            <div class="modal__inner">
                <a @click.prevent="handleCloseForm" class="modal__close" href="">X</a>
                <Form @submitsuccess="handleSubmitForm" />
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
    useStore,
} from 'vuex';

import Heading from "@/components/Heading.vue";
import ProductGallery from "@/components/ProductGallery.vue";
import ProductList from "@/components/ProductList.vue";
import Form from "@/components/Form.vue";
import Default from "@/templates/Default.vue";
import {
    useRouter,
    useRoute
} from 'vue-router';

export default defineComponent({
    data() {
        return {
            showForm: false
        }
    },
    computed: {

        ...mapGetters(['productDetail', 'relatedProduct'])
    },
    methods: {

        handleGetProductDetail() {
            const {
                params: {
                    slug = ''
                }
            } = useRoute();
            const store = useStore();
            if (slug) {

                store.dispatch('getProductDetail', slug);
            }
        },
        handleShowForm() {
            this.showForm = true;
        },
        handleCloseForm() {
            this.showForm = false;
        },
        handleSubmitForm(values: object) {
            console.log(values);
        }
    },
    components: {
        Default,
        Heading,
        ProductGallery,
        ProductList,
        Form
    },
    created() {
        this.handleGetProductDetail();
    },
    updated() {
        this.handleGetProductDetail();
    }
});
</script>

<style lang="scss">
.modal {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(#000000, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 30px;

    &__inner {
        margin: auto;
        width: 1140px;
        background: #fff;
        padding: 15px;
        position: relative;
        z-index: 2;
    }

    &__close {
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);
        width: 30px;
        height: 30px;

        text-align: center;
        line-height: 30px;
        z-index: 3;
        background: #fff;
        border-radius: 100%;
        color: #000;
        cursor: pointer;
        font-size: 18px;

        &:hover {
            cursor: pointer;
            color: #000;
            text-decoration: none;
        }
    }
}
</style>
