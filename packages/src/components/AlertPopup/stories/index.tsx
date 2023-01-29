import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { createPopup } from 'react-native-global-components';
import AlertPopup from '..';

export default {
  title: 'AlertPopup',
};

const BasicStory = (): ReactElement => {
  const { Portal, show, clear } = useRef(createPopup(AlertPopup)).current;

  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>
          {selected
            ? `selected text from alert popup is ${selected}`
            : `please open alert`}
        </Text>

        <Button
          title="Open Alert Vertical"
          onPress={() => {
            show({
              title: `Hi I'm Vertical Popup`,
              message: 'select how do you feel today',
              vertical: true,
              options: [
                { text: 'Good 😝', onPress: setSelected },
                {
                  text: 'Not Okay 😢',
                  color: 'green',
                  onPress: setSelected,
                },
                { text: `Don't ask me 😡`, color: 'red', onPress: setSelected },
              ],
            });
          }}
        />

        <Button
          title="Open Alert Horizontal"
          onPress={() => {
            show({
              title: `Hi I'm Horizontal Popup`,
              message: 'select how do you feel today',
              options: [
                { text: 'Good 😝', onPress: setSelected },
                {
                  text: 'Not Okay 😢',
                  color: 'green',
                  onPress: setSelected,
                },
                { text: `Don't ask me 😡`, color: 'red', onPress: setSelected },
              ],
            });
          }}
        />
      </View>
      <Portal />
    </>
  );
};

/**
 * Below are stories for app
 */
storiesOf('AlertPopup', module).add('IOS Style Alert', () => <BasicStory />);
