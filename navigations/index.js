import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {EnglishQuiz, Memo, News} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome';
const AppTabNavigator = createMaterialBottomTabNavigator(
  {
    EnglishQuiz: {
      screen: EnglishQuiz,
      navigationOptions: {
        tabBarLabel: '',
        tabBarIcon: ({tintColor}) => (
          <Icon name="book" size={26} color={tintColor} />
        ),
      },
    },

    News: {
      screen: News,
      navigationOptions: {
        tabBarLabel: '',
        tabBarIcon: ({tintColor}) => (
          <Icon name="list" size={26} color={tintColor} />
        ),
      },
    },

    Memo: {
      screen: Memo,
      navigationOptions: {
        tabBarLabel: '',
        tabBarIcon: ({tintColor}) => (
          <Icon name="sticky-note-o" size={26} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'EnglishQuiz',
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#808080',
        marginBottom: '3px',
      },
      indicatorStyle: {
        height: 0,
      },
      showIcon: true,
    },
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: {backgroundColor: '#3BAD87'},
  },
);

export default createAppContainer(AppTabNavigator);
