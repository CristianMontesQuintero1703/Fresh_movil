import React from 'react'
import { Text, Image, View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
// import Header from '../layouts/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import banner from "../../../assets/banner.jpg";
import nosotros from "../../../assets/nosotros.jpg";
import cohete from "../../../assets/icono-cohete.png";
import ojo from "../../../assets/icono-ojo.png";
import diamante from "../../../assets/icono-diamante.png";
import Footer from '../layouts/Footer';
import ChatWhatsApp from '../layouts/ChatWhatsApp';

const NosotrosScreen = () => {
  return (

    <SafeAreaView className='flex-1 ' style={{ backgroundColor: 'white' }}>
      {/* <Header /> */}
      <ScrollView className='h-full' showsVerticalScrollIndicator={false}>

        <View style={styles.containerBanner} >

          <ImageBackground source={banner} resizeMode={'stretch'} style={styles.fondoContainer}>
            <View style={styles.containerHome}>
              <Text style={styles.heading}>¡SOBRE NOSOTROS!</Text>
            </View>
          </ImageBackground>

        </View>


        <View style={styles.container}>
          <Image
            source={nosotros} resizeMode={'stretch'}
            style={styles.image}
          />
          <View style={styles.content}>
            <Text style={styles.title}>Nosotros</Text>
            <Text style={styles.paragraph}>
              Nuestros consultorios son un lugar donde los profesionales de la salud dental brindan una amplia gama de servicios de atención dental a los pacientes. Estos servicios pueden incluir desde limpiezas dentales regulares hasta tratamientos de ortodoncia y cirugías dentales, además nuestros asistentes dentales ayudan al odontólogo y al higienista dental en el tratamiento de los pacientes.</Text>
          </View>
        </View>


        <View style={styles.containerEmpresa}>
          <View style={styles.itemEmpresa}>
            <Image source={cohete} resizeMode={'stretch'} style={styles.imageEmpresa} />
            <Text style={styles.textEmpresa}>Misión</Text>
            <Text style={styles.text2}>La misión de nuestro consultorio odontológico
              ser proporcionar una atención dental
              de alta calidad y personalizada a los pacientes
              promoviendo la salud oral y mejorando
              la salud de nuestros pacientes.</Text>
          </View>
          <View style={styles.itemEmpresa2}>
            <Image source={ojo} resizeMode={'stretch'} style={styles.imageEmpresa} />
            <Text style={styles.textEmpresa}>Visión</Text>
            <Text style={styles.text2}>Ser reconocidos como el consultorio
              odontológico líder en nuestra
              comunidad, brindando una atención.</Text>
          </View>
          <View style={styles.itemEmpresa3}>
            <Image source={diamante} resizeMode={'stretch'} style={styles.imageEmpresa} />
            <Text style={styles.textEmpresa}>Valores</Text>
            <Text style={styles.text2}>Profesionalismo: ofrecer servicios
              odontológicos de alta calidad basados
              en conocimientos científicos.</Text>
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
  containerBanner: {
    // flex: 1,
    alignItems: 'center',
    marginTop: -30,
  },
  containerHome: {
    alignItems: 'center',
    padding: 5,
    marginTop: 50,
    width: 370,
    height: 100,
  },
  fondoContainer: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 50,
    opacity: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f1f1f1',
  },
  image: {
    width: 180,
    height: 160,
    marginTop: 35,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 10,
  },
  containerEmpresa: {
    // flex: 1,
    // marginTop: -25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemEmpresa: {
    marginBottom: 20,
    alignItems: 'center',
  },
  itemEmpresa2: {
    marginTop: -40,
    marginBottom: 20,
    alignItems: 'center',
  },
  itemEmpresa3: {
    marginTop: -40,
    marginBottom: 20,
    alignItems: 'center',
  },
  imageEmpresa: {
    width: 100,
    margin: 10,
    height: 100,
  },
  textEmpresa: {
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  text2: {
    marginTop: 5,
    width: 100,
    fontSize: 8,
    textAlign: 'center',
  },
  footer: {
    marginTop: 50,
  },
});

export default NosotrosScreen;