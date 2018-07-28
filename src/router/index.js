import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import Rhymeadjective from '@/components/Rhymeadjective'
import Rhymeprecde from '@/components/Rhymeprecede'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    
    {
      path: '/rhyme-adjective',
      name: 'Rhymeadjective',
      component: Rhymeadjective
    },

    {
      path: '/rhyme-precede',
      name: 'Rhymeprecde',
      component: Rhymeprecde
    }
  ]
})
