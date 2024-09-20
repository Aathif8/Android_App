import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/pages/Home";
import Explore from "./src/pages/Explore";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShownLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="align-middle justify-center">
                  <Entypo
                    name="home"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View className="align-middle justify-center">
                  <MaterialIcons
                    name="explore"
                    size={24}
                    color={focused ? "#16247d" : "#111"}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
