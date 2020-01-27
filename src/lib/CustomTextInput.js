import React from 'react';
import {StyleSheet, View, ViewPropTypes, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../common/colors';
import {GenericStyles} from '../styles/GenericStyles';

const CustomTextInput = function(props) {
  const {
    containerStyle,
    style,
    LeftComponent,
    RightComponent,
    refCallback,
    ...remainingProps
  } = props;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {LeftComponent}
      <TextInput
        {...remainingProps}
        style={[styles.textInputStyle, GenericStyles.fill, style]}
        ref={refCallback}
      />
      {RightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    borderColor: colors.WHITE_GREY,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  textInputStyle: {
    padding: 0,
  },
});

CustomTextInput.defaultProps = {
  LeftComponent: <></>,
  RightComponent: <></>,
};

CustomTextInput.propTypes = {
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  LeftComponent: PropTypes.object,
  RightComponent: PropTypes.object,
  refCallback: PropTypes.func,
};

export default CustomTextInput;
