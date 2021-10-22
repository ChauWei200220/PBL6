// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Homepage',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: 'Admin Profile',
      icon: 'mdi-account',
      to: '/components/profile/',
    },
    {
      title: 'Examination Tables',
      icon: 'mdi-clipboard-outline',
      to: '/tables/regular/',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
