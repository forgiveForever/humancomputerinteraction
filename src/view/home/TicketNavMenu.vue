<template>
    <div>
      <el-menu  style="border-right: solid 0px #e6e6e6;text-align: left"
      default-active="2"
      class="el-menu-vertical-demo">
      <el-menu-item index="1" @click="jumppage('/fightBook')" >
        <i class="el-icon-location"></i>
        <span slot="title">航班预订</span>
      </el-menu-item >
      <el-menu-item index="2" @click="jumppage('/flightQuery')">
        <i class="el-icon-search"></i>
        <span slot="title">航班查询</span>
      </el-menu-item>
      <el-menu-item index="3"  @click="jumppage('/flightCreate')">
        <i class="el-icon-document"></i>
        <span slot="title">机票生成</span>
      </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
    export default {
        name: "TicketNavMenu",
      methods:{
          jumppage(path){
            this.$router.push({path:path});
          }
      },
    }
</script>

<style scoped>

</style>
