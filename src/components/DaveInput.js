import { StyleSheet, View, TextInput, Image } from "react-native";
import React from "react";
import { mailSvgImage } from "../../public/images/svgImages";

const DaveInput = (props) => {
  return (
    <View style={styles.view}>
      <Image source={mailSvgImage} style={[styles.rightImage, styles.images]} />
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onchange}
        style={styles.input}
        secureTextEntry
      />
      <Image source={mailSvgImage} style={[styles.leftImage, styles.images]} />
    </View>
  );
};

export default DaveInput;
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#0BC1E7",
    width: "500",
  },

  input: {
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    color: "#424242",
  },
  rightImage: {
    width: "1rem",
    height: "1rem",
  },
  leftImage: {
    width: "1rem",
    height: "1rem",
  },
  images: {
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
  },
});
