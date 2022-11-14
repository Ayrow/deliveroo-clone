import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='testing' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='testing' />
      <CategoryCard imgUrl='https://links.papareact.com/wru' title='testing' />
    </ScrollView>
  );
};
export default Categories;
