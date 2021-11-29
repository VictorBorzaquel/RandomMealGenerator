import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fff;
  padding: 0 12px;
`;

export const GoBackButton = styled(BorderlessButton)`
  margin-right: 12px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
  adjustsFontSizeToFit: true
})`
  font-size: 20px;
  font-weight: bold;
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Thumb = styled.Image`
  width: 100%;
  height: 250px;
`;

export const AreaContent = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
`;

export const Area = styled.Text`
  /* flex: 1; */
  padding-right: 40px;
`;

export const AreaDescription = styled.Text`
  font-size: 16px;
  
`;

export const AreaTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Card = styled.View`
  padding: 20px;
  background-color: #fff;
  margin-bottom: 12px;
`;

export const Youtube = styled.View`
  padding-bottom: 10px;
`;

export const ContentTitle = styled.Text`
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const Instructions = styled.Text`
  line-height: 20px;
  font-size: 16px;
`;

export const RecipeItem = styled.View<{ color: string }>`
  flex-direction: row;
  align-items: flex-end;
  padding: 2px 5px;
  background-color: ${({ color }) => color};
`;

export const Measure = styled.Text`
  font-size: 16px;
  font-weight: bold;
  width: 100px;
`;

export const Ingredient = styled.Text`
  font-size: 20px;
  padding-right: 10px;
`;
