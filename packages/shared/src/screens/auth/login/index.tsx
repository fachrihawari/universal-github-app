import React, {  useState, useContext } from 'react';
import { Alert,  TextInput, View } from 'react-native';

import { NavigationContext, NavigationScreenProp, NavigationRoute } from "../../../router/navigation";
import Button from '../../../components/Button';
import style from './style';

function LoginScreen() {
  const navigation: NavigationScreenProp<NavigationRoute> = useContext(NavigationContext)
  const [username, setUsername] = useState<string>('');

  function handleContinue() {
    if (!username.trim()) {
      return Alert.alert('Username required!');
    }

    navigation.navigate('Password', {
      username
    });
  }

  function handleUsernameChange(value: string) {
    setUsername(value);
  }

  return (
    <View style={style.container}>
      <TextInput
        testID="input-username"
        placeholder="Username"
        autoCapitalize="none"
        autoFocus={true}
        style={style.usernameInput}
        onChangeText={handleUsernameChange}
        returnKeyType="done"
        value={username}
        onSubmitEditing={handleContinue}
      />
      <Button
        testID="button-continue"
        wrapperStyle={style.continueButton}
        onPress={handleContinue}
      >
        Continue
      </Button>
    </View>
  );
}

LoginScreen.navigationOptions = {
  title: 'Github Login'
};

export default LoginScreen;
