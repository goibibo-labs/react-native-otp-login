import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
  ViewPropTypes,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  backIcon,
  closeIcon,
  menuIcon,
  crossIcon,
  searchIcon,
  whiteMenuIcon,
} from '../images';
import colors from '../common/colors';
import {CustomText, CustomImageButton, CustomTextInput} from './';
import {GenericStyles} from '../styles/GenericStyles';

const getLeftIconProperties = function(iconType = 'menu', showWhiteIcon) {
  const os = Platform.OS;
  const properties = {
    image: '',
    imageStyle: {},
    imageContainerStyle: {},
  };
  switch (iconType) {
    case 'menu': {
      if (showWhiteIcon) {
        properties.image = whiteMenuIcon;
        properties.imageStyle.height = 20;
        properties.imageStyle.width = 30;
      } else {
        properties.image = menuIcon;
        properties.imageStyle.height = 24;
        properties.imageStyle.width = 24;
      }
      break;
    }
    case 'back': {
      properties.image = backIcon;
      properties.imageStyle.height = 18;
      properties.imageStyle.width = 10.5;
      if (os !== 'web') {
        properties.imageContainerStyle.marginTop = 3;
      }
      break;
    }
    case 'close': {
      properties.image = closeIcon;
      properties.imageStyle.height = 15;
      properties.imageStyle.width = 15;
      if (os !== 'web') {
        properties.imageContainerStyle.marginTop = 5;
      }
      break;
    }
  }
  return properties;
};

const CenterComponent = props => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const onSearchInputChangeText = value => {
    setSearchInputValue(value);
  };

  const onCrossButtonPress = () => {
    setSearchInputValue('');
  };

  if (props.searchInput) {
    const searchInput = props.searchInput;
    return (
      <CustomTextInput
        LeftComponent={<Image source={searchIcon} style={styles.searchIcon} />}
        RightComponent={
          <CustomImageButton
            source={crossIcon}
            style={styles.crossButton}
            imageStyle={styles.crossIcon}
            onPress={onCrossButtonPress}
          />
        }
        placeholder={searchInput.placeholder}
        onSubmitEditing={searchInput.onSubmit}
        value={searchInputValue}
        onChangeText={onSearchInputChangeText}
        containerStyle={GenericStyles.fill}
      />
    );
  }
  return (
    <View style={styles.row}>
      {props.title ? (
        <CustomText style={[styles.title, props.textStyle]}>
          {props.title}
        </CustomText>
      ) : null}
      <View style={styles.middle} />
    </View>
  );
};

const NavigationHeader = function(props) {
  const leftIconProperties = getLeftIconProperties(
    props.leftIconType,
    props.showWhiteIcon,
  );

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.row}>
        <View style={styles.left}>
          <TouchableOpacity
            onPress={props.leftIconAction}
            style={[styles.leftButton, leftIconProperties.imageContainerStyle]}>
            <Image
              source={leftIconProperties.image}
              style={leftIconProperties.imageStyle}
            />
          </TouchableOpacity>
        </View>
        <CenterComponent
          textStyle={props.textStyle}
          searchInput={props.searchInput}
          title={props.title}
        />
        <View style={styles.right}>
          <props.RightComponent />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    height: 56,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
  },
  leftButton: {
    paddingRight: 8,
  },
  title: {
    color: '#0b0b0b',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    marginLeft: 16,
  },
  middle: {
    flex: 1,
  },
  searchIcon: {
    width: 15,
    height: 16.8,
    marginRight: 8,
  },
  searchInput: {
    padding: 0,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    borderColor: colors.WHITE_GREY,
    borderWidth: 1,
    borderRadius: 4,
    margin: 10,
    padding: 8,
  },
  crossIcon: {
    width: 15,
    height: 15,
  },
  crossButton: {
    padding: 0,
    width: 15,
  },
});

NavigationHeader.defaultProps = {
  RightComponent: () => <></>,
};

NavigationHeader.propTypes = {
  leftIconAction: PropTypes.func.isRequired,
  title: PropTypes.string,
  textStyle: Text.propTypes.style,
  searchInput: PropTypes.shape({
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
  }),
  leftIconType: PropTypes.oneOf(['menu', 'back', 'close']),
  RightComponent: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  showWhiteIcon: PropTypes.bool,
};

export default NavigationHeader;
