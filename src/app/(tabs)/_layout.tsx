import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: (props) => (
            <MaterialIcons name="home" size={props.size} color={props.color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: (props) => (
            <MaterialIcons
              name="person"
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: (props) => (
            <MaterialIcons
              name="settings"
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
