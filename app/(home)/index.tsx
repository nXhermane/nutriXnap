import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler,GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

export default function ContinuousPanGestureHandlerReanimated() {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = event.translationX + ctx.startX;
      y.value = event.translationY + ctx.startY;
    },
  });

  const reset = () => {
    x.value = withSpring(0);
    y.value = withSpring(0);
  };

  const _style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.box, _style]}>
          <Text style={styles.txt}>Move</Text>
        </Animated.View>
      </PanGestureHandler>
      <Button title="reset" onPress={reset} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: { color: '#fff' },
});
