import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Video } from "../../models/video";

type VideoListItemProps = {
  video: Video;
};

const VideoListItem = (props: VideoListItemProps) => {
  const { video } = props;

  const navigation = useNavigation();

  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;

  let viewsString = video.views.toString();

  const formatViews = (n:number) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "mil";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "mi";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

  const openVideoPage = () => {
    navigation.navigate("VideoScreen", { id: video.id });
  };

  return (
    <Pressable onPress={openVideoPage} style={styles.videoCard}>
      {/* Tumbnail */}
      <View>
        <Image style={styles.thumbnail} source={{ uri: video.thumbnail }} />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
          </Text>
        </View>
      </View>

      {/* Title row */}
      <View style={styles.titleRow}>
        {/* Avatar */}
        <Image style={styles.avatar} source={{ uri: video.User?.image }} />

        {/* Middle container: Title, subtitle, etc. */}
        <View style={styles.midleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.User?.name || "No name"} {formatViews(video.views)} {video.createdAt}
          </Text>
        </View>

        {/* Icon */}
        <Entypo name="dots-three-vertical" size={16} color="white" />
      </View>
    </Pressable>
  );
};

export default VideoListItem;
