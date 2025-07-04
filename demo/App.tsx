import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserProvider } from "./src/context";
import MainNavigator from "./src/screens";


export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <MainNavigator />
      </UserProvider>
    </SafeAreaProvider>
  )
}