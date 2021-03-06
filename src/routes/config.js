export default {
    menus0: [ // 菜单相关路由
        { key: '/app/dashboard/index', title: '总览', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/app/task', title: '任务0', icon: 'bars',
            /*  subs: [
                  { key: '/app/task/opOrder', title: '待领任务', component: 'OpOrder' },
                  { key: '/app/task/opingOrder', title: '已领任务', component: 'OpingOrder' },
                  { key: '/app/task/opDoneOrder', title: '已完成任务', component: 'OpDoneOrder' },
              ],*/
            subs: [
                { key: '/app/task/OpOrder', title: '待领任务', component: 'OpOrder'},
                { key: '/app/task/advancedTable', title: '已领任务', component: 'AdvancedTable'},
                { key: '/app/task/asynchronousTable', title: '已完成任务', component: 'AsynchronousTable'},
            ],
        },
    ],
    menus1: [ // 菜单相关路由
        { key: '/app/dashboard/index', title: '总览', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/app/ui', title: 'UI', icon: 'scan',
            subs: [
                { key: '/app/ui/buttons', title: '按钮', component: 'Buttons'},
                { key: '/app/ui/icons', title: '图标', component: 'Icons'},
                { key: '/app/ui/spins', title: '加载中', component: 'Spins'},
                { key: '/app/ui/modals', title: '对话框', component: 'Modals'},
                { key: '/app/ui/notifications', title: '通知提醒框', component: 'Notifications'},
                { key: '/app/ui/tabs', title: '标签页', component: 'Tabs'},
                { key: '/app/ui/banners', title: '轮播图', component: 'Banners'},
                { key: '/app/ui/wysiwyg', title: '富文本', component: 'WysiwygBundle'},
                { key: '/app/ui/drags', title: '拖拽', component: 'Drags'},
                { key: '/app/ui/gallery', title: '画廊', component: 'Gallery'},
                { key: '/app/ui/map', title: '地图', component: 'MapUi'},
            ],
        },
        {
            key: '/app/animation', title: '动画', icon: 'rocket',
            subs: [
                { key: '/app/animation/basicAnimations', title: '基础动画', component: 'BasicAnimations'},
                { key: '/app/animation/exampleAnimations', title: '动画案例', component: 'ExampleAnimations'},
            ],
        },
        {
            key: '/app/form', title: '表单', icon: 'edit',
            subs: [
                { key: '/app/form/basicForm', title: '基础表单', component: 'BasicForm'},
                { key: '/app/form/LoginForm', title: '登录表单', component: 'LoginForm'},
            ],
        },
        {
            key: '/app/chart', title: '图表', icon: 'area-chart',
            subs: [
                { key: '/app/chart/echarts', title: 'echarts', component: 'Echarts' },
                { key: '/app/chart/recharts', title: 'recharts', component: 'Recharts' },
            ],
        },
        {
            key: '/subs4', title: '页面', icon: 'switcher',
            subs: [
                { key: '/login', title: '登录' },
                { key: '/404', title: '404' },
            ],
        },
        {
            key: '/app/auth', title: '权限管理', icon: 'safety',
            subs: [
                { key: '/app/auth/basic', title: '基础演示', component: 'AuthBasic' },
                { key: '/app/auth/routerEnter', title: '路由拦截', component: 'RouterEnter', auth: 'auth/testPage' },
            ],
        },
        {
            key: '/app/cssModule', title: 'cssModule', icon: 'star', component: 'Cssmodule'
        },
        {
            key: '/app/extension', title: '功能扩展', icon: 'bars',
            subs: [
                { key: '/app/extension/queryParams', title: '问号形式参数', component: 'QueryParams', query: '?param1=1&param2=2' },
            ],
        },
        {
            key: '/app/task', title: '任务1', icon: 'bars',
            subs: [
                { key: '/app/task/OpOrder', title: '待领任务', component: 'OpOrder', },
                // { key: '/app/task/OpOrder/:id', title: '待领任务详情', component: 'OpOrderDetail'},
                { key: '/app/task/advancedTable', title: '已领任务', component: 'AdvancedTable'},
                { key: '/app/task/asynchronousTable', title: '已完成任务', component: 'AsynchronousTable'},
            ],
        },
    ],
    menus2: [ // 菜单相关路由
        { key: '/app/dashboard/index', title: '总览', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/app/task', title: '任务2', icon: 'bars',
            /*  subs: [
                  { key: '/app/task/opOrder', title: '待领任务', component: 'OpOrder' },
                  { key: '/app/task/opingOrder', title: '已领任务', component: 'OpingOrder' },
                  { key: '/app/task/opDoneOrder', title: '已完成任务', component: 'OpDoneOrder' },
              ],*/
            subs: [
                { key: '/app/task/OpOrder', title: '待领任务', component: 'OpOrder'},
                { key: '/app/task/advancedTable', title: '已领任务', component: 'AdvancedTable'},
                { key: '/app/task/asynchronousTable', title: '已完成任务', component: 'AsynchronousTable'},
            ],
        },
    ],
    menus3: [ // 菜单相关路由
        { key: '/app/dashboard/index', title: '总览', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/app/task', title: '任务3', icon: 'bars',
            subs: [
                { key: '/app/task/OpOrder', title: '待领任务', component: 'OpOrder'},
                { key: '/app/task/advancedTable', title: '已领任务', component: 'AdvancedTable'},
                { key: '/app/task/asynchronousTable', title: '已完成任务', component: 'AsynchronousTable'},
            ],
        },
    ],
    others: [] // 非菜单相关路由
}