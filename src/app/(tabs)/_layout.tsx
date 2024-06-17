import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="settings" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}