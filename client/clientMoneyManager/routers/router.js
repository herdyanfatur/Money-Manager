import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './RootNavigation';
import {Left, Icon} from 'native-base';
import * as RootNavigation from './RootNavigation';

import FirstPage from './pages/FirstPage';
import Store from './pages/Store';
import StoreProduct from './pages/StoreProduct';

const Stack = createStackNavigator();

const Root = (){
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen
            name="FirstPage"
            component={FirstPage}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#6B7D67',
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Store"
            component={Store}
            options={{
              title: 'User Store',
              headerStyle: {
                backgroundColor: '#6B7D67',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="StoreProduct"
            component={StoreProduct}
            options={{
              title: "Store's Product",
              headerStyle: {
                backgroundColor: '#6B7D67',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Router;
