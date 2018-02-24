import React, {Component} from 'react'
import {Dimensions, Image, View, StyleSheet, TouchableOpacity} from 'react-native'

const CELL_SIZE = Dimensions.get('window').width / 3

export default class SmallCell extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {uri, type, onPress} = this.props
		return (
			<TouchableOpacity
				activeOpacity={1}
				onPress={onPress ? onPress : null}
				style={styles.container}
			>
				<Image
					style={styles.cellImage}
					source={{uri: uri}}
				/>
				{this.renderIcon(type)}
			</TouchableOpacity>
		)
	}

	renderIcon(type) {
		let icon = null
		switch (type) {
			case "single":
				icon = null
				break
			case "multiple":
				icon = <Image source={require("./img/multiple.png")}/>
				break
			case "movie":
				icon = <Image source={require("./img/movie.png")}/>
				break
		}

		return (
			<View style={styles.icon}>
				{icon}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: CELL_SIZE,
		height: CELL_SIZE,
		backgroundColor: "#333"
	},
	cellImage: {
		width: '100%',
		height: '100%',
	},
	icon: {
		position: 'absolute',
		top: 6,
		right: 6,
	}
})
