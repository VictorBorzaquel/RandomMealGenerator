import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ICategory } from "../../interfaces";

export const Container = styled.View`
  flex: 1;
  background-color: #dddddd;
`;

export const CategoryList = styled(FlatList)`` as unknown as new () => FlatList<ICategory>;

export const Separator = styled.View`
  height: 12px;
`;