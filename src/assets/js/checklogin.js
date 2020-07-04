export default {
  name: "login",
  data() {
    return {
      biao1: false,
      biao2: false,
      biao3: false,
      cuwu: "",
      cuwu1: "",
      cuwu2: "",
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    //输入姓名时的前端验证
    biao1out: function() {
      this.biao1 = true;
      var un =this.$refs.username.value;
      if (un === "") {
        this.cuwu = "请输入用户名！";
        this.$refs.biao1.style.backgroundPosition = "0 -232px";
      } else {
        this.cuwu = "";
        this.$refs.biao1.style.backgroundPosition = "0 -166px";
      }
    }, //输入密码时的前端验证
    biao2out: function() {
      this.biao2 = true;
      var pw = this.$refs.password.value;
      if (pw === "") {
        this.cuwu1 = "请输入密码！";
        this.$refs.biao2.style.backgroundPosition = "0 -232px";
      } else {
        this.cuwu1 = "";
        this.$refs.biao2.style.backgroundPosition = "0 -166px";
      }
    }, //输入验证码时的前端验证
    biao3out: function() {
      this.biao3 = true;
      var yz = this.$refs.yanzheng.value;
      if (yz === undefined || yz.length !== 4) {
        this.cuwu2 = "请输入验证码！";
      } else if (yz.length === 4) {
        this.cuwu2 = "";
      }
    },
    submit: function() {
      this.axios({
        method: "post",
        url: "/web/login",
        data: JSON.stringify(this.loginForm),
        headers:{
          'Content-Type':'application/json;charset=UTF-8'
        }

      })
        .then(res => {
          console.log(res.data);
          //this.userToken = 'Bearer ' + res.data.data.body.token;
          // 将用户token保存到vuex中
          //this.changeLogin({Authorization: this.userToken});
          //this.$router.push('/');
          var token=res.data['token'];
          alert("登陆成功");
          localStorage.setItem("token", token);
          this.$router.push({ path: '/home' });
          //根据store中set_token方法将token保存至localStorage/sessionStorage中，
          // data["Authentication-Token"]，获取token的value值
        })
        .catch(error => {
          alert("账号或密码错误");
          console.log(error);
        });
    }
  }
};

