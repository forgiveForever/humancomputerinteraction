<template>
    <div >
      <el-container style="width:100%;min-height: 100vh">
        <el-header style="background-color: rgb(242,246,252);text-align: right" height="60px" >
          <i class="el-icon-s-custom" style="font-size: 25px;line-height: 60px;"></i><i>{{username}}</i>
        </el-header>
        <el-container >
          <!--style="background-color:rgb(1, 49, 109);"-->
          <el-aside style="border-right: solid 1px #e6e6e6"   width="240px">
            <TicketNavMenu/>
          </el-aside>
          <el-main >
            <router-view/>
          </el-main>
        </el-container>
      </el-container>

    </div>
</template>

<script>
  import {saveInfo} from "../util/saveInfo";
  import TicketNavMenu from './TicketNavMenu'
    export default {
        name: "Home",
      components:{TicketNavMenu},
      data(){
          return{
            username:"",
          }
      },
      created(){
          this.username = saveInfo.getUserName();
      }
    }
</script>

<style scoped>

</style>
