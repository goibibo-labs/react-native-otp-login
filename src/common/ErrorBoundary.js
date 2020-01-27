import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {logErrorWithMessage} from '../utilities/helperFunctions';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(/*error*/) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error) {
    logErrorWithMessage(
      error.message,
      `componentDidCatch from ${this.props.screenName}`,
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.messageText}>Something went wrong.</Text>
        </View>
      );
    }

    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageText: {
    textAlign: 'center',
    margin: 8,
  },
});

ErrorBoundary.propTypes = {
  screenName: PropTypes.string.isRequired,
};

export default ErrorBoundary;
