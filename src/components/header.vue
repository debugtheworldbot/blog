<template>
  <header :class="{login:isLogin,'no-login':!isLogin}" >
    <template v-if="!isLogin">
      <h1>Let's share</h1>
      <p>精品博客</p>
      <div class="btns">
        <el-button>登录</el-button>
        <el-button>注册</el-button>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>Let's share</h1>
      <i class="edit el-icon-edit"></i>
      <img class="avatar"  src="../assets/profile.png">
    </template>
    </header>
</template>

<script>
  export default {
    data(){
      return {
        isLogin:true
      }
    }
  }
</script>

<style>
  header.no-login{
    padding: 0 12% 30px 12%;
    background: darkslategrey;
    display: grid;
    justify-items: center;
  }
  h1{
    font-size: 40px;
    margin: 60px 0  0 0;
    text-transform: uppercase;
  }
  p{
    margin: 10px 0 0 0 ;

  }
  .btns{
    margin-top: 10px;
  }
  button{
    margin: 20px 5px 0 ;
  }
  header.login{
    display: flex;
    align-items: center;
    color: #fff;

    background-color:darkslategrey;
  }
  header.login>h1{
    margin: 0;
    padding: 0;
    font-size: 40px;
    color: #fff;
    text-transform: uppercase;
    flex: 1;
  }
  header.login>i {
    color: #fff;
    font-size: 30px;
  }
  header.login>img {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;

  }





</style>
