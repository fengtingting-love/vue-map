<template>
  <div>
    <ul class="vuefor">
      <li v-for="(item,index) in arr" :key="index">{{index}}--{{item}}</li>
    </ul>
    <ul v-for="(set,i) in sets" :key="i">
      <li v-for="(n,index) in even(set)" :key="index">{{ n }}</li>
    </ul>
  </div>


</template>
<script>
  export default {
    data() {
      return {
        arr: ['1', '2', '3', '4', '5'],
        sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
      }
    },
    methods: {
      even: function (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    },
    mounted() {
      setTimeout(() => {
        this.arr.unshift('6')
      }, 1000)
    }
  }
</script>