import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
	//modal state
	const [modalIsVisible, setModalIsVisible] = useState(false);

	//opens the modal
	function startAddGoalHandler() {
		setModalIsVisible(true);
	}
	//close the modal
	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	//goals state
	const [courseGoals, setCourseGoals] = useState([]);

	//Add goal on click
	function addGoalHandler(enteredGoalText) {
		//arrow fx because new state dependes on the previous state
		setCourseGoals((currCourseGoals) => [
			...currCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);

		endAddGoalHandler();
	}
	//delete goals on tap
	function deleteGoalHandler(id) {
		setCourseGoals((currCourseGoals) => {
			return currCourseGoals.filter((goal) => goal.id !== id);
		});
	}

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appcontainer}>
				<Button
					title="Add New Goal"
					color="#a065ec"
					onPress={startAddGoalHandler}
				/>
				<GoalInput
					visible={modalIsVisible}
					onAddGoal={addGoalHandler}
					onCancel={endAddGoalHandler}
				/>

				<View style={styles.goalsContainer}>
					{/* <ScrollView>
					{courseGoals.map((courseGoal) => {
						return (
							<View key={courseGoal} style={styles.goalItem}>
								<Text style={styles.goalText}>{courseGoal}</Text>
							</View>
						);
					})}
				</ScrollView> */}

					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteItem={deleteGoalHandler}
								/>
							);
						}}
						keyExtractor={(item, _) => item.id}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appcontainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},

	goalsContainer: {
		flex: 5,
	},
});
