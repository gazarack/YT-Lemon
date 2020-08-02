import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCards";
import Constant from "expo-constants";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";

//www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=songs&type=video&key=[AIzaSyA3CQe01Fx4bMI2sHlAST7Z8tATSQkKk1Q]

const SearchScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const headercolor = colors.headerColor;
  const iconcolor = colors.iconColor;

  const [value, setValue] = useState("");
  //const [minicardData, setMiniCard] = useState([]);
  const dispatch = useDispatch();
  const minicardData = useSelector((state) => {
    return state.cardData;
  });
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyA3CQe01Fx4bMI2sHlAST7Z8tATSQkKk1Q`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLoading(false);
        dispatch({ type: "add", payload: data.items });
        //setMiniCard(data.items);
      });
  };
  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        flex: 1,
      }}
    >
      <View
        style={{
          height: 60,
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 4,
          backgroundColor: headercolor,
          // For iOS
          shadowOffset: { width: 10, height: 10 },
          shadowColor: "black",
          shadowOpacity: 1.0,
        }}
      >
        <Ionicons
          name="md-arrow-round-back"
          size={36}
          color={iconcolor}
          style={{
            margin: 10,
          }}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          value={value}
          onChangeText={(Text) => setValue(Text)}
          style={{
            marginTop: 10,
            fontSize: 20,
            width: "70%",
            height: "70%",
            backgroundColor: "#D3D3D3",
          }}
        />
        <FontAwesome
          name="search"
          size={38}
          color={iconcolor}
          style={{
            margin: 4,
          }}
          onPress={() => fetchData()}
        />
      </View>
      {/* <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView> */}
      {loading ? (
        <ActivityIndicator
          size="large"
          colour="red"
          style={{
            marginTop: 20,
          }}
        />
      ) : null}
      <FlatList
        data={minicardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default SearchScreen;
