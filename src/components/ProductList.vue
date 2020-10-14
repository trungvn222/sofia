<template>
<div class="products row" v-if="products.length">
    <product-list-item :class="itemClass" v-for="item in products" :key="item.id" :title="item.title" :thumbUrl="item.thumbUrl" :slug="item.slug" />
</div>
<p v-else>
    Products Not Found
</p>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from 'vue';
import ProductListItem from '@/components/ProductListItem.vue';

interface Product {
    id: number,
        title: string,
        thumbUrl: string,
        slug: string
}

export default defineComponent({
    props: {
        columns: {
            type: Number,
            default: 3
        },
        products: {
            type: Array as PropType < Array < Product > | [] > ,
            default: []
        },
    },
    components: {
        ProductListItem
    },
    computed: {
        itemClass() {
            const cols = ['col-12', 'col-md-6', 'mb-3'];
            switch (this.columns) {
                case 4:
                    cols.push('col-lg-3');
                    break;
                case 6:
                    cols.push('col-lg-2');
                    break;
                default:
                case 3:
                    cols.push('col-lg-4');
                    break;
            }
            return cols;
        }
    },
    created() {
        console.log(this.products);
    }
})
</script>

<style lang="scss">
.products {
    &--cols3 & {
        &__item {
            width: 33.333%;
        }
    }
}
</style>
