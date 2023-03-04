<template>
  <div class="listBox">
      <div v-for="item in data" :key="item.id" class="listItemBox">
           <div class="listItem" >{{item.login}}</div>
           <img class="avater" :src="item.avatar_url" alt="">
      </div>
    
       <Empty
      v-if="data.length == 0"
      title="暂时没有消息"
      :height="500"
    ></Empty>
  </div>
</template>

<script>
import Empty from "./Empty.vue";

export default {
    name:'UserList',
    components:{Empty},

    props:{
        data:Array
    }
    
}
</script>

<style lang="less" scoped>
.listBox{
    width: 100%;
    max-height: 500px;
    overflow-y: scroll;
    
    // display: flex;
    // justify-content: space-evenly;
    .listItemBox{
        width: 100px;
        height: 100px;
        float: left;
        .avater{
            width: 50px;
            height: 50px;
        }

    }
}
</style>