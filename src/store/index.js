import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        data: []

    },
    mutations: {
        getData(state, data) {
            console.log(data.selectText)
            if (state.data.length) {
                for (let i = 0; i < state.data.length; i++) {
                    console.log(state.data[i].selectText)
                    if (state.data[i].selectText === data.selectText) {
                        state.data[i].num = state.data[i].num + data.num
                        return
                    }
                }
            }


            state.data.unshift(data)
        },
        upDateData(state, data) {
            state.data = data
        }

    },


    actions: {
        inc({ commit }, data) {
            commit('getData', data)
        },
        upDateData({ commit }, data) {
            commit('upDateData', data)
        }

    },
})