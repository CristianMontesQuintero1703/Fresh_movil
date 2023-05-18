import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import CheckBox from "react-native-check-box";
import { SafeAreaView } from "react-native-safe-area-context";
import fondo from "../../../assets/fondo.jpg";
import direccion from "../../../assets/icono-dirección.png";
import llamada from "../../../assets/icono-llamada.png";
import email from "../../../assets/icono-email.png";
import Header from "./Header";
import Footer from "../layouts/Footer";

const ContactoScreen = () => {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView className="flex-1 " style={{ backgroundColor: "white" }}>
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
                <Text style={styles.title}>Contáctanos</Text>
                <Text style={styles.text}>
                  Te brindamos nuestros servicios. Ponte en contacto con
                  nosotros para obtener una sonrisa más saludable y hermosa.
                </Text>

                <View style={styles.containerDatos}>
                  <View style={styles.containerContacto}>
                    <Image source={direccion} style={styles.imageContacto1} />
                    <View style={styles.textContainerContacto}>
                      <Text style={styles.titleContacto}>Dirección</Text>
                      <Text style={styles.paragraphContacto}>
                        Sede Norte calle 6 N #16A-54 Edificio torre Valparaiso.
                        Local 2 profesionales.
                      </Text>
                    </View>
                  </View>

                  <View style={styles.containerContacto}>
                    <Image source={llamada} style={styles.imageContacto} />
                    <View style={styles.textContainerContacto}>
                      <Text style={styles.titleContacto}>Teléfono</Text>
                      <Text style={styles.paragraphContacto}>3103594986</Text>
                    </View>
                  </View>

                  <View style={styles.containerContacto}>
                    <Image source={email} style={styles.imageContacto} />
                    <View style={styles.textContainerContacto}>
                      <Text style={styles.titleContacto}>
                        Correo electrónico
                      </Text>
                      <Text style={styles.paragraphContacto}>
                        freshsmilecmills@gmail.com
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.formContainer}>
                  <Text style={styles.formTitle}>
                    Te brindamos los mejores servicios
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nombre completo"
                  />
                  <TextInput style={styles.input} placeholder="Teléfono" />
                  <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Motivo del mensaje"
                  />
                  <CheckBox isChecked={isChecked} onClick={() => setIsChecked(!isChecked)}
                    rightText="Acepto los términos y condiciones"
                    rightTextStyle={{ color: 'black', fontWeight: 'bold', marginLeft: 2 }} checkedCheckBoxColor="blue" />

                  <View style={styles.containerButton}>
                    <TouchableOpacity
                      style={styles.button}
                    // onPress={handleSubmit}
                    >
                      <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.paragraph}>
                    Si desea solicitar más información, por favor contáctenos.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    marginLeft: 10,
  },
  text: {
    marginBottom: 10,
    color: "white",
    marginLeft: 10,
    marginRight: 30,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  imageItem: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  imageTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  imageText: {
    marginBottom: 5,
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
  paragraph: {
    fontSize: 15,
    textAlign: "center",
  },
  containerContacto: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    margin: 5,
  },
  containerText: {
    // marginLeft: 10,
    width: "100%",
  },
  containerDatos: {
    backgroundColor: "lightwhite",
    marginLeft: 5,
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

export default ContactoScreen;