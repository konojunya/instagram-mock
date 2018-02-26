import React, {Component} from 'react'
import {View, SafeAreaView, StyleSheet, ScrollView} from "react-native";
import items from '../index/demo'
import SmallCell from "../../atoms/smallCell/index";
import LargeCell from "../../atoms/largeCell/index";

export default class Search extends Component {
	renderFirst(item, key) {
		return (
			<View style={styles.flex} key={key}>
				<View>
					<View style={styles.leftCell}>
						<SmallCell uri={item.image} type="movie" onPress={() => console.log("onPress")} />
					</View>
					<View style={styles.leftCell}>
						<SmallCell uri={item.image} type="multiple" />
					</View>
				</View>
				<View style={styles.rightCell}>
					<LargeCell uri={item.image} onPress={() => console.log("onPress")} />
				</View>
			</View>
		)
	}
	renderSecond(item, key) {
		return (
			<View style={styles.flex} key={key}>
				<View style={styles.leftCell}>
					<SmallCell uri={item.image} type="single" />
				</View>
				<View style={styles.centerCell}>
					<SmallCell uri={item.image} type="multiple" />
				</View>
				<View style={styles.rightCell}>
					<SmallCell uri={item.image} type="movie" />
				</View>
			</View>
		)
	}
	renderThird(item, key) {
		return (
			<View style={styles.flex} key={key}>
				<View style={styles.leftCell}>
					<LargeCell uri={item.image} />
				</View>
				<View>
					<View style={styles.centerCell}>
						<SmallCell uri={item.image} type="single" />
					</View>
					<View style={styles.rightCell}>
						<SmallCell uri={item.image} type="multiple" />
					</View>
				</View>
			</View>
		)
	}
	render() {
		const listItems = items.map((item, index) => {
			if (index % 6 === 0) return this.renderFirst(item, index)
			if (index % 6 === 1 || index % 6 === 2 || index % 6 === 4 || index % 6 === 5) return this.renderSecond(item, index)
			if (index % 6 === 3) return this.renderThird(item, index)
		})
		return (
			<SafeAreaView>
				<ScrollView>
					{listItems}
				</ScrollView>
			</SafeAreaView>
		)
	}
}

const BORDER_COLOR = '#FFF'
const BORDER_WIDTH = 1
const styles = StyleSheet.create({
	flex: {
		flexDirection: 'row',
	},
	leftCell: {
		borderRightColor: BORDER_COLOR,
		borderRightWidth: BORDER_WIDTH,
		borderBottomColor: BORDER_COLOR,
		borderBottomWidth: BORDER_WIDTH,
	},
	centerCell: {
		borderRightColor: BORDER_COLOR,
		borderRightWidth: BORDER_WIDTH,
		borderBottomColor: BORDER_COLOR,
		borderBottomWidth: BORDER_WIDTH,
	},
	rightCell: {
		borderBottomColor: BORDER_COLOR,
		borderBottomWidth: BORDER_WIDTH,
	},
})
