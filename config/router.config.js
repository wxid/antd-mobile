export default [{
  path: '/',
  component: '../layouts/BasicLayout',
  routes: [
    { path: '/', component: './index/index', title: '首页' },
    { path: '/category', component: './category/index', title: '分类' },
    {path: '/shop', component: './shop/index', title: '购物'},
    { path: '/test', component: './test/index', title: '测试页面111111' },
    { path: '/image', component: './test/image', title: '图片' },
    { path: '/tabTar', component: './test/ListView' },
    { path: '/drawer', component: './Learn/index', title: '抽屉' },
    { path: '/createContext', component: './Learn/createContext', title: 'createContext' },
    { path: '/carousel', component: './Learn/carousel', title: '走马灯' },
    { path: 'learning', component: './Learn/learning' },
    {
      path: '/exception',
      component: '../layouts/ExceptionLayout',
      routes: [
        { path: '/exception/403', title: '无权限', component: './exception/403' },
        { path: '/exception/500', title: '服务器出错了', component: './exception/500' },
      ],
    },
    { component: '404', title: '页面没找到' },
  ],
}, ];
