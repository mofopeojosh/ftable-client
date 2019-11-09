import axios from 'axios'
const contentModule = {
    namespaced: true,
    state: {
        saving: false,
        fetching: false,
        deleting: false,
    },
    mutations: {
        saving(state, value){
            state.saving = value;
        },

        fetching(state, value){
            state.fetching = value;
        },

        deleting(state, value){
            state.deleting = value;
        }
    },
    actions: {
        getContents(state) {
            state.commit('fetching', true);
            return axios.get('/contents')
                .finally(() => {
                    state.commit('fetching', false);
                });
        },

        addContent(state, data) {
            state.commit('saving', true);
            return axios.post('/contents/create', data)
                .finally(() => {
                    state.commit('saving', false);
                });
        },

        editContent(state, data) {
            state.commit('saving', true);
            return axios.put(`/contents/${data._id}/edit`, data)
                .finally(() => {
                    state.commit('saving', false);
                });
        },

        deleteContent(state, id) {
            state.commit('deleting', true);
            return axios.put(`/contents/${id}/delete`, id)
                .finally(() => {
                    state.commit('deleting', false);
                });
        }
    },
    getters: { }
};

export default contentModule;
