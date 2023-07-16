import { useSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function Product() {
  const { id } = useSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 44 }}>Product {id} page</Text>
    </View>
  );
}
