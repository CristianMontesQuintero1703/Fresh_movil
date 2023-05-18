import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import armenia from "../../../assets/armenia.jpg";
import tebaida from "../../../assets/tebaida.png";
import circasia from "../../../assets/circasia.jpg";
import Header from "./Header";
import Footer from "../layouts/Footer";
import ChatWhatsApp from "../layouts/ChatWhatsApp";

const SedesScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 " style={{ backgroundColor: "white" }}>
      <Header />
      <ScrollView className="h-full" showsVerticalScrollIndicator={false}>

        <View style={styles.containerSedes}>
          <Text>
            <Text style={styles.tituloSedes}>Nuestras sedes</Text>
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Image
              source={armenia}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.titlePrincipal}>Sede en Armenia</Text>
              <Text style={styles.title}>Calle 6 #16A/54 Torre Valparaiso</Text>
              <Text style={styles.title}>Lunes a Viernes 9 AM a 6 PM</Text>
              <Text style={styles.title}>3103594986</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Agendar tu cita</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.titlePrincipal}>Sede en Génova</Text>
              <Text style={styles.title}>Carrera 11 #26A-04</Text>
              <Text style={styles.title}>Lunes a Viernes 9 AM a 6 PM</Text>
              <Text style={styles.title}>3188950833</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Agendar tu cita</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={tebaida}
              resizeMode={"stretch"}
              style={styles.image1}
            />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Image
              source={circasia}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.titlePrincipal}>Sede en Tebaida</Text>
              <Text style={styles.title}>Calle 12 CR 5 #4/93</Text>
              <Text style={styles.title}>Lunes a Viernes 9 AM a 6 PM</Text>
              <Text style={styles.title}>3188950833</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Agendar tu cita</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.footer}></View>

        <Footer />
      </ScrollView>
      <ChatWhatsApp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSedes: {
    marginTop: 15,
    marginBottom: 8,
    height: 60,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  tituloSedes: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 4,
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  image1: {
    width: 200,
    height: 200,
    marginLeft: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  titlePrincipal: {
    fontSize: 20,
    marginBottom: 6,
    textAlign: "left",
    fontWeight: 'bold',
    color: '#7DC3E8',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#249bad",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 150,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  footer: {
    marginTop: 50,
  },
});

export default SedesScreen;