# react-native-otp-verification

An OTP verification component in react native to auto detect OTP from message along with auto filling and auto clearing of OTP text boxes.

### Demo GIF

![OTP Verification Demo GIF](screenshots/otp_verification.gif)

### Features-

1. Auto focus to next TextInput box on entering an OTP digit
2. Auto clearing of previous TextInput boxes on continuous pressing of Backspace
3. A 30 secs timer to resend OTP
4. Auto detection of OTP from SMS (built using [react-native-otp-verify](https://github.com/faizalshap/react-native-otp-verify) which internally use [Google SMS retriever API](https://developers.google.com/identity/sms-retriever/verify))
5. Auto submission of OTP within 3 secs on its successful detection from SMS
