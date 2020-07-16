import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView28995Navigator from '../features/CalendarView28995/navigator';
import BlankScreen38994Navigator from '../features/BlankScreen38994/navigator';
import BlankScreen48993Navigator from '../features/BlankScreen48993/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView28995: { screen: CalendarView28995Navigator },
BlankScreen38994: { screen: BlankScreen38994Navigator },
BlankScreen48993: { screen: BlankScreen48993Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
