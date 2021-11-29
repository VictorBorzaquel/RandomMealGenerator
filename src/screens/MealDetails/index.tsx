import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { IMeal, IMealDb, IRecipe } from '../../interfaces';
import { RootNavigationProps, RootRouteProps } from '../../routes';
import { api } from '../../service/api';
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

import {
  Area,
  AreaContent,
  AreaDescription,
  AreaTitle,
  Card,
  Container,
  Content,
  ContentTitle,
  GoBackButton,
  Header,
  Ingredient,
  Instructions,
  Measure,
  RecipeItem,
  Thumb,
  Title,
  Youtube,
} from './styles';
import { ActivityIndicator, Alert, StyleSheet, useWindowDimensions } from 'react-native';

interface IMeals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface ICategoryMealResponse {
  meals: IMeals[]
}

interface IMealResponse {
  meals: IMealDb[];
}

export function MealDetails() {
  const [meal, setMeal] = useState({} as IMeal)
  const [loading, setLoading] = useState(true)

  const route = useRoute<RootRouteProps<'MealDetails'>>()
  const navigation = useNavigation<RootNavigationProps<'MealDetails'>>()

  const { width } = useWindowDimensions()

  function handleGoBack() {
    navigation.goBack()
  }

  useEffect(() => {
    const ac = new AbortController();
    let isMounted = true;

    async function getCategories() {
      try {
        const response = await api.get<ICategoryMealResponse>('/filter.php', {
          params: {
            c: route.params.category
          }
        })
  
        if (isMounted) {
          const index = Math.floor(Math.random() * response.data.meals.length)
          const randomMeal = response.data.meals[index]
  
          const { data } = await api.get<IMealResponse>('/search.php', {
            params: {
              s: randomMeal.strMeal
            }
          })
  
          const meal = data.meals[0]
  
          let strRecipe = [] as IRecipe[]
          for (let step = 1; step <= 20; step++) {
            //@ts-ignore
            const measure = meal[`strMeasure${step}`] || ''
            //@ts-ignore
            const ingredient = meal[`strIngredient${step}`] || ''
  
            if (ingredient !== '') strRecipe.push({ measure, ingredient, step })
          }
  
          const updatedMeal = {
            strInstructions: meal.strInstructions,
            strCategory: meal.strCategory,
            strArea: meal.strArea,
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb,
            strYoutube: meal.strYoutube,
            strRecipe,
          }
          setMeal(updatedMeal)
          setLoading(false)
        }
      } catch (error) {
        Alert.alert('Meal not found!')
      }
    }
    getCategories()

    return () => {
      isMounted = false
      ac.abort()
    }
  }, [])

  return (
    <Container>
      <Header style={[styles.header, styles.shadow]}>
        <GoBackButton onPress={handleGoBack}>
          <Feather name="chevron-left" size={30} />
        </GoBackButton>
        {loading
          ? <ActivityIndicator color="black" size="small" /> :
          <Title>{meal.strMeal}</Title>
        }
      </Header>
      {loading
        ? <Loader />
        : (
          <Content>
            <Thumb
              source={{ uri: meal.strMealThumb }}
            />

            <AreaContent>
              <Area>
                <AreaDescription>Area </AreaDescription>
                <AreaTitle>{meal.strArea}</AreaTitle>
              </Area>
              <Area>
                <AreaDescription>Category </AreaDescription>
                <AreaTitle>{meal.strCategory}</AreaTitle>
              </Area>
            </AreaContent>

            <Youtube>
              <WebView
                source={{ uri: meal.strYoutube.replace('watch?v=', 'embed/') }}
                style={{ width, height: width / 1.7 }}
                allowsFullscreenVideo
                javaScriptEnabled
                domStorageEnabled
              />
            </Youtube>

            <Card>
              <ContentTitle>Recipe</ContentTitle>
              {meal.strRecipe.map((recipe, index) => (
                <RecipeItem key={recipe.step} color={index % 2 === 0 ? '#fff' : '#eee'}>
                  <Measure>{recipe.measure}</Measure>
                  <Ingredient>{recipe.ingredient}</Ingredient>
                </RecipeItem>
              ))}
            </Card>

            <Card>
              <ContentTitle>Instructions</ContentTitle>
              <Instructions>{meal.strInstructions}</Instructions>
            </Card>
          </Content>
        )
      }
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 5,
  }
})