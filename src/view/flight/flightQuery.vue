<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-form     size="small" label-width="100px">
          <fieldset style="color: rgb(64,158,255);border-color: rgb(245,245,245);border-width:1px;text-align: left">
            <legend>航班查询</legend>
            <el-form-item label="航班号："  >
              <el-input  v-model="queryData.flightN0"></el-input>
            </el-form-item>
            <el-form-item label="起始地："  >
              <el-input  v-model="queryData.flightStart"></el-input>
            </el-form-item>

            <el-form-item label="目的地："  >
              <el-input  v-model="queryData.flightEnd"></el-input>
            </el-form-item>
            <el-form-item label="航班时段："  >
              <el-input  v-model="queryData.flightTime"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :disabled="isQuery" @click="flightQueryInfo()">查询</el-button>
              <el-button  @click="resetInfo()">重置</el-button>
            </el-form-item>
          </fieldset>
        </el-form>
      </el-col>
      <el-col :span="19">
        <el-card style="min-height:500px;">
          <el-row>
            <el-col :offset="22" :span="2">
              <el-button @click="dialogVisible = true"  type="primary" size="small" style="width: 98%;">航班查看</el-button>
            </el-col>
          </el-row>
          <el-table
            ref="multipleTable"
            :data="flightData"
            tooltip-effect="dark"
            style="width: 100%;height: 400px"
            max-height="400px"
            min-height="400px"
            @select-all="selectelection"
            @selection-change="selectelection"
           >
            <el-table-column
              type="selection"
              width="40">
            </el-table-column>
            <el-table-column
              type="index"
              width="40">
            </el-table-column>
            <el-table-column
              prop="flightNo"
              label="航班号"
              width="120">
            </el-table-column>
            <el-table-column
              prop="flightStartTime"
              label="起飞时间"
              width="120">
            </el-table-column>
            <el-table-column
              prop="flightStart"
              label="起始地"
              width="120">
            </el-table-column>
            <el-table-column
              prop="flightEnd"
              label="目的地"
              width="120">
            </el-table-column>
            <el-table-column
              prop="flightPrice"
              label="票价"
              width="120">
            </el-table-column>
            <el-table-column
              prop="flightDiscount"
              label="折扣"
              width="120">
            </el-table-column>
            <el-table-column
              prop="flightTicket"
              label="剩余票数"
              width="120">
            </el-table-column>

          </el-table>
          <el-row style="margin: 20px 0">
            <el-col :span="2">
              <el-button  type="primary" size="small" style="width: 98%;" @click="saveFlightList">航班选择</el-button>
            </el-col>
            <el-col :span="2">
              <el-popover
                placement="bottom"
                title="总价"
                width="200"
                trigger="click"
                :content='flightBill.countTicket+"张票;共"+flightBill.countPrice+"￥"'>
                <el-button slot="reference" type="primary" size="small" style="width: 98%">记账</el-button>
              </el-popover>

            </el-col>
          </el-row>
        </el-card>

      </el-col>
    </el-row>
    <el-row>
      <el-dialog
        title="机票详情"
        :visible.sync="dialogVisible"

      >
        <el-row v-for="(val,index) in saveFlight" :key="index">
          <span>航班号：<b>{{val.flightNo}}</b></span>
          <span>起飞时间：<b>{{val.flightStartTime}}</b></span>
          <span>起始地：<b>{{val.flightStart}}</b></span>
          <span>目的地：<b>{{val.flightEnd}}</b></span>
          <span>票价：<b></b>{{val.flightPrice}}￥</span>
          <span>折扣：<b></b>{{val.flightDiscount}}</span>
          <span>票数：<b>{{val.flightTicket}}</b></span>
        </el-row>


      </el-dialog>
    </el-row>
  </div>

</template>

<script>
  import flightInfo from '../util/flightInfo'
  import {saveInfo} from "../util/saveInfo";
  const flightInfoList = flightInfo;
    export default {
        name: "flightQuery",
      data(){
          return{
            dialogVisible: false,
            isQuery:false,
            flightBill:{
              countPrice:0,
              countTicket:0
            },
            selectFlight:[],
            saveFlight:[],
            queryData:{
              flightN0:"",
              flightStart:"",
              flightEnd:"",
              flightTime:"",
            },
            flightData:[],
          }
      },
      methods:{
          getFlightInfo(){
            this.flightData = flightInfoList;
          },
        flightQueryInfo(){
            if(this.queryData.flightTime == ""&&this.queryData.flightStart == ""&&this.queryData.flightEnd == ""&&this.queryData.flightN0 == ""){
              this.$message({
                type: 'warning',
                message: '请填写查询数据'
              });
            }else{
              var temp = {
                flightN0:this.queryData.flightN0,
                flightStart:this.queryData.flightStart,
                flightEnd:this.queryData.flightEnd,
                flightTime:this.queryData.flightTime,
              }
           var list =    flightInfo.filter((val)=>{
                 var flag = false;
                 if(temp.flightN0 != ""){
                   flag = val.flightNo.indexOf(temp.flightN0) != -1;
                 }
                if(temp.flightEnd != ""){
                  flag = val.flightEnd.indexOf(temp.flightEnd) != -1;
                }
                if(temp.flightStart != ""){
                  flag = val.flightStart.indexOf(temp.flightStart) != -1;
                }
                if(temp.flightTime != ""){
                  flag = val.flightTime.indexOf(temp.flightTime) != -1;
                }
                return flag;
              });
              this.flightData = list
             // console.log(list)
            }
        },
        resetInfo(){
          this.queryData={
              flightN0:"",
              flightStart:"",
              flightEnd:"",
              flightTime:"",
          };
          this.getFlightInfo();
        },
        selectelection(selection){
            var tem = []
           selection.forEach((val)=>{
             tem.push(
             {
               flightNo:val.flightNo,
               flightStartTime:val.flightStartTime,
               flightStart:val.flightStart,
               flightEnd:val.flightEnd,
               flightPrice:val.flightPrice,
               flightDiscount:val.flightDiscount,
               flightTicket:1
             })
           });
            this.selectFlight = tem;
        },
        saveFlightList(){
            if(this.selectFlight.length == 0){
              this.$message({
                type: 'warning',
                message: '请选择航班'
              })
            }else{
              var tem = [];
              var count = 0;
              var countPrice = 0;
              this.selectFlight.forEach((val)=>{
                countPrice = countPrice +val.flightPrice;
                count = count + val.flightTicket;
                tem.push({
                    flightNo:val.flightNo,
                    flightStartTime:val.flightStartTime,
                    flightStart:val.flightStart,
                    flightEnd:val.flightEnd,
                    flightPrice:val.flightPrice,
                    flightDiscount:val.flightDiscount,
                    flightTicket:val.flightTicket
                  })
              });
              this.flightBill.countPrice = countPrice;
              this.flightBill.countTicket = count;
              this.saveFlight = tem;
              this.$refs.multipleTable.clearSelection();
            }
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        }

      },
      created(){
          this.getFlightInfo();
          this.saveFlight = saveInfo.getSaveFlightList();
          this.flightBill = saveInfo.getFlightBill();
      },

      watch:{
        queryData(){
         console.log(this.queryData)
        },
        flightData(){
          console.log(55)
        },
        saveFlight(){
          saveInfo.setSaveFlightList(this.saveFlight);
          saveInfo.setFlightBill(this.flightBill);
        }
      }
    }
</script>

<style scoped>

</style>
