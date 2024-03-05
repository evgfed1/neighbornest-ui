import {createStore} from "vuex";

export default createStore({
    state: {
        comp1: true,
        comp2: true,
        testComponent2Value: true,
    },
    mutations: {
        changeComp2Stat(state) {
            state.comp2 = !state.comp2
        },
        changeComp1Stat(state) {
            state.comp1 = !state.comp1
        },
        changeTestStat(state) {
            if (state.comp2 === true) {
                alert("comp2 = true" + state.comp2)
            }else {
                alert("comp2 = false" + state.comp2)
            }
        },
    },
    actions: {},
    getters: {},
    modules: {}
})