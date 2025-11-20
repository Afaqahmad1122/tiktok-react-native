import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useVideoPlayer, VideoView } from "expo-video";
import { Ionicons } from "@expo/vector-icons";

import { Post } from "@/types/types";

export default function PostListItem({ postItem }: { postItem: Post }) {
  const videoSource = postItem.video_url;
  const { nrOfLikes, nrOfComments, nrOfShares, description, user, video_url } =
    postItem;
  const { height } = Dimensions.get("window");

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });
  return (
    <View style={{ height: height - 80 }}>
      <VideoView
        style={{ flex: 1 }}
        player={player}
        contentFit="cover"
        nativeControls={false}
      />

      <View style={styles.interactionBar}>
        <TouchableOpacity
          style={styles.interactionButton}
          onPress={() => console.log("like")}
        >
          <Ionicons name="heart" size={33} color="#fff" />
          <Text style={styles.interactionText}>{nrOfLikes[0].count || 0}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.interactionButton}
          onPress={() => console.log("like")}
        >
          <Ionicons name="chatbox" size={33} color="#fff" />
          <Text style={styles.interactionText}>
            {nrOfComments[0].count || 0}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.interactionButton}
          onPress={() => console.log("like")}
        >
          <Ionicons name="share-social" size={33} color="#fff" />
          <Text style={styles.interactionText}>{nrOfShares[0].count || 0}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.avatar}
          onPress={() => console.log("like")}
        >
          <Text style={styles.avatarText}>
            {user.username.charAt(0).toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.videoInfo}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  interactionBar: {
    position: "absolute",
    right: 20,
    bottom: 20,
    alignItems: "center",
    gap: 20,
  },
  interactionButton: {
    alignItems: "center",
    gap: 5,
  },
  interactionText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 14,
    fontWeight: "bold",
  },

  videoInfo: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 100,
    gap: 5,
  },
  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
  },
});
