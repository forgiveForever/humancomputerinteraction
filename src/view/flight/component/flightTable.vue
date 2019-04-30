<script src="../../util/saveInfo.js"></script>
<template>
  <el-table
    :data="flightData"
    style="width: 100%"
    min-height="100"
    max-height="240"
  >
    <el-table-column
      fixed
      type="index"
      width="30">
    </el-table-column>
    <el-table-column
      prop="passengerName"
      label="旅客姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="passengerGender"
      label="旅客性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="passengerCompany"
      label="单位"
      width="120">
    </el-table-column>
    <el-table-column
      prop="passengerID"
      label="身份证号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="passengerFlight"
      label="航班号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="passengerFlightTime"
      label="航班时段"
      width="120">
    </el-table-column>
    <el-table-column
    prop="passengerStart"
    label="起始地"
    width="120">
  </el-table-column>
    <el-table-column
      prop="passengerEnd"
      label="目的地"
      width="120">
    </el-table-column>
    <el-table-column
      prop="isPay"
      label="是否支付"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button
          @click="deleteRow(scope.$index, flightData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>


  </el-table>
</template>

<script>
  import {saveInfo} from '../../util/saveInfo'
    export default {
        name: "flightTable",
      props:['flightData'],
      data() {
        return {
          testData:[]
        }
      },
      methods: {
        deleteRow(index, rows) {
          rows.splice(index, 1);
          this.communicate();
          alert(0)
        },
        communicate() {
          this.$emit('introduce',{
            info:this.flightData
          })
        },
        deleteRow(index, rows) {
          rows.splice(index, 1);
        }
      },

      watch:{
        flightData(){
         saveInfo.setFlightBook(this.flightData)
        }
      }
    }
</script>

<style scoped>

</style>
