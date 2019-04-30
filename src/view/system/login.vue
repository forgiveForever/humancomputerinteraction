<template>
  <div class="bg">
    <el-card class="bg2">
      <div slot="header" class="clearfix">
        <span><b style="color:rgb(88,138,165)">航班预定系统</b></span>
      </div>
   <el-form style="margin: 20px 0" :rules="rules">
      <el-form-item prop="userName" class="form-item">
       <el-input class="radius"
              type="text"
                 prop="userName"
              v-model="loginForm.userName"
              ref="adminput"
              auto-complete="off"
              placeholder="请输入用户名">
        <i slot="prefix" class="icon iconfont icon-ren"></i>
       </el-input>
     </el-form-item>
     <el-form-item prop="password" class="form-item">
      <el-input class="radius"
              type="password"
                prop="password"
              v-model="loginForm.password"
              auto-complete="off"
              placeholder="请输入密码">
      <i slot="prefix" class="icon iconfont icon-suo"></i>
    </el-input>
    </el-form-item>
     <el-form-item>
       <span>默认用户名：admin</span>
       <span>默认密  码：admin</span><br/>
       <span>超级用户：李小虽</span>
       <span>超级密  码：你生日</span><br/>
     </el-form-item>
     <el-form-item>
       <el-button size="small"  style="width: 98%" type="primary" @click="loginSubmit">登录</el-button>
     </el-form-item>
  </el-form>
    </el-card>

  </div>
</template>

<script>
  import {saveInfo} from "../util/saveInfo";

  export default {
        name: "login",
      data(){
          return{
            rules:{
              userName:[{ required: true, message: '不能为空'}, ],
              password:[{ required: true, message: '不能为空'}, ],
            },
            loginForm:{
              userName:null,
              password:null
            }
          }
      },
      methods:{
          loginSubmit(){
            if(this.loginForm.userName != null &&this.loginForm.password != null) {
              if(this.loginForm.userName == "admin" &&this.loginForm.password == "admin"){
                saveInfo.setUserName(this.loginForm.userName);
                this.$router.push("/fightBook");
              }
             else if(this.loginForm.userName == "李小虽" &&this.loginForm.password == "你生日"){
                saveInfo.setUserName(this.loginForm.userName);
                this.$router.push("/fightBook");
              }
              else {
                this.$message({
                type: 'warning',
                message: '请输入正确账号或者密码'
              })}



            }else {
              this.$message({
                type: 'warning',
                message: '请输入账号或者密码'
              })
            }
          }
      }
    }
</script>

<style scoped>
.bg{

  background: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/image/bg.jpg");
}
.bg2{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  height: 400px;
  width: 400px;
  background: rgba(255,255,255,0.5);
}
.clearfix:after {
  clear: both
}

</style>
