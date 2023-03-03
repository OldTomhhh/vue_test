<template>
  <div class="todolist-box">
    <input
      autofocus
      class="todolist-ipt font-18"
      placeholder="输入任务名称，按回车确认"
      type="text"
      @keydown="setNewItem"
      v-model="newItem"
    />
    <div class="divide"></div>
    <div class="list-box">
      <div
        @mouseenter="showDelect(i, true)"
        @mouseleave="showDelect(i, false)"
        @click="select(i)"
        v-for="(data, i) in listData"
        :key="data.id"
        class="list-item"
      >
        <input
          class="list-item-checkbox"
          name="item"
          type="checkbox"
          v-model="data.isSelect"
        />
        <span> {{ data.discribe }}</span>
        <div  @click.stop="onDelect(i)" :class="['list-item-delect', data.isShowDelect ? 'ac' : '']">
          删除
        </div>
      </div>
    </div>
    <div class="divide"></div>
    <div class="list-footer">
      <span>已选{{ listData | filterSelect }} | 一共{{ listData.length }}</span>
      <div @click="onDelect" class="list-item-delect ac">删除所选的内容</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      newItem: "",
      listData: [
        {
          discribe: "学习vue相关知识",
          isShowDelect: false,
          isSelect: false,
          id: 78126387162873,
        },
        {
          discribe: "吃一个大苹果",
          isShowDelect: false,
          isSelect: false,
          id: 9283497293847923,
        },
      ],
    };
  },
  methods: {
    showDelect(i, bool) {
      this.listData[i].isShowDelect = bool;
    },
    select(i) {
      this.listData[i].isSelect = !this.listData[i].isSelect;
    },
    setNewItem(e) {
      if (e.key === "Enter" && this.newItem != "") {
        this.listData.push({
          discribe: this.newItem,
          isShowDelect: false,
          isSelect: false,
          id: Math.random(),
        });
        this.newItem = "";
      }
    },
    onDelect(i){
        if(typeof i == "number"){
            this.listData.splice(i,1)
        }else{
            this.listData = this.listData.filter((item)=>{
                return item.isSelect == false
            })
        }
    }
  },
  filters: {
    filterSelect(value) {
      let arr = value.filter((el) => {
        return el.isSelect;
      });
      return arr.length;
    },
  },
};
</script>

<style lang="less" scoped>
.font-14 {
  font-size: 14px;
}
.font-18 {
  font-size: 18px;
}
.list-item-delect {
  opacity: 0;
  min-width: 50px;
  height: 30px;
  padding: 0 10px;
  position: absolute;
  right: 10px;
  background-color: rgb(231, 68, 68);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 30px;
  transition: all 0.2s;
}
.list-item-delect.ac {
  opacity: 1;
}
.list-item-delect:hover {
  background-color: rgb(121, 22, 22);
}
.todolist-box {
  width: 700px;
  min-height: 500px;
  border-radius: 10px;
  padding: 5px;
  margin: 0 auto;
  padding-top: 5px;
  background-color: rgb(241, 241, 241);
  .divide {
    height: 1px;
    width: 100%;
    background-color: rgb(182, 182, 182);
    margin: 10px 0;
  }
  .todolist-ipt {
    display: block;
    border-radius: 5px;
    height: 30px;
    margin: 0px auto;
    width: 680px;
    padding: 6px !important;
    border: none;
  }
  .list-box {
    .list-item {
      //   display: block !important;
      width: 680px;
      background: rgb(209, 209, 209);
      border-radius: 5px;
      height: 40px;
      display: flex;
      align-items: center;
      margin: 5px auto;
      transition: all 0.8s;
      position: relative;
      .list-item-checkbox {
        width: 20px;
        height: 20px;
        margin: 0 8px;
      }
    }
    .list-item:hover {
      background: rgb(158, 158, 158);
    }
  }
  .list-footer{
      width: 700px;
      position: relative;
      display: flex;
      align-items: center;
      padding-bottom: 20px;
  }
}
</style>