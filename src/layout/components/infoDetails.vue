<template>
  <div class="infodetails">
      <div class="inner">
          <div class="infodetails_title">
                <h3>{{detailsData.title}}</h3>
                <div class="infodetails_title_source">
                    <span>{{detailsData.author}}</span>
                    <span>发布时间：{{detailsData.create_time_text}}</span>
                </div>
          </div>
          <div class="infodetails_text" v-html="detailsData.content"></div>
          <div class="flip">
              <div class="flip_prev">
                  <button @click="changePage(detailsData.prev)">上一篇：{{detailsData.prev_title}}</button>
              </div>
              <div class="flip_next">
                  <button @click="changePage(detailsData.next_id)">下一篇：{{detailsData.next_title}}</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            detailsData:{}
        }
    },
    mounted(){
        let article_id = this.$route.query.id
        this.get('article/detail',true,{article_id}).then((res) => {
            this.detailsData = res.data
        })
    },
    methods:{
        changePage(article_id){
            this.$router.push({name:'Infodetails',query:{id:article_id}})
            this.get('article/detail',true,{article_id}).then((res) => {
                this.detailsData = res.data
            })
        }
    }
}
</script>

<style>

</style>