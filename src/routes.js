import { createStackNavigator, createAppNavigation } from 'react-navigation';

import Main from './pages/main';

export default createAppNavigation(
    createStackNavigator({
        Main
    })
);