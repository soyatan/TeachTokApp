import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActivityScreen from './src/ActivityScreen/ActivityScreen';
import BookmarksScreen from './src/BookmarksScreen/BookmarksScreen';
import {
  ActivityIcon,
  BookmarksIcon,
  DiscoverIcon,
  HomeIcon,
  ProfileIcon,
} from './src/Common/Assets/Pngs/index';
import {colors} from './src/Common/Constants/colors';
import {fonts} from './src/Common/Constants/fonts';
import {getHeight} from './src/Common/Helpers/Responsive';
import DiscoverScreen from './src/DiscoverScreen/DiscoverScreen';
import HomeScreen from './src/HomeScreen/HomeScreen';
import ProfileScreen from './src/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();
const renderBottomTabIcons = (
  iconIndex: any,
  isFocused: boolean,
  navigation: any,
  route: any,
) => {
  switch (iconIndex) {
    case 0:
      return (
        <View style={{opacity: 1, alignItems: 'center'}}>
          <Image source={HomeIcon} />
          <Text style={styles.bottomTabText}>Home</Text>
        </View>
      );
    case 1:
      return (
        <View style={{opacity: 0.4, alignItems: 'center'}}>
          <Image source={DiscoverIcon} />
          <Text style={styles.bottomTabText}>Discover</Text>
        </View>
      );
    case 2:
      return (
        <View style={{opacity: 0.4, alignItems: 'center'}}>
          <Image source={ActivityIcon} />
          <Text style={styles.bottomTabText}>ActivityIcon</Text>
        </View>
      );
    case 3:
      return (
        <View style={{opacity: 0.4, alignItems: 'center'}}>
          <Image source={BookmarksIcon} />
          <Text style={styles.bottomTabText}>Bookmarks</Text>
        </View>
      );
    case 4:
      return (
        <View style={{opacity: 0.4, alignItems: 'center'}}>
          <Image source={ProfileIcon} />
          <Text style={styles.bottomTabText}>Profile</Text>
        </View>
      );
    default:
      break;
  }
};

function MyTabBar({state, descriptors, navigation}: any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.black,
        paddingTop: getHeight(7),
        paddingBottom: getHeight(20),
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            disabled
            //onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            {renderBottomTabIcons(index, isFocused, navigation, route)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent={true}
      />
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabText: {
    fontFamily: fonts.regular,
    fontWeight: '500',
    fontSize: getHeight(10),
    color: colors.white,
    lineHeight: getHeight(18),
  },
});
// Customizable Area End
