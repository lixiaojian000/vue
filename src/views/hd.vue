<template>
    <div class="hd">
        <el-container>
            <el-header>
                <!--  导航栏-->
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        background-color="#545c64"
                        text-color="#fff"
                        type="flex"
                        active-text-color="#ffd04b">
                    <el-menu-item index="1"  v-on:click="handleOpen">
                        <div class="el-icon-menu" >
                        </div>
                    </el-menu-item>
                        <el-dropdown class="touxiang">
                            <div class="touxiangxiala">
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                            </el-avatar>
                            <!--头像下拉菜单-->
                            <i class="el-icon-arrow-down el-icon--right"></i>
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown >

                </el-menu>
            </el-header>
            <el-container>
                <el-container>
                    <el-main></el-main>
                </el-container>
            </el-container>
        </el-container>

        <!-- 侧边导航栏-->
                <el-menu
                        :collapse="isCollapse"
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        >
                    <el-menu-item index="1" style="padding: 0;">
                        <span >导航一</span>
                    </el-menu-item>
                    <el-menu-item index="2" style="padding: 0;">
                        <span >导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" style="padding: 0;">
                        <span  >导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4" style="padding: 0;">
                        <span >导航四</span>
                    </el-menu-item>
                </el-menu>

        </div>
</template>

<script>

    export default {
        name: "hd",
     data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            isCollapse: true,
            isshow:false,
        };
    },
    methods: {

        handleOpen(){
            this.isCollapse=!this.isCollapse;
        }
    }
    }
</script>

<style scoped>

.touxiang{
    position: absolute;
    right: 0;
}

.el-icon-menu{
    font-size: 25px;
}
el-menu{
        height: 60px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;

}
.el-main {
    position: absolute;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100%;
    width: 100%;
}
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;

}
.el-menu-demo{
    width: 100%;
}
.el-header{
    padding: 0;
}
section {
    padding: 0;
    text-align: center;
}
    .el-menu {
        border-right: solid 0px #e6e6e6;
        background-color: #f4f4f5;
    }
.el-menu--collapse {
    width: 0;
    padding: 0;
}
    .el-menu-vertical-demo{
        position:absolute;
        top:60px;
        height: 100%;
    }
    .el-footer{
        position: absolute;
        width: 100%;
        bottom:0;
    }
    /*头像下拉样式*/
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}
.el-icon-arrow-down[data-v-292092d4] {
    font-size: 20px;
    color: #f0f0f0;
}
.el-menu-item {
    font-size: 14px;
    color: #303133;
    padding: 0 20px 0 20px;
    cursor: pointer;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
}
.touxiang{
    position: absolute;
    top:10px;
    right: 10px;
}
    .el-icon-arrow-down el-icon--right{
        position: absolute;
        margin-top:10px ;
    }

</style>