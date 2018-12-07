
import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { Home, Logo, } from "../views"
import { DrawerNavigator } from "./index";
const MainNavigator = createSwitchNavigator({
    Logo: Logo,
    Home: Home,
    Drawer: DrawerNavigator
    },
    {
        initialRouteName: 'Logo'
    })
  
const AppContainer = createAppContainer(MainNavigator)

export default AppContainer