import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/Screens/Home";
import { StatusBar } from "react-native";
import SearchScreen from "./src/Screens/Search";
import Constant from "expo-constants";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/Screens/Home";
import Search from "./src/Screens/Search";
import VideoPlayer from "./src/Screens/VideoPlayer";
import Explore from "./src/Screens/Explore";
import Suscribe from "./src/Screens/Suscribe";
import { themeReducer } from "./src/reducers/themereducer";

import { MaterialIcons } from "@expo/vector-icons";

import { Provider, useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";

import { reducer } from "./src/reducers/reducer";

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "green",
    primary: "rgb(255, 45, 85)",
    iconColor: "white",
    statbarColor: "black",
    textColor: "white",
  },
};
const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    primary: "rgb(255, 45, 85)",
    iconColor: "green",
    statbarColor: "green",
    textColor: "black",
  },
};

const rootReducer = combineReducers({
  cardData: reducer, //[]
  darkMode: themeReducer, //initially false
});

const store = createStore(rootReducer);

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "explore") {
            iconName = "explore";
          } else if (route.name === "suscribe") {
            iconName = "subscriptions";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={36} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "green",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="suscribe" component={Suscribe} />
    </Tabs.Navigator>
  );
};

// export default function App() {
//   return (

// export function statusBarColor() {
//   const { colors } = useTheme();
//   const statbarcolor = colors.statbarColor;
//   return (
//     <View>
//       <StatusBar
//         barStyle="light-content"
//         hidden={false}
//         backgroundColor={statbarcolor}
//         translucent={true}
//       />
//     </View>
//   );
// }

export default () => {
  return (
    <Provider store={store}>
      {/* <statusBarColor /> */}
      <Navigation />
    </Provider>
  );
};

export function Navigation() {
  let currentTheme = useSelector((state) => {
    return state.darkMode;
  });

  return (
    <NavigationContainer
      theme={currentTheme ? customDarkTheme : customDefaultTheme}
    >
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoplayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
