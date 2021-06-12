<template>
    <div class="content">
            <img src="../../assets/nodata.png" alt="">
            <p>{{title}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:{
      title:{
          default:'暂时没有数据'
      }
  },
  methods:{
      
    }
};
</script>

<style scoped>  
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        
    }
    img{
        width: 300px;
        height: auto;
    }
    p{
        font-size: 14px;
        margin-top: 20px;
        color: #999999;
    }

</style>>