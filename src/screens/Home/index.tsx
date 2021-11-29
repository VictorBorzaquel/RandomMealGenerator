import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Category } from '../../components/Category';
import { Loader } from '../../components/Loader';
import { ICategory } from '../../interfaces';
import { RootNavigationProps } from '../../routes';
import { api } from '../../service/api';

import {
  CategoryList,
  Container,
  Separator
} from './styles';

export function Home() {
  const [categories, setCategories] = useState([] as ICategory[])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation<RootNavigationProps<'Home'>>()

  function handleSelectCategory(category: string) {
    navigation.navigate('MealDetails', { category })
  }

  useEffect(() => {
    const ac = new AbortController();
    let isMounted = true;

    async function getCategories() {
      try {
        const response = await api.get('/categories.php')

        if (isMounted) {
          setCategories(response.data.categories)
          setLoading(false)
        }
      } catch (error) {
        Alert.alert('Categories not found!')
      }
    }
    getCategories()

    return () => {
      isMounted = false
      ac.abort()
    }
  }, [])

  if (loading) return <Loader />
  return (
    <Container>
      <CategoryList
        data={categories}
        keyExtractor={item => item.idCategory}
        renderItem={({ item }) => <Category data={item} goTo={handleSelectCategory} />}
        ItemSeparatorComponent={() => <Separator />}
        contentContainerStyle={{ paddingVertical: 24 }}
      />
    </Container>
  );
}
