# react-native-otp-verification

An OTP verification component in react native to auto detect OTP from message along with auto filling and auto clearing of OTP text boxes.

### Demo GIF

![OTP Verification Demo GIF](screenshots/otp_verification.gif)

### Features-

1. Auto focusing of TextInput boxes (auto focus to next TextInput box on entering an OTP digit)
2. Timer for Resend OTP link (a resend OTP link which would be visible after 30 secs so we had to show a 30 secs timer)
3. Clearing TextInput boxes in reverse order on pressing Backspace (auto clearing of previous TextInput boxes on pressing of Backspace key)
4. Auto read OTP from SMS (built using [react-native-otp-verify](https://github.com/faizalshap/react-native-otp-verify) which internally use [Google SMS retriever API](https://developers.google.com/identity/sms-retriever/verify))
5. Auto submission of OTP (within 3 secs of OTP detection from SMS)


### Medium Blog

https://tech.goibibo.com/building-otp-verification-component-in-react-native-with-auto-read-from-sms-2a9a400015b0
