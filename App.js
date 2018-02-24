import React from 'react';
import { Container } from 'native-base'
import { Image, View, Dimensions } from 'react-native'
import { Router, Tabs, Scene } from 'react-native-router-flux'
import Index from './src/components/pages/index'
import TabIcon from './src/components/atoms/tabIcon'
import Search from "./src/components/pages/search/index";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Tabs
          swipeEnabled={false}
          showLabel={false}
        >
          <Scene
            title={ <Image source={require('./public/img/instagram.png')} style={{ marginTop: 5 }} /> }
            leftTitle={ <Image source={require('./public/img/icons/camera.png')} style={{ width: 23, height: 20, marginTop: 5 }} /> }
            onLeft={() => alert("hoge")}
            rightTitle={ <Image source={require('./public/img/icons/message.png')} style={{ width: 23, height: 20, marginTop: 5 }} /> }
            onRight={() => alert("hoge")}
            component={Index}
            icon={() => <TabIcon type="home" />}
          />
          <Scene
						initial
            title="Search"
            component={Search}
            icon={() => <TabIcon type="search" />}
						hideNavBar
          />
          <Scene
            title="hoge3"
            component={Index}
            icon={() => <TabIcon type="post" />}
          />
          <Scene
            title="hoge4"
            component={Index}
            icon={() => <TabIcon type="like" />}
          />
          <Scene
            title="hoge5"
            component={Index}
            icon={() => <TabIcon type="profile" />}
          />
        </Tabs>
      </Router>
    );
  }
}