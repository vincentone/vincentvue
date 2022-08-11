/*
 * @Author: vincent 1343327598@qq.com
 * @Date: 2022-08-04 18:20:10
 * @LastEditors: vincent 1343327598@qq.com
 * @LastEditTime: 2022-08-11 10:26:20
 * @FilePath: /vincentvue/src/router/routes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const routes = [{
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("@/views/login/index.vue"),
    },
];

export default routes;