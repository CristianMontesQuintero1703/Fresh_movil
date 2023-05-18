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
import blanqueamiento from "../../../assets/blanqueamiento.png";
import brackets from "../../../assets/brackets.png";
import cordales from "../../../assets/cordales.jpg";
import diseñoSonrisa from "../../../assets/diseñosonrisa2.jpg"
import fracturas from "../../../assets/fractura-dientes.png";
import implantes from "../../../assets/implantes2.jpg";
import caries from "../../../assets/caries-infantil.png"
import frenos from "../../../assets/frenos.jpg"
import cirugia from "../../../assets/cirugia.jpg"
import Header from "./Header";
import Footer from "../layouts/Footer";
import ChatWhatsApp from "../layouts/ChatWhatsApp";

const ProcedimientosScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 " style={{ backgroundColor: "white" }}>
      <ScrollView className="h-full" showsVerticalScrollIndicator={false}>

        <Header />

        <View style={styles.containercompleto}>
          <View style={styles.viewcompleto}>
            <View style={styles.serviceItem}>
              <Image
                source={blanqueamiento}
                resizeMode={"stretch"}
                style={styles.serviceImg}
              />
              <Text style={styles.serviceTitle}>Blanqueamiento dental</Text>
              <Text style={styles.serviceText}>
                El blanqueamiento dental es un procedimiento de odontología estética que busca aclarar el color de los dientes para obtener una sonrisa más blanca y brillante.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containercompleto}>
          <View style={styles.viewcompleto}>
            <View style={styles.serviceItem}>
              <Image
                source={brackets}
                resizeMode={"stretch"}
                style={styles.serviceImg}
              />
              <Text style={styles.serviceTitle}>
                Brackets
              </Text>
              <Text style={styles.serviceText}>
                El tratamiento de brackets es un procedimiento ortodóntico utilizado para corregir la alineación y posición de los dientes.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containercompleto}>
          <View style={styles.viewcompleto}>
            <View style={styles.serviceItem}>
              <Image
                source={cordales}
                resizeMode={"stretch"}
                style={styles.serviceImg}
              />
              <Text style={styles.serviceTitle}>
                Extracción de cordales
              </Text>
              <Text style={styles.serviceText}>
                La extracción de las cordales es un procedimiento común y seguro, y suele ser necesario cuando las muelas del juicio causan dolor o pueden afectar la salud bucal en general
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containercompleto}>
          <View style={styles.viewcompleto}>
            <View style={styles.serviceItem}>
              <Image
                source={diseñoSonrisa}
                resizeMode={"stretch"}
                style={styles.serviceImg}
              />
              <Text style={styles.serviceTitle}>Diseño de sonrisa</Text>
              <Text style={styles.serviceText}>
                El diseño de sonrisa es un proceso estético y personalizado en odontología que busca mejorar la apariencia de la sonrisa de una persona.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containercompleto}>
          <View style={styles.viewcompleto}>
            <View style={styles.serviceItem}>
              <Image
                source={fracturas}
                resizeMode={"stretch"}
                style={styles.serviceImg}
              />
              <Text style={styles.serviceTitle}>Fractura dental</Text>
              <Text style={styles.serviceText}>
                El tratamiento de fractura dental en odontología es un procedimiento que se realiza para reparar un diente dañado debido a una fractura o una fisura.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containercompleto}>
          <View style={styles.viewcompleto}>
            <View style={styles.serviceItem}>
              <Image
                source={implantes}
                resizeMode={"stretch"}
                style={styles.serviceImg}
              />
              <Text style={styles.serviceTitle}>Implantes dentales</Text>
              <Text style={styles.serviceText}>
                El tratamiento de implantes dentales es un procedimiento odontológico utilizado para reemplazar dientes perdidos o extraídos.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containercompleto}>
          <View style={styles.viewcompleto}>
            <View style={styles.serviceItem}>
              <Image
                source={caries}
                resizeMode={"stretch"}
                style={styles.serviceImg}
              />
              <Text style={styles.serviceTitle}>Caries</Text>
              <Text style={styles.serviceText}>
                El tratamiento de caries es un procedimiento dental utilizado para eliminar y tratar las cavidades o deterioro de los dientes causados por la caries dental.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containercompleto}>
          <View style={styles.viewcompleto}>
            <View style={styles.serviceItem}>
              <Image
                source={frenos}
                resizeMode={"stretch"}
                style={styles.serviceImg}
              />
              <Text style={styles.serviceTitle}>Frenos dentales</Text>
              <Text style={styles.serviceText}>
                Los frenos dentales son dispositivos utilizados en odontología para corregir la posición y alineación de los dientes.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.containercompleto}>
          <View style={styles.viewcompleto}>
            <View style={styles.serviceItem}>
              <Image
                source={cirugia}
                resizeMode={"stretch"}
                style={styles.serviceImg}
              />
              <Text style={styles.serviceTitle}>Cirugía de Encías</Text>
              <Text style={styles.serviceText}>
                La cirugía de encías es un procedimiento dental que se realiza para tratar y corregir problemas en las encías y estructuras de soporte de los dientes.
              </Text>
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  serviceItem: {
    // width: "50%",
    alignItems: "center",
  },
  serviceImg: {
    width: "80%",
    height: 180,
    borderRadius: 10,
  },
  serviceTitle: {
    fontSize: 25,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
    color: '#7DC3E8',
  },
  serviceText: {
    fontSize: 12,
    width: "90%",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 6,
    marginBottom: 10,
  },
  containercompleto: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  viewcompleto: {
    width: "90%",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  footer: {
    marginTop: 50,
  },
});

export default ProcedimientosScreen;