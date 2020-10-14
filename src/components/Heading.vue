<template>
<h2 class="heading">{{title}}</h2>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType
} from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            require: true
        },

    }
})
</script>

<style lang="scss">
.heading {
    font-size: 28px;
    font-weight: bold;
}
</style>
