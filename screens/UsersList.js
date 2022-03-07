import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UserScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateUserScreen")}
        title="Create user"
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri: "data:image/png;base64,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",
              }}
              rounded
              styles={styles.avatar}
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserScreen;