
import Layout from "./src/Layout"
import React from "react"
import { ChakraProvider } from "@chakra-ui/react";
import { newTheme } from "./src/components/constants/chakraStyles"
import { Provider } from 'react-redux'
import configureStore from './services/redux/configureStore';
let store=configureStore()
////////////////////////////////////////////////////////////////////////////////////////////
// Logs when the client route changes
// export const onRouteUpdate = ({ location, prevLocation }) => {
//     console.log("new pathname", location.pathname)
//     console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }
////////////////////////////////////////////////////////////////////////////////////////////

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    const nonLayoutComponents = ["/Login"]
    if (nonLayoutComponents.includes(props.location.pathname)) {
        return element
    } else return <Layout {...props}>{element}</Layout>
}
//using chakra css
export const wrapRootElement = ({ element }) => {
    return (
        <ChakraProvider theme={newTheme}>
            <Provider store={store}>
            {element}
        </Provider>
        </ChakraProvider>
    )
}
