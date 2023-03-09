<template>
    <div>
        Page2======{{key}}
    </div>
</template>

<script>
export default {
    name: 'Page1',

    data() {
        return {
            // key:""
        };
    },

    mounted() {

    },
    computed:{
        key(){
            console.log(this.$route);
            return this.$route.query.key
        }
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>

</style>