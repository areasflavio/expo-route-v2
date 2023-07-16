import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 44 }}>Home page</Text>

      <Link href="/product/123" asChild>
        <Button title="Go to product" />
      </Link>
    </View>
  );
}
