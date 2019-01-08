<template>
    <div>
        
        <p v-show="this.$store.state.result !== '' ">The Type of Triangle is : <strong style="color:red">{{this.$store.state.result}}</strong></p>
    </div>
</template>
<script>
export default {
}
</script>
