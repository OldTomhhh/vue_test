<template>
    <div>
        Page1 +{{name}}
    </div>
</template>

<script>
export default {
    name: 'Page1',

    data() {
        return {
            name:""
        };
    },

    mounted() {
      
        this.name = this.$route.params.name
        // this.$route.params
    },
    
    methods: {
        
    },
};
</script>

<style lang="less" scoped>

</style>