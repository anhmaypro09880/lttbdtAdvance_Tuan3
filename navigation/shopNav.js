import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen2 from "../components/Screen2";
import Vsmart from "../components/vsmart";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Vsmart} />
            <Stack.Screen name="test" component={Screen2} />
        </Stack.Navigator>
    );
}
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator></Stack.Navigator>
        </NavigationContainer>
    );
};
export default MainNavigator;
