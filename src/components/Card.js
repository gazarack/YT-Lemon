import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";

const Card = (props) => {
  const { colors } = useTheme();
  const textcolor = colors.textColor;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("videoplayer", {
          videoId: props.videoId,
          title: props.title,
        })
      }
    >
      <View
        style={{
          elevation: 5,
          marginBottom: 10,
        }}
      >
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: "100%",
            height: 250,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            margin: 10,
          }}
        >
          <MaterialCommunityIcons
            name="account-circle"
            size={38}
            color="black"
          />
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                width: Dimensions.get("screen").width - 90,
                color: textcolor,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {props.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: textcolor,
              }}
            >
              {props.channel}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
