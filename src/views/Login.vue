<template>
  <div class="login1">
        <div class="logo_box">
          <h3>欢迎你</h3>
          <form
            action=""
            name="login"
            id="login"
            class="login"
            method="post"
          >
            <div class="input_outer">
              <span class="u_user"></span>
              <input
                name="logname"
                id="logname"
                class="text"
                type="text"
                placeholder="请输入手机号"
                v-on:blur="biao1out"
                v-model="loginForm.username"
                ref="username"
              />
              <span
                class="u_user1"
                name="u_user1"
                id="u_user1"
                v-show="biao1"
                ref="biao1"
              ></span>
              <div class="cuwu" name="cuwu" id="cuwu"  v-model="cuwu">
                {{ cuwu }}
              </div>
            </div>
            <div class="input_outer">
              <span class="us_uer"></span>
              <input
                name="logpass"
                id="logpass"
                class="text"
                v-on:blur="biao2out"
                value=""
                type="password"
                placeholder="请输入密码"
                v-model="loginForm.password"
                ref="password"
              />
              <span
                class="u_user3"
                name="u_user3"
                id="u_user3"
                v-show="biao2"
                ref="biao2"
              ></span>
              <div class="cuwu1" name="cuwu1" id="cuwu1" ref="cuwu1">
                {{ cuwu1 }}
              </div>
            </div>
            <div class="input_outer_yanzhen">
              <span class="u_user2"></span>
              <input
                name="yanzheng"
                id="yanzheng"
                class="text2"
                v-on:blur="biao3out"
                value=""
                type="text"
                placeholder="请输入验证码"
                ref="yanzheng"
              />
              <!--<img src="/t6/gif/loading.gif" class="yanz_img" />-->
              <div class="cuwu2" name="cuwu2" id="cuwu2" ref="cuwu2">
                {{ cuwu2 }}
              </div>
            </div>
            <div class="mb2">
              <a
                class="act-but submit"
                style="color: #FFFFFF;cursor:pointer;"
                v-on:click="submit"
                >登录</a
              >
            </div>
          </form>
        </div>
      </div>
</template>
<script src="../assets/js/checklogin.js">

</script>

<style scoped>
@import "../assets/css/component.css";
@import "../assets/css/demo.css";
@import "../assets/css/normalize.css";

</style>
