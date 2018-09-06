<template>
    <div class="header_container">
		<el-breadcrumb separator=">">
			<i class="el-icon-time left" style=margin-right:10px></i>
			<el-breadcrumb-item :to="{ path: '/home' }" style="cursor:pointer">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="info" style="">
			<label>{{username}}</label>
			<el-badge :value="1" class="item">
				<i class="el-icon-time"></i>
			</el-badge>
			<i class="el-icon-delete" @click="signout"></i>
		</div>
		<el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
			<span>登出账号{{username}}</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="centerDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
    </div>
</template>

<script>
	export default{
		data(){
			return{
				username:'',
				centerDialogVisible: false
			}
		},
		created(){
			var user = JSON.parse(localStorage.getItem("user"));
			this.username = user.username;
		},
		mounted(){

		},
		methods:{
			signout(){
				this.centerDialogVisible = true;
				// this.$message({
				// 	type: 'success',
				// 	message: '退出成功'
				// });
				//this.$router.push('/');
			}
		}
	}


	// import {signout} from '@/api/getData'
	// import {baseImgPath} from '@/config/env'
	// import {mapActions, mapState} from 'vuex'
    // export default {
    // 	data(){
    // 		return {
    // 			baseImgPath,
    // 		}
    // 	},
    // 	created(){
    // 		if (!this.adminInfo.id) {
    // 			this.getAdminData()
    // 		}
    // 	},
    // 	computed: {
    // 		...mapState(['adminInfo']),
    // 	},
	// 	methods: {
	// 		...mapActions(['getAdminData']),
	// 		async handleCommand(command) {
	// 			if (command == 'home') {
	// 				this.$router.push('/manage');
	// 			}else if(command == 'singout'){
	// 				const res = await signout()
	// 				if (res.status == 1) {
	// 					this.$message({
	//                         type: 'success',
	//                         message: '退出成功'
	//                     });
	//                     this.$router.push('/');
	// 				}else{
	// 					this.$message({
	//                         type: 'error',
	//                         message: res.message
	//                     });
	// 				}
	// 			}
	// 		},
	// 	}
    // }
</script>

<style lang="less" scoped>
	.info{
		margin-right:20px;
		i{
			margin-left: 15px;
			font-size: 22px;
			cursor: pointer;
		}
	}
	.header_container{
		background-color: #EFF2F7;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
	.el-dropdown-menu__item{
        text-align: center;
	}
</style>