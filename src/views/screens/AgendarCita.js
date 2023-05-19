import React from 'react'
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, ImageBackground,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import fondo from "../../../assets/fondo.jpg";
import Header from './Header';
import Footer from '../layouts/Footer';

const AgendarCita = () => {
  return (

    <SafeAreaView className="flex-1" style={{ backgroundColor: "white" }}>

      <ScrollView className="h-full" showsVerticalScrollIndicator={false}>

        <Header />

        <ImageBackground
          source={fondo}
          resizeMode={"stretch"}
          style={styles.fondoContainer}
        >
          <View style={styles.container}>
            <View style={styles.background}>
              <View style={styles.contentContainer}>

                <View style={styles.formContainer}>
                  <Text style={styles.formTitle}>
                    Agenda aquí tu cita
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nombre completo"
                    la
                  />
                  <TextInput
                    style={styles.input} placeholder="Teléfono" />
                  <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Motivo del mensaje"
                  />

                  <View style={styles.containerButton}>
                    <TouchableOpacity
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        <Footer />

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fondoContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    opacity: 0.9,
  },
  contentContainer: {
    padding: 10,
    marginLeft: -10,
  },
  formContainer: {
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 5,
    width: "100%",
    padding: 10,
    backgroundColor: "lightgray",
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white",
    opacity: 0.6,
  },
  containerText: {
    width: "100%",
  },

  imageContacto1: {
    width: 50,
    height: 65,
    marginLeft: 10,
  },
  imageContacto: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  textContainerContacto: {
    marginLeft: 20,
  },
  titleContacto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5FFDFF",
  },
  paragraphContacto: {
    width: 290,
  },
  containerButton: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#249bad",
    padding: 10,
    borderRadius: 30,
    margin: 10,
    width: 120,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
  },
});

export default AgendarCita;