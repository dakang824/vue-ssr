<template>
  <div class="info">
        <div class="inner">
            <ul class="info_tabbar">
                <li class="info_tabbar_item" :class="navActive==index ? 'active' : ''" v-for="(item,index) in navList" :key="item.id" @click="changeCategory(index,item.id)">
                    <button type="button">{{item.name}}</button>
                </li>
            </ul>
            <div class="info_list">
                <router-link :to="'/info/infodetails?id='+item.id" class="info_item" :class="itemActive==index ? 'active' : ''" v-for="(item,index) in infoList" :key="item.id" >
                    <div class="info_item_inner" @mouseenter="moveIn(index)">
                        <div class="info_item_img">
                            <img :src="item.image" alt="图片找不到了">
                        </div>
                        <div class="info_item_warp">
                            <h4 class="info_item_title">{{item.title}}</h4>
                            <p class="info_item_text">{{item.description}}</p>
                            <div class="info_item_reads">
                                <img src="../../assets/eyes_icon.png" alt="图片找不到了">
                                <span>{{item.pageviews}}阅读</span>
                            </div>
                        </div>
                        <div class="info_date">
                            <span>{{item.create_time}}</span>
                            <img src="../../assets/arrow.png" alt="图片找不到了">
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="pager">
                <el-pagination
                background
                layout="prev, pager, next"
                prev-text="上一页"
                next-text="下一页"
                :total="pager.total"
                :page-size="pager.per_page"
                @current-change="currentChange"
                hide-on-single-page>
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'infoList',
    data(){
        return{
            navActive:0,
            itemActive:0,
            category_id:0,
            page:1,
            pager:{},
            navList:[],
            infoList:[]
        }
    },
    mounted(){
        this.get('article/category',true).then((res) => {
            this.navList = res.data
            this.category_id = res.data[0].id
            let id = this.$route.query.id
            if (id) {
                this.navList.forEach(e=>{
                    if (e.id ==id) {
                        this.changeCategory(this.navList.indexOf(e),id)
                    }
                })
            }else{
                this.get('article/list',false,{page:this.page,category_id:this.category_id}).then((res) => {
                    this.pager = res.data
                    this.infoList = res.data.data
                })
            }
        })
    },
    methods: {
        changeCategory(index,id){
            this.page = 1
            this.navActive=index
            this.category_id = id
            this.get('article/list',true,{page:this.page,category_id:this.category_id}).then((res) => {
                this.pager = res.data
                this.infoList = res.data.data
            })
        },
        moveIn(index){
            this.itemActive=index
        },
        currentChange(e){
            this.page=e
            this.get('article/list',true,{page:this.page,category_id:this.category_id}).then((res) => {
                // this.pager = res.data
                this.infoList = res.data.data
            })
        }
    }
}
</script>

<style>

</style>