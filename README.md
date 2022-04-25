coderL

```javascript 页面图片配置在page.config.js中
new H5({
  // 元素
  el: "#H5",
  // 需要开启轮播？
  isNeedSwiper: true,
  // 设计稿尺寸 一般是640*1400 1400高度
  imgSize: 1400,
  // 是否需要cos需要资源图片放在腾讯云上 本地打开项目和cos无关
  isNeedCos: true,
  //   swiper 配置
  swiperOptions: {
    // 设定初始化时slide的索引 初始为0
    initialSlide: 0,
    // 方向 direction 水平(horizontal)或垂直(vertical)
    direction: "vertical",
  },
  // 图片全部渲染完的回调
  imgpreloadAll() {},
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
    callback: () => {},
  },
});
```

```CSS
<!-- 主题 -->
-webkit-animation: seal 1s ease 0.5s both,biger3 3s linear infinite 1.5s forwards;

<!-- 左侧快速划入 抖动 -->

-webkit-animation: bounceInLeft 1.5s linear both, icon 1.5s linear 2s infinite;

<!-- 右侧快速划入 抖动 -->

-webkit-animation:bounceInRight 1.5s linear both, icon 1.5s linear 2s infinite;

<!-- 从下方快速进入 抖动 -->

-webkit-animation:bounceInUp 1.5s linear both, icon 1.5s linear 2s infinite;

<!-- 放大一下 闪烁 -->

-webkit-animation: pulse 1.5s linear both, star 1.5s linear 2s infinite;

<!-- 左侧v路径划入 闪烁 -->

-webkit-animation: zoomInLeft 4.5s linear both, star 1.5s linear 2s infinite;

<!-- 从里到外放大出现 呼吸 标题 -->

-webkit-animation: zoomIn 1.8s ease both, pulse 3.5s linear 1.8s infinite;

<!-- 从外到里放大出现 呼吸 标题 -->

-webkit-animation: zoomInBig 1.8s ease both, pulse 3.5s linear 1.8s infinite;

<!-- 渐显 小距离移动 -->

-webkit-animation: fadeIn 1.5s ease both;

<!-- 从左侧 滑动+渐显 -->

-webkit-animation: fadeInLeft 1.5s ease both;

<!-- 从右侧 滑动+渐显 -->

-webkit-animation: fadeInRight 1.5s ease both;

<!-- 从上方 滑动+渐显 -->

-webkit-animation: fadeInDown 1.5s ease both;

<!-- 从下方 滑动+渐显 -->

-webkit-animation: fadeInUp 1.5s ease both;

<!-- 云飘动 -->

-webkit-animation: get_yun 1.5s ease both infinite;

<!-- 从上到下快速滑入 -->

-webkit-animation: slideInDown 1.8s ease both;

<!-- 宽度不设置宽度默认为100% -->
<!-- 元素默认都为绝对定位 -->

```

## slide 元素

<!-- 宽w- 高h- 左l- 右r- 层级z-  单位为rem-->

```javascript
{
        "className": ["animate1", "page1"],
        "info": [

        ]
},

```

## img 图片元素

```javascript 此元素样式为width:1rem; top:1rem;left:1rem; right:1rem;z-index:2
 {
     "imgurl": "img/1-1.png",
     "className": "animate1 img1",
     "style":"w-1 t-1 l-1 r-1  z-2"
 },
```

## img 地图导航元素 nav

```javascript
   {
    "imgurl": "img/1-1.png",
    "className": ["animate1", "img2"],
    //类型
    "type": "nav",
    //纬度
    "latitude": 31.9625,
    //经度
    "longitude": 33,
    //姓名
    "name": "雨花台区小行路",
    //描述
    "address": "1",
    //缩放比例
    "scale": 10,
    "zIndex":999
    },

```

## a+img 打电话按钮元素

```javascript
    {
     "imgurl": "img/1-1.png",
     "className": ["animate1", "img1"],
     "type": "tel",
     //电话号码
     "number":13676328192
    },
```

## input 姓名元素

```javascript
 {
     "type":"nameVal",
     "imgurl": "img/1-1.png",
     "className": ["animate1", "img1"],
 },
```

## input 电话元素

```javascript
 {
     "type":"telVal",
     "imgurl": "img/1-1.png",
     "className": ["animate1", "img1"],
 },

```

## input 身份证元素

```javascript
 {
     "type":"cardVal",
     "imgurl": "img/1-1.png",
     "className": ["animate1", "img1"],
 },
```

## 提交按钮元素

```javascript
 {
     "type":"submit",
     "imgurl": "img/1-1.png",
     "className": ["animate1", "img1"],
 },
```
