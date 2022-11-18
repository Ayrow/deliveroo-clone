import { View, Text, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import Currency from 'react-currency-formatter';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity>
        <Text>{items.length}</Text>
        <Text>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>
          <Currency quantity={basketTotal} currency='GBP' />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default BasketIcon;
