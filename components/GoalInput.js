import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("");

	//Grab user in put on keystroke
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	}
	function endGoalAddHandler() {
		setEnteredGoalText("");
		props.onCancel();
	}
	return (
		<Modal visible={props.visible} animationType={"slide"}>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/image1.png")}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
					</View>
					<View style={styles.button}>
						<Button
							title="Cancel"
							onPress={endGoalAddHandler}
							color="#f31283"
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		width: "100%",
		padding: 16,
	},
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 1,
		padding: 16,
		backgroundColor: "#311b6b",
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 25,
	},
	button: {
		width: "30%",
		marginHorizontal: 8,
	},
	image: {
		width: 125,
		height: 110,
		margin: 20,
		marginBottom: 30,
	},
});
