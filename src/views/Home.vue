<template>
  <div class="home">
    123
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {}
  },
  methods:{
    //获取高德信息
    getPosition(){
      // 实例化城市查询类
      const citySearch = new window.AMap.CitySearch();
          //自动获取用户IP，返回当前城市
          citySearch.getLocalCity(function (status, result) {
            //如果请求成功无误
            if (status === 'complete' && result.info === 'OK') {
              // resolve(result.adcode)
              console.log(result)
            } 
            //如果请求有误
            else {
              // reject(result)
            }
          });
    }
  },
  mounted(){
    this.getPosition();
  }
}
</script>
