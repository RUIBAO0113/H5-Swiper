// 页面图片配置在page.config.js中
new H5({
	// 元素
	el: "#H5",
	// 需要开启轮播？
	isNeedSwiper: true,
	// 设计稿尺寸 一般是640*1400 1400高度
	imgSize: 1400,
	// 是否需要cos需要资源图片放在腾讯云上 本地打开项目和cos无关
	isNeedCos: true,
	// 图片全部渲染完的回调
	imgpreloadAll() {
    
	},
	// 分享详情信息
	shareConfig: {
		// 项目名字 H5链接地址 https://web.wbthink.cn/Flash2022/ShiMao.F.210918/index.html 中间项目名
		projectName: "HuaMao.F.220413",
		// 主标 html里的title + 微信分享出去的主标
		title: "苏州华贸中心",
		// 副标题 微信分享出去的副标题
		subTitle: "苏州华贸中心",
		// 分享图标 微信分享出去的 图标
		shareIconUrl: "icon.png",
		// 分享成功回调
		callback: () => {
			
		}
	}
});