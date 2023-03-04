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
    <Empty
      v-if="listData.length == 0"
      title="暂时没有消息"
      :height="300"
    ></Empty>
    <div v-else class="list-box">
      <div
        @mouseenter="()=>{showDelect(i, true)}"
        @mouseleave="()=>{showDelect(i, false) 
        onEdit(i,false)}"
        v-for="(data, i) in listData"
        :key="data.id"
        class="list-item"
      >
        <div class="list-item-checkbox-outer" @click="select(i)">
          <input
           
            class="list-item-checkbox"
            name="item"
            type="checkbox"
            v-model="data.isSelect"
          />
          <span> {{ data.discribe }}</span>
        </div>
           
        <Transition appear>
          <div class="buttonBox" v-show="data.isShowDelect">
         <input
              ref="editIpt"
              v-show="data.isEdit"
              class="todolist-ipt2 font-18"
              placeholder="输入修改名称，按回车确认"
              type="text"
              @keydown="onEditIpt($event,i)"
              v-model="editContent"
        />
            <YjjButton
              @clicks="onEdit(i,true)"
              title="编辑"
              type="default"
            ></YjjButton>
            <YjjButton
              @clicks="onDelect(i)"
              title="删除"
              type="danger"
            ></YjjButton>
          </div>
        </Transition>
      </div>
    </div>
    <div class="divide"></div>
    <div class="list-footer">
      <div class="selectAll" @click="onSelectAll">
        <input
          class="list-item-checkbox"
          type="checkbox"
          v-model="isSelectAll"
        />全选
        <span
          >已选{{ listData | filterSelect }} | 一共{{ listData.length }}</span
        >
      </div>
      <YjjButton
        @clicks="onDelect"
        title="删除所选的内容"
        type="danger"
      ></YjjButton>
    </div>
  </div>
</template>

<script>
import Empty from "./Empty.vue";
import YjjButton from "./common/YjjButton.vue";

export default {
  name: "ToDoList",
  components: { Empty, YjjButton },
  mounted() {
    this.listData = JSON.parse(window.localStorage.getItem("listData"));
    this.newItem = window.localStorage.getItem("newItem");
    this.isSelectAll =
      window.localStorage.getItem("isSelectAll") === "false" ? false : true;
  },
  updated() {
    this.$tool.throttle(this.setStorge, this, 1000);
  },

  data() {
    return {
      newItem: "",
      isSelectAll: false,
      editContent:"",
      listData: [
        {
          discribe: "学习vue相关知识",
          isShowDelect: false,
          isSelect: false,
          isEdit:false,
          id: 78126387162873,
        },
        {
          discribe: "吃一个大苹果",
          isShowDelect: false,
          isSelect: false,
          isEdit:false,
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
      this.seeIsSelcetAll();
    },
    setStorge() {
      window.localStorage.setItem("listData", JSON.stringify(this.listData));
      window.localStorage.setItem("newItem", this.newItem);
      window.localStorage.setItem("isSelectAll", this.isSelectAll);
    },
    setNewItem(e) {
      if (e.key === "Enter" && this.newItem != "") {
        this.listData.push({
          discribe: this.newItem,
          isShowDelect: false,
          isSelect: false,
          isEdit:false,
          id: Math.random(),
        });
        this.newItem = "";
        this.seeIsSelcetAll();
      }
    },
    onDelect(i) {
      if (typeof i == "number") {
        this.listData.splice(i, 1);
      } else {
        this.listData = this.listData.filter((item) => {
          return item.isSelect == false;
        });
      }

      this.seeIsSelcetAll();
    },
    onSelectAll() {
      if (this.listData.length != 0) {
        this.listData = this.listData.map((item) => {
          return { ...item, isSelect: !this.isSelectAll };
        });
        this.isSelectAll = !this.isSelectAll;
      }
    },
    seeIsSelcetAll() {
      if (this.listData.length == 0) {
        this.isSelectAll = false;
      } else {
        this.isSelectAll = this.listData.every((el) => {
          return el.isSelect == true;
        });
      }
    },
    onEdit(i,bool) {
       this.listData[i].isEdit = bool
      if(bool){
        this.$nextTick(()=>{
          this.$refs.editIpt[i].focus()
        })
      }else{
        this.editContent = ''
      }
     
    },
    onEditIpt(e,i){
      

      if(e.key === 'Enter' && this.editContent!=""){
        this.listData[i].discribe = this.editContent
        this.editContent = ""
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
@keyframes moves {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.v-enter-active {
  animation: moves 0.2s;
}
.v-leave-active {
  animation: moves 0.2s reverse;
}

.list-item-checkbox {
  width: 20px;
  height: 20px;
  margin: 0 8px;
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
  .todolist-ipt2 {
    display: block;
    border-radius: 5px;
    height: 20px;
    margin: 0px auto;
    width: 300px;
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
      justify-content: space-between;
      margin: 5px auto;
      transition: all 0.8s;
      position: relative;
      .buttonBox {
        display: flex;
        align-items: center;
      }
    }
    .list-item:hover {
      background: rgb(158, 158, 158);
    }
    .list-item-checkbox-outer {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
  .list-footer {
    width: 700px;
    position: relative;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    .selectAll {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-right: 20px;
    }
  }
}
</style>
