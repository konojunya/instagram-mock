import React, {Component} from 'react'
import {Dimensions, Image, View, StyleSheet, TouchableOpacity} from 'react-native'

const CELL_SIZE = Dimensions.get('window').width / 3

const LargeCell = (props) => (
	<TouchableOpacity
		style={{
			width: CELL_SIZE*2+1,
			height: CELL_SIZE*2+1,
			backgroundColor: "#333"
		}}
		activeOpacity={1}
		onPress={props.onPress ? props.onPress : null}
	>
		<Image
			style={{
				width: '100%',
				height: '100%',
			}}
			source={{uri: props.uri}}
		/>
		<View style={styles.icon}>
			<Image source={require("./img/movie.png")}/>
		</View>
	</TouchableOpacity>
)

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
		top: 10,
		left: 10,
	}
})

export default LargeCell
