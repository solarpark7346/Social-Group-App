import {Dimensions} from 'react-native';
import CustomSidebarMenu from './CustomSidebarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

const DrawerNavigator = createDrawerNavigator(
    {

    },
    
    {
        contentComponent: CustomSidebarMenu,
        drawerWidth: Dimensions.get('window').width - 150,
    },
);

export default createAppContainer(DrawerNavigator);