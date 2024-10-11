import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import EyeIcon from '../../public/icons/eye.svg';
import ClosedEyeIcon from '../../public/icons/closedEye.svg';
import { useCallback, useState } from 'react';
import React from 'react';
import { SvgProps } from 'react-native-svg';

export type DaveInputProp = {
  placeholder: string;
  value?: string;
  onChangeText?: (str: string) => void;
  Icon: React.FC<SvgProps>;
  iconSize?: number;
  isSecure?: boolean;
};

export const DaveInput = ({ placeholder, value, onChangeText,Icon, iconSize = 20, isSecure }:DaveInputProp) => {
  const [isHidden, setIsHidden] = useState(isSecure);

  const toggleHidden = useCallback(() => {
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleHidden}
          style={styles.leftSvg}
        >
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
const styles = StyleSheet.create({
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 334,
    height: 62,
    marginBottom: 24,
    backgroundColor: '#fff',
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
