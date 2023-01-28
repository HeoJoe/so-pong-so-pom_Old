// 로그인 페이지
import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import "react-native-gesture-handler";
import colorPalette from '../lib/styles/colorPalette';

const Login = ({ navigation }) => {
  const [isInfoConsent, setInfoConsent] = useState(false);

  return (
    <View style={styles.container}>
      {/* 앱 로고 */}
      <Image
        style={styles.logoImage}
        source={require("../assets/images/so-pong-logo.png")} />

      {/* 로그인 정보 입력창 */}
      <View style={styles.infoView}>
        <TextInput
          style={styles.infoInput}
          placeholder="이메일을 입력해주세요."/>
        <TextInput
          style={styles.infoInput}
          placeholder="비밀번호를 입력해주세요."/>
      </View>

      {/* 로그인 버튼 */}
      <TouchableOpacity
        style={styles.loginBtn}>
        <Text
          style={styles.loginBtnText}>
            로그인
        </Text>
      </TouchableOpacity>

      {/* 아직 회원가입 하지 않은 경우: 회원가입 버튼 */}
      <View
        style={styles.registerBtnSet}>
        <Text
          style={styles.registerBtnText}>
            아직 가입하지 않으셨나요?
          </Text>
        <TouchableOpacity
          onPressOut={() => navigation.navigate('Register')}>
          <Text
            style={styles.registerBtn}>
              회원가입
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // 전체
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'flex-start',
  },
  // 로고 이미지
  logoImage: {
    alignSelf: 'center',
    width: 145,
    height: 46,
    marginTop: 250,
  },
  // 정보 입력창 view
  infoView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  // 정보 입력창
  infoInput: {
    width: 300,
    height: 55,
    marginVertical: 4,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: colorPalette.light_pink,
    fontSize: 16,
    placeholderTextColor: colorPalette.light_grey,
    color: '#000000',
  },
  // 로그인 버튼
  loginBtn: {
    marginTop: 36,
    paddingVertical: 15,
    paddingHorizontal: 125,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colorPalette.light_pink,
    borderRadius: 14,
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 5,
  },
  loginBtnText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // 회원가입 버튼
  registerBtnSet: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  registerBtnText: {
    fontSize: 13,
    color: colorPalette.dark_grey,
    marginRight: 3,
  },
  registerBtn: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Login;