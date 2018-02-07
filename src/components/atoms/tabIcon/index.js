import React from 'react'
import { View, Image } from 'react-native'

export default class TabIcon extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      src: ""
    }
  }

  componentWillMount() {
    switch(this.props.type) {
      case 'home':
        this.setState({ src: require('../../../../public/img/icons/home.png') })
        break;
      case 'search':
        this.setState({ src: require('../../../../public/img/icons/search.png') })
        break;
      case 'post':
        this.setState({ src: require('../../../../public/img/icons/post.png') })
        break;
      case 'like':
        this.setState({ src: require('../../../../public/img/icons/like.png') })
        break;
      case 'profile':
        this.setState({ src: require('../../../../public/img/icons/profile.png') })
        break;
      case 'more':
        this.setState({ src: require('../../../../public/img/icons/more.png') })
        break;
    }
  }

  render() {
    return (
      <Image source={this.state.src} style={{ width: 20, height: 20 }}/>
    )
  }

}