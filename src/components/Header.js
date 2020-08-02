import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const iconcolor = colors.iconColor;
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => {
    return state.darkMode;
  });

  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        height: 80,
        backgroundColor: colors.headerColor,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 10,
        //For iOS
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "black",
        shadowOpacity: 1.0,
      }}
    >
      <View
        style={{
          margin: 13,
        }}
      >
        <Feather
          style={{
            marginLeft: 10,
          }}
          name="youtube"
          size={55}
          color={iconcolor}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 110,
          marginTop: 20,
        }}
      >
        <FontAwesome
          name="search"
          size={38}
          color={iconcolor}
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons
          name="lightbulb-outline"
          size={38}
          color={iconcolor}
          onPress={() =>
            dispatch({ type: "change_theme", payload: !currentTheme })
          }
        />
      </View>
    </View>
  );
}
