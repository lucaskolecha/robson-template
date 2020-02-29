import React from 'react'
import { enableScreens } from 'react-native-screens'
enableScreens()
import { NavigationContainer } from '@react-navigation/native'
import { createSwitchNavigator } from '@react-navigation/compat'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from './app-stack/home/index'
import { Configuration } from './app-stack/configuration/index'

const Stack = createStackNavigator()
const Stacks = createSwitchNavigator({
    //Auth: null,
    App: () => (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Configuration" component={Configuration} />
        </Stack.Navigator>
    ),
})

export const App = () => {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    )
}