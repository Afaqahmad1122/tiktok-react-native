import { FlatList, View } from "react-native";
import React from "react";
import PostListItem from "@/components/postListItem";
import posts from "@assets/data/posts.json";

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem postItem={item} />}
      />
    </View>
  );
};

export default HomeScreen;
