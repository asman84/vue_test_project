import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            component: () => import("@/views/layout/Layout"),
            children: [
                {
                    path: "/",
                    name: "tasks-list",
                    component: () => import("@/views/tasks/TaskList")
                }
            ]
        }
    ]
});




