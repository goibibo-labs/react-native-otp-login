/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import RNOtpVerify from 'react-native-otp-verify';

import OtpVerification from './src/components/otp/OtpVerification';

const App = () => {
  RNOtpVerify.getHash()
    .then(hash => {
      console.log('Use this hash to construct otp message', hash);
      console.log('A sample message -');
      console.log(`
        <#> Dear User,
        1091 is your OTP for logging into Ingo-MMT. (Remaining Time: 10 minutes and 0 seconds)
         ${hash[0]}
      `);
    })
    .catch(error => console.log(error));

  return <OtpVerification />;
};

export default App;
