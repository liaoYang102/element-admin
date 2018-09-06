<template>
    <div class="container" style="height:100%;">
        <el-row style="height: 100%;">
	  		<el-col :span="4"  style="height: 100%;">
				<el-menu :default-active="defaultActive" style="height: 100%;text-align:left;overflow:hidden" text-color="#fff" router>
					<el-menu-item index="manage" class="index">
							<i class="el-icon-time"></i> <span style="font-size:18px;">Flow</span> 
					</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-time"></i>一级菜单A</template>
						<el-menu-item index="test1">二级菜单1</el-menu-item>
						<el-menu-item index="test2">二级菜单2</el-menu-item>
						<el-menu-item index="test3">二级菜单3</el-menu-item>
					</el-submenu>
					<el-menu-item index="test4">
						<i class="el-icon-time"></i>
						<span slot="title">一级菜单B</span>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
    </div>
</template>
<script>
export default {
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>
<style lang="less" scoped>
.index i{
	font-size:50px;
	vertical-align: baseline;
	width: auto;
}
.index{
	height: 76px;
	padding-top: 20px;
}
.el-submenu [class^=el-icon-]{
	vertical-align: baseline;
	font-size: 18px;
}
.el-icon-time{
	// vertical-align: baseline;
	font-size: 18px;
}
.el-menu-item [class^=el-icon-]{
	margin-right: 0px;
}
</style>
