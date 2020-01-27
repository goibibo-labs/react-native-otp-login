import {StyleSheet} from 'react-native';

import colors from '../common/colors';

/**
 * mr - margin right
 * ml - margin left
 * mt - margin top
 * p  - padding
 * px - padding horizontal
 */
export const GenericStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  mr12: {
    marginRight: 12,
  },
  mt12: {
    marginTop: 12,
  },
  mt24: {
    marginTop: 24,
  },
  mr4: {
    marginRight: 4,
  },
  mb12: {
    marginBottom: 12,
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  noBorder: {
    borderWidth: 0,
  },
  whiteBackgroundContainer: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  fill: {
    flex: 1,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  positiveText: {
    color: colors.GREEN,
  },
  negativeText: {
    color: colors.RED,
  },
  centerAlignedText: {
    textAlign: 'center',
  },
  centerAligned: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightedInfoText: {
    fontSize: 12,
    backgroundColor: colors.LIGHT_RED,
    padding: 8,
    borderRadius: 2,
  },
  // use CustomCard when background is non-white else use this style
  card: {
    borderColor: colors.SILVER,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRadius: 5,
    padding: 12,
    backgroundColor: colors.WHITE,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  greyBar: {
    height: 1,
    backgroundColor: colors.SILVER,
  },
  p16: {
    padding: 16,
  },
  navigationHeaderBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.SILVER,
  },
  rightAligned: {
    justifyContent: 'flex-end',
  },
});

export function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0.5 * elevation},
    shadowOpacity: 0.5,
    shadowRadius: 0.8 * elevation,
    borderWidth: 0.1,
  };
}
