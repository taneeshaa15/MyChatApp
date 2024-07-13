import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { TwilioVideo } from 'twilio-video';
import { RTCView } from 'react-native-webrtc';

const VideoCallScreen = () => {
  const [isVideoCall, setIsVideoCall] = useState(false);

  const startVideoCall = () => {
    // Initialize and start Twilio video call
    setIsVideoCall(true);
  };

  const endVideoCall = () => {
    // End Twilio video call
    setIsVideoCall(false);
  };

  return (
    <View style={styles.container}>
      {isVideoCall ? (
        <RTCView streamURL={TwilioVideo.localStream.toURL()} style={styles.video} />
      ) : (
        <Button title="Start Video Call" onPress={startVideoCall} />
      )}
      {isVideoCall && (
        <Button title="End Video Call" onPress={endVideoCall} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoCallScreen;
