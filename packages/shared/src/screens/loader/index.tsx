import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContext, NavigationScreenProp, NavigationRoute } from "../../router/navigation";

import style from './style';

function LoaderScreen() {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const navigation: NavigationScreenProp<NavigationRoute> = useContext(NavigationContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  }, []);

  return (
    <View style={style.container}>
      <ActivityIndicator />
      <StatusBar />
    </View>
  );
}

export default LoaderScreen;
