import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import NotificationScreen from '../screens/NotificationScreen';
import FavoriteProduct from '../screens/FavoriteProductScreen';
import ListCategoryScreen from '../screens/ListCategoryScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import ReviewProductScreen from '../screens/ReviewProductScreen';
import FilterScreen from '../screens/FilterScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

const HomeScreenNav = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
                name="Favorite Product"
                component={FavoriteProduct}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                }}
            />
            <Stack.Screen
                name="Product Detail"
                component={ProductDetailScreen}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                }}
            />
            <Stack.Screen
                name='Notification'
                component={NotificationScreen}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                    headerStyle: {
                        borderBottomWidth: 1,
                        borderColor: 'rgb(235, 240, 255)',
                    }
                }}
            />
            <Stack.Screen
                name='List Category'
                component={ListCategoryScreen}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                }}
            />
            <Stack.Screen
                name="Search Results"
                component={SearchResultsScreen}
                options={{
                    headerShown: false,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                }}
            />
            <Stack.Screen
                name="Filter"
                component={FilterScreen}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                    headerStyle: {
                        borderBottomWidth: 1,
                        borderColor: 'rgb(235, 240, 255)',
                    }
                }}
            />
            <Stack.Screen
                name="Results"
                component={ResultScreen}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                    headerStyle: {
                        borderBottomWidth: 1,
                        borderColor: 'rgb(235, 240, 255)',
                    }
                }}
            />
            <Stack.Screen
                name="Review Product"
                component={ReviewProductScreen}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'rgb(34, 50, 99)',
                    },
                    headerStyle: {
                        borderBottomWidth: 1,
                        borderColor: 'rgb(235, 240, 255)',
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeScreenNav;