import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import demo from './demo'

import Item from './item'

export default class Index extends React.Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    this.setState({
      items: demo.map((item, index) => {
        return (
          <Item
            key={index}
            usericon={item.usericon}
            username={item.username}
            image={item.image}
            likeCount={item.likeCount}
            body={item.body}
            date={item.date}
          />
        )
      })
    })
  }

  render() {
    return (
      <ScrollView>
        {this.state.items}
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
