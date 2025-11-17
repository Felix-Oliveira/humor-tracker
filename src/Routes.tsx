import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { NavigationContainer, RouteProp } from '@react-navigation/native'

import { Home } from './screens/Home'
import { Detail } from './screens/Detail'
import { SetUserName } from './screens/SetUserName'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from './shared/themes/theme'

type TScreenDefinitions = {
  home?: { newName: string } | undefined
  setusername: undefined
  detail: { rate: number }
}

const Stack = createNativeStackNavigator<TScreenDefinitions>()

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
        screenLayout={({ children }) => (
          <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
            {children}
          </SafeAreaView>
        )}
      >
        <Stack.Screen name='home' component={Home} />

        <Stack.Group
          screenOptions={{
            presentation: 'formSheet',
            sheetCornerRadius: 24,
            contentStyle: {
              height: '100%',
            },
          }}
          screenLayout={({ children }) => (
            <SafeAreaView
              style={{
                flex: 1,
                padding: 16,
                backgroundColor: theme.colors.paper,
              }}
              edges={['left', 'right']}
            >
              {children}
            </SafeAreaView>
          )}
        >
          <Stack.Screen
            name='detail'
            component={Detail}
            options={{
              sheetAllowedDetents: [0.8, 0.95],
            }}
          />
          <Stack.Screen
            name='setusername'
            component={SetUserName}
            options={{
              sheetAllowedDetents: [0.6],
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export type TNavigationScreenProps =
  NativeStackNavigationProp<TScreenDefinitions>
export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<
  TScreenDefinitions,
  T
>
