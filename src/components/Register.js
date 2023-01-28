// 회원 가입 페이지
import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import "react-native-gesture-handler";
import colorPalette from '../lib/styles/colorPalette';

const Register = ({ navigation }) => {
  const [isInfoConsent, setInfoConsent] = useState(false);

  return (
    <View style={styles.container}>
      {/* 앱 로고 */}
      <Image
        style={styles.logoImage}
        source={require("../assets/images/so-pong-logo.png")} />

      {/* 회원 가입 정보 입력창 */}
      <View style={styles.infoView}>
        <TextInput
          style={styles.infoInput}
          placeholder="닉네임을 입력해주세요."/>
        <TextInput
          style={styles.infoInput}
          placeholder="이메일을 입력해주세요."/>
        <TextInput
          style={styles.infoInput}
          placeholder="아이디를 입력해주세요."/>
        <TextInput
          style={styles.infoInput}
          placeholder="비밀번호를 입력해주세요."/>
        <TextInput
          style={styles.infoInput}
          placeholder="비밀번호를 한 번 더 입력해주세요."/>
      </View>

      {/* 개인정보 제공 동의 */}
      <View style={styles.infoConsentView}>
        <BouncyCheckbox
          size={20}
          fillColor={colorPalette.light_pink}
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: colorPalette.light_pink }}
          style={styles.infoConsentCheckbox}
        />
        <Text
          style={styles.infoConsentText}>
          개인정보 제공에 동의합니다.
        </Text>
      </View>

      {/* 회원가입 버튼 */}
      <TouchableOpacity
        style={styles.registerBtn}>
        <Text
          style={styles.registerBtnText}>
            회원가입
        </Text>
      </TouchableOpacity>

      {/* 이미 회원가입 한 경우: 로그인 버튼 */}
      <View
        style={styles.loginBtnSet}>
        <Text
          style={styles.loginBtnText}>
            이미 회원가입하셨나요?
        </Text>
        <TouchableOpacity
          onPressOut={() => navigation.navigate('Login')}>
          <Text
            style={styles.loginBtn}>
              로그인
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
    marginTop: 155,
  },
  // 정보 입력창 view
  infoView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 37,
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
  // 정보 제공 동의 View
  infoConsentView: {
    height: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  // 정보 제공 동의 체크박스
  infoConsentCheckbox: {
    alignSelf: 'flex-start',
    marginLeft: 70,
  },
  // 정보 제공 동의 문구
  infoConsentText: {
    fontSize: 14,
    marginLeft: -7,
  },
  // 회원가입 버튼
  registerBtn: {
    marginTop: 14,
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
  registerBtnText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // 로그인 버튼
  loginBtnSet: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  loginBtnText: {
    fontSize: 13,
    color: colorPalette.dark_grey,
    marginRight: 3,
  },
  loginBtn: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Register;