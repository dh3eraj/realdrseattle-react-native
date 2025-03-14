import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/PostSlice";
import { RootState, AppDispatch } from "../redux/Store";

const PostList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>{error}</Text>
        <Button title="Retry" onPress={() => dispatch(fetchPosts())} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={async () => {
          dispatch(fetchPosts());
        }}
      >
        <Text style={{ color: "white" }}>Get</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  floatingActionButton: {
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "red",
    borderRadius: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  body: {
    fontSize: 12,
    color: "f3f3f3",
    textAlign: "left",
  },
});
