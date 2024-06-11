import { StyleSheet, View, TextInput ,TouchableOpacity} from "react-native";
import EyeIcon from '../../public/icons/eye.svg';
import ClosedEyeIcon from '../../public/icons/closedEye.svg';
import { useCallback, useState } from "react";

const DaveInput = ({ placeholder, value, onChangeText,Icon, iconSize = 20, isSecure }) => {
  const [isHidden, setIsHidden] = useState(isSecure);

  const toggle = useCallback(() => {
    setIsHidden((prev) => !prev);
  }, []);

  return (
    <View style={styles.viewContainer}>
      <View style={styles.rightSvg}>
        <Icon width={iconSize} height={iconSize} />
      </View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={isSecure && isHidden}
      />
      {isSecure && (
        <TouchableOpacity onPress={toggle} style={styles.leftSvg}>
          {isHidden ? (
            <ClosedEyeIcon width={28} height={28} />
          ) : (
            <EyeIcon width={28} height={28} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
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
