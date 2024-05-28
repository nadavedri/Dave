import { StyleSheet, View, TextInput, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

const DaveInput = (props) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.view}>
        <Svg style={styles.rightSvg} width={20} height={20} viewBox="0 0 20 20">
          <Path {...props.imagePath} />
        </Svg>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onchange}
          style={styles.input}
          secureTextEntry
        />
        <Svg style={styles.leftSvg} width={20} height={20} viewBox="0 0 20 20">
          <Path {...props.imagePath} />
        </Svg>
      </View>
    </View>
  );
};

export default DaveInput;
const styles = StyleSheet.create({
  viewContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    height: "10%",
  },
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },

  rightSvg: {
    width: "10%",
    display: 'flex',
  },

  leftSvg: {
    width: "10%",
  },

  input: {
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    // backgroundColor: "red",
    color: "#424242",
    width: "80%",
  },
  rightImage: {
    width: "1rem",
    height: "1rem",
    width: "100%",
  },
  leftImage: {
    width: "1rem",
    height: "1rem",
    width: "100%",
  },
  images: {
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
    width: "100%",
  },
});
