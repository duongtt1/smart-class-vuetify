import Vue from "vue";
import VueRouter from "vue-router";
import ClassroomView from "../views/ClassroomView.vue";
import DashboardView from "../views/DashboardView.vue";
import NotificationView from "../views/NotificationView.vue";
import ProfileView from "../views/ProfileView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		meta: {
			layout: "AppLayout",
		},
		component: HomeView,
	},
	{
		path: "/login",
		name: "login",
		meta: {
			layout: "AuthLayout",
		},
		component: LoginView,
	},
	{
		path: "/dashboard",
		name: "dashboard",
		meta: {
			layout: "AppLayout",
		},
		component: DashboardView,
	},
	{
		path: "/classroom",
		name: "classroom",
		meta: {
			layout: "AppLayout",
		},
		component: ClassroomView,
		// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: "/notification",
		name: "notification",
		meta: {
			layout: "AppLayout",
		},
		component: NotificationView,
		// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: "/profile",
		name: "profile",
		meta: {
			layout: "AppLayout",
		},
		component: ProfileView,
		// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: "/schedule",
		name: "schedule",
		meta: {
			layout: "AppLayout",
		},
		component: ScheduleView,
		// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const publicPages = ["/login"];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem("user");
    // console.log("check")
	if (authRequired && !loggedIn) {
		return next("/login");
	}

	next();
});

export default router;
