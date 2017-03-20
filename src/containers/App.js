
import React from 'react';
import { View, Navigator } from 'react-native';
import staticRouters, { getRouter, firstRouter } from '../routers'

export default class SampleComponent extends React.Component {
  render() {
    const initialRoute = getRouter(firstRouter)
    return (
      <Navigator
        initialRoute={initialRoute}
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          if (!navigator.jump) {
            navigator.jump = (fullRouteName: string, params: any) => {
              const nextRoute = getRouter(fullRouteName)
              const isRouteInStack = navigator.getCurrentRoutes().indexOf(nextRoute) > -1
              Object.assign(nextRoute, { params })
              if (!isRouteInStack) {
                // Check if a new tab
                if (Object.values(staticRouters).filter(route => route.name === nextRoute.name).length != 0) {
                  // Jumping to different tab, use immediatelyResetRouteStack
                  // `immediatelyResetRouteStack` = Reset every scene with an array of routes
                  navigator.immediatelyResetRouteStack([nextRoute])
                }
                else {
                  // `push` = Navigate forward to a new scene, squashing any scenes that you couldjumpForward to
                  navigator.push(nextRoute)
                }
              }
              else {
                // `popToRoute` = Transition to an existing scene with unmounting
                // Should use this instead, otherwise could have some bugs
                navigator.popToRoute(nextRoute)
              }
            }
          }
          return <Component {...route.params} navigator={navigator} />
        }} />
    );
  }
}


