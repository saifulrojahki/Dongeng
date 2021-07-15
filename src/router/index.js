import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from '../component';
import {
  Home,
  RequestDongeng,
  HelpDongeng,
  SplashScreen,
  DetailDongeng1,
  DetailDongeng2,
  DetailDongeng3,
  SuccessRequest,
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// button navigation
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Request" component={RequestDongeng} />
      <Tab.Screen name="Help" component={HelpDongeng} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailDongeng1"
        component={DetailDongeng1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailDongeng2"
        component={DetailDongeng2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailDongeng3"
        component={DetailDongeng3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessRequest"
        component={SuccessRequest}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
