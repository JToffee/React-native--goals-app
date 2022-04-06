import { StyleSheet, View, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#210644" }}
				onPress={props.onDeleteItem.bind(this, props.id)}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e08cc",
	},
	goalText: {
		color: "white",
		padding: 8,
	},
	// iOS ripple

	pressedItem: {
		opacity: 0.5,
	},
});
