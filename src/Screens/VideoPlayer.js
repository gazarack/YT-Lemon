import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Constant from "expo-constants";
import { WebView } from "react-native-webview";

const VideoPlayer = ({ route }) => {
  const { videoId, title } = route.params;
  return (
    <View
      style={{
        flex: 1,
        marginTop: Constant.statusBarHeight,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 300,
        }}
      >
        {/* <VideoPlayer
          video={{ uri: `https://www.youtube.com/embed/${videoId}` }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{ uri: "https://i.picsum.photos/id/866/1600/900.jpg" }}
        /> */}
        <WebView
          // javaScriptEnabled={true}
          // domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          width: Dimensions.get("screen").width - 50,
          margin: 9,
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <View
        style={{
          borderBottomWidth: 0,
        }}
      />
    </View>
  );
};

export default VideoPlayer;
