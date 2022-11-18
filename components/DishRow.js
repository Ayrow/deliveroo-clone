import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectBasketItems } from '../features/basketSlice';

const DishRow = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const [isPressed, setIsPressed] = useState(false);

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
        onPress={() => setIsPressed(!isPressed)}>
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            <Currency quantity={price} currency='GBP' />
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: '#F3F3F4' }}
              source={{ uri: urlFor(image).url() }}
              className='h-20 w-20 bg-gray-300 p-4'
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View>
          <View className='flex-row items-center space-x-2'>
            <TouchableOpacity>
              <MinusCircleIcon
                // color={items.length > 0 ? '#00CCBB' : 'gray'}
                size={40}
              />
            </TouchableOpacity>

            <Text>{items.basket.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon
                // color={items.length > 0 ? '#00CCBB' : 'gray'}
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
export default DishRow;
