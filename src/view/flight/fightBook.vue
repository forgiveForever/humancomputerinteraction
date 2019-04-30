<template>
 <div>

   <el-row :gutter="20">
     <el-col :offset="3" :span="6">
       <el-form   ref="form" :model="form" :rules="rules" size="small" label-width="120px">
         <fieldset style="color: rgb(64,158,255);border-color: rgb(245,245,245);border-width:1px;text-align: left">
           <legend>旅行社信息</legend>
           <el-form-item  prop="travelAgencyName" label="旅行社名称："  >
             <el-input  v-model="form.travelAgencyName"></el-input>
           </el-form-item>
           <el-form-item prop="travelAgencyAddress" label="旅行社地址："  >
             <el-input  v-model="form.travelAgencyAddress"></el-input>
           </el-form-item>
           <el-form-item prop="travelAgencyPhone"  label="联系方式："  >
             <el-input  v-model="form.travelAgencyPhone"></el-input>
           </el-form-item>
           <el-form-item prop="travelAgencyFax" label="传真号："  >
             <el-input  v-model="form.travelAgencyFax"></el-input>
           </el-form-item>
         </fieldset>
       </el-form>
     </el-col>

     <el-col  :span="11">
       <el-form :rules="rules"  ref="form" :model="form" size="small" label-width="120px" >
         <fieldset style=" color: rgb(64,158,255);border-color: rgb(245,245,245);border-width:1px;text-align: left">
           <legend>旅客信息</legend>
               <el-form-item prop="passengerName" label="旅客姓名：" style="float: left;width: 48%;" >
                 <el-input  v-model="form.passengerName"></el-input>
               </el-form-item>
               <el-form-item prop="passengerGender"  label="旅客性别：" style="float: left;width: 48%;" >
                 <el-radio-group v-model="form.passengerGender" size="medium" >
                   <el-radio   label="男"></el-radio>
                   <el-radio  label="女"></el-radio>
                 </el-radio-group>
               </el-form-item>
           <el-form-item prop="passengerID" label="身份证号：" style="float: left;width: 48%;" >
             <el-input  v-model="form.passengerID"></el-input>
           </el-form-item>

           <el-form-item prop="passengerCompany" label="单位：" style="float: left;width: 48%;" >
             <el-input  v-model="form.passengerCompany"></el-input>
           </el-form-item>

           <el-form-item prop="passengerStart" label="起始地：" style="float: left;width: 48%;" >
             <el-input  v-model="form.passengerStart"></el-input>
           </el-form-item>

           <el-form-item prop="passengerEnd" label="目的地：" style="float: left;width: 48%;" >
             <el-input  v-model="form.passengerEnd"></el-input>
           </el-form-item>

           <el-form-item prop="passengerFlight" label="航班号：" style="float: left;width: 48%;" >
             <el-input  v-model="form.passengerFlight"></el-input>
           </el-form-item>

           <el-form-item prop="passengerFlightTime" label="航班时段：" style="float: left;width: 48%;" >
             <el-input  v-model="form.passengerFlightTime"></el-input>
           </el-form-item>

         </fieldset>
       </el-form>
     </el-col>
   </el-row>
   <el-row style="margin: 20px 0">
     <el-col :offset="3" :span="2">
       <el-button type="primary" style="width: 98%" @click="addInfo">添加信息</el-button>
     </el-col>
     <el-col  :span="2">
       <el-button type="primary" style="width: 98%">取消信息</el-button>
     </el-col>
   </el-row>
   <el-card style="width: 100%">
     <flight-table :flight-data="flightData" @introduce="introduceSelf" style="height: 300px"/>
   </el-card>




</div>
</template>

<script>
  import flightTable from './component/flightTable'
  import {saveInfo} from "../util/saveInfo";

  export default {
        name: "fightBook",
      components:{flightTable},
      data() {
        return {
          rules:{
            travelAgencyName:[{ required: true, message: '不能为空'}, ],
            travelAgencyAddress:[{ required: true, message: '不能为空'}, ],
            travelAgencyPhone: [{ required: true, message: '不能为空'}, ],
            travelAgencyFax: [{ required: true, message: '不能为空'}, ],
            passengerName: [{ required: true, message: '不能为空'}, ],
            passengerGender: [{ required: true, message: '不能为空'}, ],
            passengerID: [{ required: true, message: '不能为空'}, ],
            passengerCompany: [{ required: true, message: '不能为空'}, ],
            passengerStart: [{ required: true, message: '不能为空'}, ],
            passengerEnd:[{ required: true, message: '不能为空'}, ],
            passengerFlight:[{ required: true, message: '不能为空'}, ],
            passengerFlightTime:[{ required: true, message: '不能为空'}, ],
          },
          form: {
            travelAgencyName: '',
            travelAgencyAddress: '',
            travelAgencyPhone: '',
            travelAgencyFax: '',
            passengerName: '',
            passengerGender: '',
            passengerID: '',
            passengerCompany: '',
            passengerStart: '',
            passengerEnd: '',
            passengerFlight:'',
            passengerFlightTime:'',
            isPay:'',
          },
          flightData:[],
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        },
        addInfo(){
          var temp={
              travelAgencyName: this.form.travelAgencyName,
              travelAgencyAddress: this.form.travelAgencyAddress,
              travelAgencyPhone: this.form.travelAgencyPhone,
              travelAgencyFax: this.form.travelAgencyFax,
              passengerName: this.form.passengerName,
              passengerGender: this.form.passengerGender,
              passengerID: this.form.passengerID,
              passengerCompany: this.form.passengerCompany,
              passengerStart:this.form.passengerStart,
              passengerEnd:this.form.passengerEnd,
              passengerFlight:this.form.passengerFlight,
              passengerFlightTime:this.form.passengerFlightTime,
              isPay:'否',
          };

          this.form= {
            travelAgencyName: '',
              travelAgencyAddress: '',
              travelAgencyPhone: '',
              travelAgencyFax: '',
              passengerName: '',
              passengerGender: '',
              passengerID: '',
              passengerCompany: '',
              passengerStart: '',
              passengerEnd: '',
              passengerFlight:'',
              passengerFlightTime:'',
              isPay:'',
          },
          this.flightData.push(temp);
        },
        introduceSelf(info){
          console.log(info);
        },
        getFlightBootlist(){
         this.flightData = saveInfo.getFlightBook();
        }
      },
      created(){
          this.getFlightBootlist();
      }
    }
</script>

<style scoped>

</style>
