import { createStackNavigator, createAppContainer } from "react-navigation"
import { WhatWeDo, Quotation, ThankYou } from "../views"
import { Burger } from "../utilities/icons";
import { } from "./";

const StackNavigator = createStackNavigator({
    WhatWeDo: WhatWeDo,
    Quotation: Quotation,
    ThankYou: ThankYou
},
    {
        initialRouteName: 'WhatWeDo',
        navigationOptions: {
            title: 'What we do'
        }
    })

const StackContainer = createAppContainer(StackNavigator)

export default StackContainer