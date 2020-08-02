import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImagePropTypes,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

const MiniCard = (props) => {
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
          flexDirection: "row",
          margin: 10,
          marginBottom: 0,
        }}
      >
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: "50%",
            height: 120,
          }}
        />
        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              width: Dimensions.get("screen").width / 2 - 10,
              color: textcolor,
            }}
            ellipsizeMode="tail"
            numberOfLines={3}
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
    </TouchableOpacity>
  );
};

export default MiniCard;
