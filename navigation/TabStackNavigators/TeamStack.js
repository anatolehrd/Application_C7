//IMPORTS
import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import TeamScreen from '../../screens/TeamScreen';
import PdfScreen from '../../screens/PdfScreen';

const Stack = createNativeStackNavigator();

function TeamStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name="TeamHome" component={TeamScreen} />
                <Stack.Screen name="PdfScreen" component={PdfScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

/*
// Constants

const screens = {
  TeamHome: TeamScreen,
  PdfScreen :PdfScreen,
}

// TeamStack

const TeamStack = createStackNavigator(
  screens, 
  { defaultNavigationOptions: {
    header: null,
  }
  }
);
*/

export default TeamStack;