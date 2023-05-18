import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import whatsApp from "../../../assets/whatsapp.png";

const ChatWhatsApp = () => {

  const handleWhatsAppPress = async () => {
    await Linking.openURL("https://whatsApp.com/");
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={handleWhatsAppPress}
    >
      <Image source={whatsApp} resizeMode={'stretch'} style={styles.gradient} />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    borderRadius: 30,
    elevation: 9,
  },
  gradient: {
    borderRadius: 20,
    padding: 20,
    width: 60,
    height: 60,
  },
});

export default ChatWhatsApp;