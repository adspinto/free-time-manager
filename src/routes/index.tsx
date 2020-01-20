import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from '../screens/auth'
import InicioScreen from '../screens/inicio'



const Routes = createStackNavigator({
    Auth: {
        screen: AuthScreen,
        navigationOptions: ({}) => ({
            headerShown: false
        })
    },
    Inicio: InicioScreen
})

export default createAppContainer(Routes);