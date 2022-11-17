import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerShown: false,
      },
      []
    );
  });

  return (
    <ScrollView className='relative'>
      <View>
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className='w-full h-56 bg-gray-300 p-4'
        />
        <TouchableOpacity
          className='absolute top-14 left-5 p-2 bg-gray-100'
          onPress={navigation.goBack()}>
          <ArrowLeftIcon size={20} color='#00CCBB' />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default RestaurantScreen;
