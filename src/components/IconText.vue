<template>
<a v-if="text" class="icon-text">
    <img :src="iconUrl">
    {{text}}
</a>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    props: {
        text: String,
        iconUrl: String
    },

})
</script>

<style lang="scss">
.icon-text {
    color: #333;
    text-decoration: none;
    white-space: nowrap;

    img {
        margin-right: 10px;
    }

    &:hover {
        text-decoration: none;
        color: #a9a9a9;
    }
}
</style>
