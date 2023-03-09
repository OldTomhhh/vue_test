<template>
    <div>
        Page3 ==== {{key}}
    </div>
</template>

<script>
export default {
    name: 'Page1',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },
    computed:{
        key(){
            return this.$route.params.key
        }
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>

</style>