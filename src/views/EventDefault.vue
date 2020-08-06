<template>
  <div class="default">
    <!-- 默认行为 -->
    <a @click.stop="Log" href="//www.baidu.com">阻止事件默认行为</a>
    <!-- 冒泡 -->
    <div @click="log2" class="parent">
      <div @click.stop="log1" class="son"></div>
    </div>
    <!-- 捕获 -->
    <div class="capFather" @click.capture="capLogparent">
      <div @click.capture="capLogson" class="capSon"></div>
    </div>
    <!-- self -->
    <div class="seltParent" @click.self="selfLogParent">
      <div class="selfSon" @click="selfLogSon"></div>
    </div>
    <!-- once -->
    <div class="once" @click.once="onceEvent">
    </div>
    <!-- key -->
    <label for="keyExam">key:</label>
    <input id="keyExam" name="keyExam" @keydown="getKeyCode" @keyup.enter="showContent" type="text"><br/>
    <!-- lazy -->
    <label for="lazyExam">lazyExam:</label>
    <input id="lazyExam" name="lazyExam" type="text" v-model.lazy="text">
    <span>{{text}}</span><br/>
    <!-- number -->
    <label for="numExam">numExam：</label>
    <input @keyup="logNum" v-model.number="numText" id="numExam" name="numExam" type="text">
    <span>{{typeof(numText)}}</span><br/>
    <!-- trim -->
    <label for="trimExam">trimExam：</label>
    <input id="trimExam" name="trimExam" v-model.trim.lazy="trimContent" type="text" @keyup="logTrim">
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text:'',
        numText:null,
        trimContent:'',
      }
    },
    methods: {
      Log() {
        console.log("打印结果，不跳转页面")
      },
      log1() {
        console.log("子元素被点击")
      },
      log2() {
        console.log("父元素被点击")
      },
      capLogson() {
        console.log("子元素被触发")
      },
      capLogparent() {
        console.log("父元素被触发")
      },
      selfLogSon() {
        console.log("自己-子元素被触发")
      },
      selfLogParent() {
        console.log("自己-父元素被触发")
      },
      onceEvent() {
        console.log("该事件只执行一次")
      },
      getKeyCode(e) {
        //获取不同键的keycode值
        console.log(e.keyCode)
      },
      showContent(){
        console.log("输入enter内容后抬起键盘输出我的内容")
      },
      logNum(){
        console.log("键盘抬起，输出转换成Number后的内容",this.numText)
      },
      logTrim(){
        console.log("去掉空格之后的内容",this.trimContent)
      }
    },
  }
</script>
<style scoped>
  .parent {
    width: 400px;
    height: 400px;
    background-color: green;
  }

  .son {
    width: 200px;
    height: 200px;
    background-color: red;
  }

  .capFather {
    width: 200px;
    height: 200px;
    background-color: green;
  }

  .capSon {
    width: 100px;
    height: 100px;
    background-color: orange;
  }

  .seltParent {
    width: 100px;
    height: 100px;
    background-color: blue;
  }

  .selfSon {
    width: 50px;
    height: 50px;
    background-color: pink;
  }

  .once {
    width: 50px;
    height: 50px;
    background-color: purple;
  }

  .key {
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>