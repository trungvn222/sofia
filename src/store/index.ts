import { createStore } from "vuex";
import categories from '@/dummy/categories';
import products from '@/dummy/products';
import IProduct from '@/interfaces/IProduct';

export default createStore({
  state: {
    categories: [],
    products: [],
    featuredProducts: [],
    selectedCats: [],
    productDetail: {},
    relatedProducts: [],
  },
  getters: {
    categories: state => {
      return state.categories
    },
    products: state => {
      if(!state.selectedCats.length) {
        return state.products;
      }
    
      const items = state.products.filter((p: IProduct) => {
        if(!p.cats.length){
          return false;
        }
        
        const index = p.cats.findIndex((value: number) => {
          return state.selectedCats.findIndex(cat => cat === value) >= 0;
        });
        return index >= 0;
      });
      return items;
    },
    featuredProducts: state => {
      return state.featuredProducts
    },
    productDetail: state => {
      return state.productDetail
    },
    relatedProduct: state => {
      const {productDetail} = state;
      const {cats = []} = productDetail as IProduct;
      if(!cats.length){
        return [];
      }
      
      const items = products.filter((p: IProduct) => {
        if(!p.cats.length){
          return false;
        }
        const index = p.cats.findIndex((value: number) => {
          return cats.findIndex(cat => cat === value) >= 0;
        });
        return index >= 0;
      });
      return items.splice(0, 3);
    }
  },
  mutations: {
    getCategories(state, payload){
      const { items } = payload;
      state.categories = items;
    },
    getProducts(state, payload){
      const { items } = payload;
      state.products = items;
    },
    getFeaturedProducts(state, payload){
      const { items } = payload;
      state.featuredProducts = items;
    },
    setFilterProducts(state, payload){
      const { cats } = payload;
      state.selectedCats = cats;
    },
    getProductDetail(state, payload){
      const { product } = payload;
      state.productDetail = product;
    }
  },
  actions: {
    getCategories({ commit }){
      commit('getCategories', {
        items: categories
      })
    },
    getProducts({ commit }){
      commit('getProducts', {
        items: products
      })
    },
    getFeaturedProducts({commit}){
      const featuredProducts = products.filter(p => p.featured);
      
      commit('getFeaturedProducts', {
        items: featuredProducts
      })
    },
    setFilterProducts({commit}, selectedCats){
      commit('setFilterProducts', {
        cats: selectedCats
      });
    },
    getProductDetail({commit}, productSlug){
      const index = products.findIndex((p:IProduct) => p.slug === productSlug);
      if(index >= 0){
        commit('getProductDetail', {
          product: products[index]
        });
      }
    }
  },
  modules: {}
});
