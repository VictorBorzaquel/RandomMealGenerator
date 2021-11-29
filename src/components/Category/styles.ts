import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #dddddd;
  padding: 0px 24px;
`;

export const Content = styled(RectButton)`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  flex-direction: row;
`;

export const Header = styled.View`
  flex: 2;
`;

export const Title = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2
})`
  padding-top: 3px;
  font-size: 14px;
`;

export const Thumb = styled.Image`
  flex: 1;
  margin-left: 12px;
`;