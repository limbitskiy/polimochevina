import axios from 'axios'
import { createStore } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

export default createStore({
    state() {
        return {
            products: [],
            cart: [],
            cartTotal: 0,
            translations: [],
            currentLang: 'rus',
            languages: ['rus', 'ukr'],
            sideBarOpen: false,
            productsLoaded: false,
            translationsLoaded: false,
            showCatalog: false,
            showAbout: false,
            showWhyUs: false,
            showFooter: false,
            transitionDelay: 0.2,
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_CURRENTLANG(state, currentLang) {
            state.currentLang = currentLang
        },
        SET_TRANSLATIONS(state, translations) {
            state.translations = translations
        },
        SET_SIDEBAROPEN(state, sideBarOpen) {
            state.sideBarOpen = sideBarOpen
        },
        ADD_TO_CART(state, product) {
            state.cart.push(product)
        },
        REMOVE_FROM_CART(state, product) {
            const idx = state.cart.indexOf(product)
            state.cart.splice(idx, 1)
        },
        SET_CART_TOTAL(state, total) {
            state.cartTotal = total
        },
        CLEAR_CART(state) {
            state.cart = []
        },
        SET_PRODUCTS_LOADED(state, status) {
            state.productsLoaded = status
        },
        SET_TRANSLATIONS_LOADED(state, status) {
            state.translationsLoaded = status
        },
        SET_SHOW_CATALOG(state, status) {
            state.showCatalog = status
        },
        SET_SHOW_ABOUT(state, status) {
            state.showAbout = status
        },
        SET_SHOW_WHY_US(state, status) {
            state.showWhyUs = status
        },
        SET_SHOW_FOOTER(state, status) {
            state.showFooter = status
        }
    },
    actions: {
        addToCart(context, product) {
            const alreadyInCart = context.state.cart.find(item => {
                return item.uniqueId === product.uniqueId
            })
            if (!alreadyInCart) {
                context.commit('ADD_TO_CART', product)
            }
            context.dispatch('refreshCartTotal')
        },
        removeFromCart(context, product) {
            context.commit('REMOVE_FROM_CART', product)
            context.dispatch('refreshCartTotal')
        },
        refreshCartTotal({ state }) {
            const total = state.cart.reduce((acc, item) => {
                return acc += item.price
            }, 0)
            this.commit('SET_CART_TOTAL', total)
        },
        fetchProducts({ commit }) {
            return new Promise(resolve => {
                axios.get('/products.json')
                    .then(res => {
                        commit('SET_PRODUCTS', res.data)
                        resolve()
                    })
            }).then(() => {
                commit('SET_PRODUCTS_LOADED', 'true')
            })

        },
        fetchTranslations({ commit }) {
            return new Promise(resolve => {
                axios.get('/translations.json')
                    .then(res => {
                        commit('SET_TRANSLATIONS', res.data)
                        resolve()
                    })
            }).then(() => {
                commit('SET_TRANSLATIONS_LOADED', 'true')
            })
        }
    },
    getters: {
        // cartProducts(state) {
        //     return state.cart.map(cartItem => {
        //         const product = state.products.find(product => product.id === cartItem.id)
        //         return {
        //             name: product.name['rus'],
        //             quantity: cartItem.quantity
        //         }
        //     })
        // }
    }
})