import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import banner from "../../../assets/banner.jpg";
import diseño1 from "../../../assets/diseñosonrisa.jpg";
import diseño2 from "../../../assets/diseñosonrisa2.jpg";
import implantes from "../../../assets/implantes.jpg";
import sede1 from "../../../assets/sede1.png";
import sede2 from "../../../assets/sede2.png";
import sede3 from "../../../assets/sede3.png";
import dentix from "../../../assets/Dentix.png";
import consultorio1 from "../../../assets/consultorio2.jpg";
import consultorio2 from "../../../assets/consultorio3.jpg";
import nosotros from "../../../assets/nosotros.jpg";
import Footer from "../layouts/Footer";
import Button from "../components/Button";
import ChatWhatsApp from "../layouts/ChatWhatsApp";
import Header from "./Header";

import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");

    if (userData) {
      console.log("Home Screen");
      console.log(JSON.parse(userData));
      setUserDetails(JSON.parse(userData));
    }
  };
  const logout = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );

    navigation.navigate("LoginScreen");
  };

  return (

    <SafeAreaView className="flex-1 " style={{ backgroundColor: "white" }}>

      <ScrollView className="h-full" showsVerticalScrollIndicator={false}>

        <Header />

        <Text style={styles.text}>Bienvenido {userDetails?.fullname} </Text>

        <Button title="Logout" onPress={logout} />

        <View style={styles.containerBanner}>
          <ImageBackground
            source={banner}
            resizeMode={"stretch"}
            style={styles.fondoContainer}
          >
            <View style={styles.containerHome}>
              <Text style={styles.heading}>
                ¡BIENVENIDOS A LA CLINICA FRESH SMILE CMILLS!
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("AgendarCita")}
                >
                  <Text style={styles.buttonText}>Agendar Cita</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                  onPress={() => navigation.navigate("Sedes")}
                >
                  <Text style={styles.buttonText}>Buscar Clinica</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>

          <Text style={styles.titulo}>Conoce Nuestros Procedimientos</Text>

          <View style={styles.containerProcedimientos}>
            <Image
              source={diseño1}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <TouchableOpacity style={styles.buttonProce}
              onPress={() => navigation.navigate("Nosotros")}
            >
              <Text style={styles.buttonText}>Diseño de sonrisa</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerProcedimientos}>
            <Image
              source={diseño2}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <TouchableOpacity style={styles.buttonProce}
              onPress={() => navigation.navigate("Nosotros")}
            >
              <Text style={styles.buttonText}>Blanqueamiento</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerProcedimientos}>
            <Image
              source={implantes}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <TouchableOpacity style={styles.buttonProce}
              onPress={() => navigation.navigate("Nosotros")}
            >
              <Text style={styles.buttonText}>Implantes</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerBlog}>
          <Text>
            <Text style={styles.tituloBlog}>Nuestro Blog</Text>
          </Text>
        </View>

        <View>
          <View style={styles.itemContainerBlog}>
            <Image
              source={consultorio1}
              resizeMode={"stretch"}
              style={styles.imageBlog}
            />
            <View style={styles.contentBlog}>
              <Text style={styles.titleBlog}>Odontoestetic</Text>
              <Text style={styles.textBlog}>
                Odontoestetic es una clínica privada prestadora de servicios de
                salud oral, con mas de 15 años de experiencia.
              </Text>
              <TouchableOpacity style={styles.buttonBlog}
                onPress={() => navigation.navigate("Blog")}
              >
                <Text style={styles.buttonTextBlog}>Leer más</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemContainerBlog}>
            <Image
              source={dentix}
              resizeMode={"stretch"}
              style={styles.imageBlog}
            />
            <View style={styles.contentBlog}>
              <Text style={styles.titleBlog}>Dentix</Text>
              <Text style={styles.textBlog}>
                Dentix es una empresa española de servicios dentales fundada en
                2010 por Ángel Lorenzo. Es una empresa familiar cuyo modelo de
                negocio se basa en clínicas propias, no en acuerdos de
                franquicia.
              </Text>
              <TouchableOpacity style={styles.buttonBlog}
                onPress={() => navigation.navigate("Blog")}
              >
                <Text style={styles.buttonTextBlog}>Leer más</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.itemContainerBlog}>
            <Image
              source={consultorio2}
              resizeMode={"stretch"}
              style={styles.imageBlog}
            />
            <View style={styles.contentBlog}>
              <Text style={styles.titleBlog}>Centro Medico Integral</Text>
              <Text style={styles.textBlog}>
                Centro Medico Integral es un establecimiento de atención médica
                que ofrece una amplia gama de servicios para atender las
                necesidades de salud de sus pacientes.
              </Text>
              <TouchableOpacity style={styles.buttonBlog}
                onPress={() => navigation.navigate("Blog")}
              >
                <Text style={styles.buttonTextBlog}>Leer más</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemContainerBlog}>
            <Image
              source={consultorio1}
              resizeMode={"stretch"}
              style={styles.imageBlog}
            />
            <View style={styles.contentBlog}>
              <Text style={styles.titleBlog}>Prodentales</Text>
              <Text style={styles.textBlog}>
                El Dr.Oscar Zapata ofrece odontología general y especializada
                para pacientes de todas las edades. Sus servicios abarcan la
                prevención, el diagnóstico y el tratamiento de condiciones
                especiales o enfermedades que afectan a los dientes.
              </Text>
              <TouchableOpacity style={styles.buttonBlog}
                onPress={() => navigation.navigate("Blog")}
              >
                <Text style={styles.buttonTextBlog}>Leer más</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.tituloSomos}>¿Quienes Somos?</Text>

        <View>
          <View style={styles.itemContainerBlog}>
            <Image
              source={nosotros}
              resizeMode={"stretch"}
              style={styles.imageSomos}
            />
            <View style={styles.contentBlog}>
              <Text style={styles.textSomos}>
                Nosotros somos una clínica de ortodoncia dedicada a brindar
                soluciones de alta calidad para la salud dental de nuestros
                pacientes. Nos especializamos en la corrección de problemas
                dentales y maxilofaciales, utilizando las últimas tecnologías y
                técnicas de ortodoncia para lograr los mejores resultados
                posibles.
              </Text>
              <TouchableOpacity style={styles.buttonBlog}
                onPress={() => navigation.navigate("Nosotros")}
              >
                <Text style={styles.buttonTextBlog}>Leer más</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.containerBlog}>
          <Text>
            <Text style={styles.titulo2}>Clinica Fresh Smile Cmills</Text>
          </Text>
        </View>

        <View style={styles.containerProcedimientos}>
          <Text style={styles.tituloSedes}>SEDE ARMENIA</Text>
          <Image
            source={sede1}
            resizeMode={"stretch"}
            style={styles.imageSedes}
          />
          <TouchableOpacity style={styles.buttonProce}
            onPress={() => navigation.navigate("Sedes")}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerProcedimientos}>
          <Text style={styles.tituloSedes}>SEDE TEBAIDA</Text>
          <Image
            source={sede2}
            resizeMode={"stretch"}
            style={styles.imageSedes}
          />
          <TouchableOpacity style={styles.buttonProce}
            onPress={() => navigation.navigate("Sedes")}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerProcedimientos}>
          <Text style={styles.tituloSedes}>SEDE CIRCASIA</Text>
          <Image
            source={sede3}
            resizeMode={"stretch"}
            style={styles.imageSedes}
          />
          <TouchableOpacity style={styles.buttonProce}
            onPress={() => navigation.navigate("Sedes")}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}></View>

        <Footer />
      </ScrollView>
      <ChatWhatsApp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerBanner: {
    flex: 1,
    alignItems: "center",
    marginTop: -30,
  },
  containerHome: {
    alignItems: "center",
    padding: 5,
    marginTop: 50,
  },
  fondoContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    opacity: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    textAlign: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    color: "#7DC3E8",
  },
  tituloSomos: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    color: "#7DC3E8",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#249bad",
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
  buttonProce: {
    backgroundColor: "#249bad",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  containerProcedimientos: {
    marginTop: 20,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 25,
  },
  imageSedes: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -170,
    marginBottom: 20,
  },
  containerBlog: {
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    backgroundColor: "black",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  tituloBlog: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  titulo2: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  tituloSedes: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "bold",
    paddingRight: 200,
    color: "black",
  },
  itemContainerBlog: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    paddingHorizontal: 10,
    backgroundColor:
      "linear-gradient(90deg, rgba(125,195,232,1) 0%, rgba(183,222,242,1) 35%, rgba(131,205,245,1) 100%)",
    width: "90%",
    marginLeft: 20,
  },
  imageBlog: {
    width: 120,
    height: 110,
    marginRight: 10,
    borderRadius: 5,
  },
  imageSomos: {
    width: 140,
    height: 110,
    marginRight: 10,
    marginBottom: 50,
  },
  contentBlog: {
    flex: 1,
  },
  titleBlog: {
    fontSize: 18,
    color: "#4fafd2",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
    textAlign: "center",
  },
  textBlog: {
    fontSize: 12,
    color: "black",
  },
  textSomos: {
    marginTop: 5,
    fontSize: 12,
    color: "black",
  },
  buttonBlog: {
    backgroundColor: "#249bad",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 100,
    textAlign: "center",
  },
  buttonTextBlog: {
    color: "white",
    fontSize: 16,
  },
  footer: {
    marginTop: 50,
  },
});

export default HomeScreen;  