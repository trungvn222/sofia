import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: () =>
			import(/* webpackChunkName: "home" */ "../views/Home.vue"),
	},
	{
		path: "/products",
		name: "Products",
		component: () =>
			import(/* webpackChunkName: "products" */ "../views/Products.vue"),
	},
	{
		path: '/products/:slug',
		name: 'ProductDetail',
		component: () =>
		import(/* webpackChunkName: "productDetail" */ "../views/ProductDetail.vue")
	},
	{
		path: "/our-story",
		name: "OurStory",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		component: () =>
			import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
