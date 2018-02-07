import React from 'react'
import { Image, View, Dimensions, StyleSheet } from 'react-native';
import { Thumbnail, Text, Icon } from 'native-base'
import TabIcon from '../../atoms/tabIcon'

export default class Item extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={styles.wrapper}>
          <Thumbnail small source={{uri: this.props.usericon}} style={styles.thumbnail} />
          <Text style={styles.username}>{this.props.username}</Text>
          <Image source={require('../../../../public/img/icons/more.png')} style={styles.more} />
        </View>
        <View style={styles.mainImageWrapper}>
          <Image style={styles.mainImage} source={{uri: this.props.image}} />
        </View>
        <View style={styles.actions}>
          <Image source={require('../../../../public/img/icons/like.png')} style={{ width: 22, height: 20 }} />
          <Image source={require('../../../../public/img/icons/comment.png')} style={{ width: 22, height: 22, marginLeft: 10, marginRight: 10 }} />
          <Image source={require('../../../../public/img/icons/message.png')} style={{ width: 22, height: 20 }} />
          <Image source={require('../../../../public/img/icons/label.png')} style={{ width: 22, height: 22, marginLeft: 'auto' }} />
        </View>
        <View style={styles.likeCount}>
          <Text>
            <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{this.props.username}</Text>
            <Text style={{ fontSize: 13, lineHeight: 15 }}>さん、</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 13 }}>他{this.props.likeCount}人</Text>
            <Text style={{ fontSize: 13 }}>が「いいね！」しました</Text>
          </Text>
        </View>
        <View style={styles.body}>
          <Text>
            <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{this.props.username}</Text>
            <Text style={{ fontSize: 13, lineHeight: 15 }}>  {this.props.body}</Text>
          </Text>
        </View>
        <View style={styles.date}>
          <Text style={{ fontSize: 9, color: 'gray' }}>{this.props.date}</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 8,
    paddingBottom: 8
  },
  thumbnail: {
    marginLeft: 10
  },
  username: {
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 10
  },
  more: {
    width: 13,
    height: 3,
    marginLeft: 'auto',
    marginRight: 20
  },
  mainImageWrapper: {
    height: Dimensions.get('window').width
  },
  mainImage: {
    height: Dimensions.get('window').width,
    flex: 1
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  likeCount: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4
  },
  body: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10
  },
  date: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 15
  }
})