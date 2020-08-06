<template>
  <div class="dynamicParamter">
    <!-- <label for="dynamicParam">动态参数</label>
    <input @[eventName]="event" id="dynamicParam" name="dynamicParam" type="text">
    <button @click="eventName='focus'">获取焦点</button>
    <button @click="eventName='keydown'">按键</button>
    <button @click="eventName='keyup'">键盘抬起</button><br/> -->
    <label for="dynamicParam">动态参数</label>
    <input @[type]="event1" id="dynamicParam" name="dynamicParam" type="text">
    <button @click="type1=true">按键</button>
    <button @click="type1=false">键盘抬起</button>
    <!-- <a :[href]="url">这是一个链接</a>
      <button @click="url='https://www.baidu.com'">百度搜索</button>
      <button @click="url='https://google.com'">谷歌搜索</button> -->
  </div>
</template>
<script>
  export default{
    data(){
      return {
        href:'href',
        url:'',
        // up:'keyup',
        // down:'keydown',
        type1:null,
        // eventName:'',
      }
    },
    methods:{
      // event(){
      //   console.log("点击不同的按钮，会检测不同的事件，从而做接下来的操作",this.eventName);
      //   if(this.eventName==='focus'){
      //     console.log('这是获取焦点事件，我们可以在此时做一些操作');
      //   }
      //   if(this.eventName==='keydown'){
      //     console.log('这是按下按键事件，我们可以在此时做一些操作');
      //   }
      //   if(this.eventName==='keyup'){
      //     console.log('这是键盘抬起事件，我们可以在此时做一些操作');
      //   }
      // },
      event1(){
        console.log("触发"+(this.type)+'事件')
      }
    },
    computed:{
      type(){
        if(this.type1){
          return 'keyup'
        }else{
          return 'keydown'
        }
      }
    }
  }
</script>