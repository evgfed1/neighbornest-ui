import {createStore} from "vuex";

export default createStore({
    state: {
        comp1: true,
        comp2: true,
        testComponent2Value: true,
        isLoggedIn: false,
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
        setTrueIsLoggedIn(state) {
            state.isLoggedIn = true
            console.log("isLoggedin: " + state.isLoggedIn)
            alert("vuex loggedIn = " + state.isLoggedIn)
        },
        setFalseIsLoggedIn(state) {
            state.isLoggedIn = false
            console.log("isLoggedin: " + state.isLoggedIn)
            alert("vuex loggedIn = " + state.isLoggedIn)
        },

    },
    actions: {},
    getters: {},
    modules: {}
})