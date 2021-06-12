<template>
  <div class="aboutus">
      <ul class="aboutus_tabbar">
          <li class="aboutus_tabbar_item" :class="item.active ? 'active' : ''" v-for="(item,index) in tabbarList" :key="item.id" @click="change(tabbarList,index)">
              <router-link class="aboutus_tabbar_link" :to="item.url">{{item.name}}</router-link>
          </li>
      </ul>
      <div class="breadcrumb">
          <div class="aboutus_title">
              <h5>在线答疑</h5>
          </div>
      </div>
      <div class="myanswering">
          <form class="myanswering_form" action="post">
              <div class="myanswering_item">
                  <label for="answering"><strong>*</strong>请描述你的问题（5~500字）</label>
                  <textarea name="answering" v-model="content" id="answering" cols="100" rows="10" placeholder="请将你的建议或遇到的问题详细地告诉我们"></textarea>
                  <span>{{content.length}}/500</span>
              </div>
              <div class="myanswering_item">
                  <label for="tel"><strong>*</strong>请留下你的手机号码，以便我们及时回复</label>
                  <input type="number" name="tel" id="tel" v-model="mobile">
              </div>
              <!-- <input type="submit" value="提交" > -->
              <div class="sub" @click="submit">提交</div>
          </form>
      </div>
  </div>
</template> 

<script>
export default {
    data(){
        return{
            tabbarList:[
                {
                    id: 1,
                    name: "在线答疑",
                    url: "",
                    active: true,
                   
                },  
            ],
             content:'',
                    mobile:'',
        }
    },
    created(){
    document.title='北京中盛润德-在线答疑'

    },
    methods:{
        change(list,index){
            list.forEach((e,i) => i===index ? e.active=true : e.active=false)
        },
        submit(){
            if(!this.content){
                this.$message.error('请输入问题描述')
                return fasle
            }else if(!this.mobile){
                this.$message.error('请输入手机号')
                fasle
            }
            this.post('usercenter/questions',{
                content:this.content,
                mobile:this.mobile
            }).then(res=>{
                if(res.code==1){
                      this.$message({
                        message: res.msg,
                        type: "success",
                    });
                    this.content=''
                    this.mobile=''
                }else{
                    this.$message.error(res.msg)
                }
            })
        },
    }
}
</script>

<style>
    .sub{
        text-indent: 0;
    width: 140px;
    height: 40px;
    background-color: #052d47;
    color: #fff;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
    cursor: pointer;
    }
</style>