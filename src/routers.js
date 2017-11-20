import { Navigator } from 'react-native'
import FirstPageComponent from './containers/FirstPageComponent'
import SecondPageComponent from './containers/SecondPageComponent'
import AnimationTest from './containers/animation/AnimationTest'
import CircularProgress from './containers/animation/CircularProgress'
import CircularSlider from './containers/animation/CircularSlider'
import FlexTest from './containers/FlexTest'

const staticRouters = {
  Test: {
    name: 'FirstPageComponent', component: FirstPageComponent,
    children: {
      SecondPageComponent: { name: 'SecondPageComponent', component: SecondPageComponent },
      FlexTest: { name: 'FlexTest', component: FlexTest }
    }
  },
  AnimationTest: {
    name: 'AnimationTest', component: AnimationTest,
    children: {
      CircularProgress: { name: 'CircularProgress', component: CircularProgress },
      CircularSlider: { 'name': 'CircularSlider', component: CircularSlider }
    }
  }
}
export default staticRouters
export const firstRouter = 'Test'

/**
  * name = 'Lobby', 'Lobby.Play'
  * 
  * @param {String} name
  * @returns {Object} { name : routeName, component : component, title : title  }
**/
export const getRouter = (name: string) => {
  name = name.split('.')
  let ret = { children: staticRouters };
  name.forEach(v => {
    if (ret.children) ret = ret.children[v]
  })
  return ret
}