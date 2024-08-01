/**
 * Esta estilização foi feito utilizando a biblioteca styled-components
 */

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 8px;
  padding-top: 20px;
  background-color: #F2E3D5;
`

export const Title = styled.Text`
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 32px;
  color: #012E40;
`

export const TextInput = styled.Text`
  font-size: 14px;
  color: #012E40;
`

export const Input = styled.TextInput`
  width: 80%;
  padding: 8px 10px;
  border-width: 1px;
  border-color: #012E40;
  border-radius: 4px
`

export const Button = styled.TouchableOpacity`
  width: 200px;
  padding: 12px 0;
  align-items: center;
  background-color: #3CA6A6;
  border-radius: 8px;
  margin-top: 16px;
`

export const TextButton = styled.Text`
  font-size: 20px;
  color: #fff;
`

export const TextResult = styled.Text`
  margin-top: 16px;
  font-size: 20px;
  color: #012E40;
  font-weight: 600;
`