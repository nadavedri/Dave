import { StyleSheet, View, TextInput, Image } from "react-native";
import EyeIcon from '../../public/icons/eye.svg'

const DaveInput = ({ placeholder, value, onChangeText,Icon, isSecure }) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.rightSvg}>
        <Icon width={20} height={20} />
      </View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={isSecure}
      />
      {isSecure && (
        <View style={styles.leftSvg}>
          <EyeIcon width={25} height={25} />
        </View>
      )}
    </View>
  )
};

export default DaveInput;
const styles = StyleSheet.create({
  viewContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minWidth: 350,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  rightSvg: {
    marginLeft: 12,
    marginRight: 8,
  },

  input: {
    width: 250,
  },

  leftSvg: {
    marginLeft: 8,
    marginTop: 4,
  },
});
