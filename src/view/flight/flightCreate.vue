<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-form   ref="form" size="small" label-width="100px">
          <fieldset style="color: rgb(64,158,255);border-color: rgb(245,245,245);border-width:1px;text-align: left">
            <legend>机票查询</legend>
            <el-form-item label="航班号："  >
              <el-input  v-model="query.flightNo"></el-input>
            </el-form-item>
            <el-form-item label="起飞时间："  >
              <el-input  v-model="query.flightStartTime"></el-input>
            </el-form-item>

            <el-form-item label="旅客姓名："  >
              <el-input  v-model="query.passengerName"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="flightQuery">查询</el-button>
              <el-button @click="reSet">重置</el-button>
            </el-form-item>
          </fieldset>
        </el-form>
      </el-col>
      <el-col :span="19">
        <el-card>
          <el-table
            ref="multipleTable"
            :data="tickets"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="40">
            </el-table-column>
            <el-table-column
              type="index"
              width="40">
            </el-table-column>
            <el-table-column
              prop="passengerName"
              label="旅客姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="passengerID"
              label="身份证号"
              width="120">
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
              prop="flightPrice"
              label="票价"
              width="120">
            </el-table-column>
            <el-table-column
              prop="flightEnd"
              label="目的地"
              width="120">
            </el-table-column>

          </el-table>
          <el-row style="margin: 20px 0">
            <el-col :span="2">
              <el-button  type="primary" size="small" style="width: 98%;" @click="printFlightTickets()">打印机票</el-button>
            </el-col>
            <el-col :span="2">
              <el-button  type="primary" size="small" style="width: 98%" @click="dialogVisible = true">存盘</el-button>
            </el-col>
          </el-row>
        </el-card>

      </el-col>
    </el-row>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <span>是否存盘</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import ticketInfo from '../util/ticketInfo'
  const  ticketInfoList  = ticketInfo;
    export default {
        name: "flightCreat",
      data(){
          return{
            dialogVisible:false,
            printTickets:[],
            tickets:[],
            query:{
              flightNo:'',
              flightStartTime:'',
              passengerName:''
            },
            queryedList:[],
          }
      },
      methods:{
        flightQuery(){
            if(this.query.flightStartTime == ""&&this.query.passengerName == ""&&this.query.flightNo == ""){
              this.$message({
                type: 'warning',
                message: '请填写查询数据'
              });
            }else{
              var temp = {
                flightNo:this.query.flightNo,
                flightStartTime:this.query.flightStartTime,
                passengerName:this.query.passengerName
              }
              var list =    ticketInfoList.filter((val)=>{
                var flag = false;
                if(temp.flightNo != ""){
                  flag = val.flightNo.indexOf(temp.flightNo) != -1;
                }
                if(temp.flightStartTime != ""){
                  flag = val.flightStartTime.indexOf(temp.flightStartTime) != -1;
                }
                if(temp.passengerName != ""){
                  flag = val.passengerName.indexOf(temp.passengerName) != -1;
                }
                return flag;
              });
              this.queryedList = list
              this.tickets = this.queryedList;
            }
          },
        handleSelectionChange(list){
           this.printTickets = list;
        },
        reSet(){
          this.query ={
            flightNo:'',
            flightStartTime:'',
            passengerName:''
          };
          this.tickets = ticketInfoList;
        },
        printFlightTickets(){

          console.log(this.printTickets)
          var content ="";
          this.printTickets.forEach((val)=>{
             content = "------------------------------------------------------------------\r\n"+content;
             content = content +"| 旅客姓名_"+val.passengerName+"\t身份证号_"+val.passengerID+"\t票价_"+val.flightPrice+" |\r\n";
             content = content +"| 起飞时间_"+val.flightStartTime+"\t目的地_"+val.flightEnd+"\t航班号_"+val.flightNo+" |\r\n";
             content = content +"------------------------------------------------------------------\r\n";

          });
          this.$refs.multipleTable.clearSelection();
          this.downLoadFile(content);

        },
        downLoadFile(content){
          //var content = "file content!\r\n!file content!";
          var data = new Blob([content],{type:"text/plain;charset=UTF-8"});
          var downloadUrl = window.URL.createObjectURL(data);
          var anchor = document.createElement("a");
          anchor.href = downloadUrl;
          anchor.download = "文件名.txt";
          anchor.click();
          window.URL.revokeObjectURL(data)
        console.log(downloadUrl)
        },


      },
      created(){
          this.tickets = ticketInfoList;
      },
    }
</script>

<style scoped>

</style>
