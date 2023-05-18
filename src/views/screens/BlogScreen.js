import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import Footer from '../layouts/Footer';
import { Searchbar } from 'react-native-paper';
import card4 from "../../../assets/cards4.jpg";
import card5 from "../../../assets/cards5.jpg";
import implantes from "../../../assets/IMPLANTES-DENTALES.jpg";
import consultorio1 from "../../../assets/consultorio1.jpg";
import consultorio2 from "../../../assets/consultorio2.jpg"
import consultorio4 from "../../../assets/consultorio4.jpg"
import ChatWhatsApp from '../layouts/ChatWhatsApp';
import Icon from "react-native-vector-icons/FontAwesome5";

const BlogScreen = ({ navigation }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handlePress = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (


    <SafeAreaView className='flex-1 ' style={{ backgroundColor: 'white' }}>
      <ScrollView className='h-full' showsVerticalScrollIndicator={false}>

        <Header />
        
        <View style={{backgroundColor: "black", marginLeft: 5, marginRight: 5}}>
          <TouchableOpacity onPress={handlePress}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 300, marginTop: -43 }}>
              <Icon name="bars" size={24} color="#5FFDFF" />
              <Text style={{ marginLeft: 8, color: "#5FFDFF", fontSize: 16 }}>Menú</Text>
            </View>
          </TouchableOpacity>

          {menuOpen && (
            <View style={{ marginTop: 8 }}>
              <TouchableOpacity onPress={handleClose}>
                <View style={styles.contentMenuCerrar}>
                  <Icon name="window-close" size={24} color="white" />
                  <Text style={{ marginLeft: 8, color: 'white' }}>Cerrar</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
                <View style={styles.contentMenuItems}>
                  <Icon name="home" size={24} color="white" />
                  <Text style={styles.contentMenuText}>Inicio</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Nosotros")}>
                <View style={styles.contentMenuItems}>
                  <Icon name="users" size={24} color="white" />
                  <Text style={styles.contentMenuText}>Nosotros</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Procedimientos")}>
                <View style={styles.contentMenuItems}>
                  <Icon name="tooth" size={24} color="white" />
                  <Text style={styles.contentMenuText}>Procedimientos</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Sedes")}>
                <View style={styles.contentMenuItems}>
                  <Icon name="globe-americas" size={24} color="white" />
                  <Text style={styles.contentMenuText}>Sedes</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Blog")}>
                <View style={styles.contentMenuItems}>
                  <Icon name="newspaper" size={24} color="white" />
                  <Text style={styles.contentMenuText}>Blog</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Contacto")}>
                <View style={styles.contentMenuItems}>
                  <Icon name="comments" size={24} color="white" />
                  <Text style={styles.contentMenuText}>Contacto</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.containerEmpresa}>
          <View style={styles.itemEmpresa}>
            <Image source={card4} resizeMode={'stretch'} style={styles.imageEmpresa} />
          </View>
          <View style={styles.itemEmpresa}>
            <Image source={card5} resizeMode={'stretch'} style={styles.imageEmpresa} />
          </View>
          <View style={styles.itemEmpresa}>
            <Image source={implantes} resizeMode={'stretch'} style={styles.imageEmpresa} />
          </View>
        </View>

        <View style={styles.contentBuscador}>
          <Searchbar placeholder="Search" style={styles.buscador} />
        </View>

        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Image source={consultorio1} resizeMode={'stretch'} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>DENTIX</Text>
              <Text style={styles.text}>Dentix es una empresa española de servicios dentales fundada en 2010 por Ángel Lorenzo. Es una empresa familiar cuyo modelo de negocio se basa en clínicas propias, no en acuerdos de franquicia.
                Sede central: Calle de la Ribera del Loira, 56, 28042; Madrid, Comunidad de Madrid, España</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Procedimientos")}>
                <Text style={styles.buttonText}>Leer más</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Image source={consultorio2} resizeMode={'stretch'} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>ODONTOESTETIC</Text>
              <Text style={styles.text}>Odontoestetic es una clínica privada prestadora de servicios de salud oral, con mas de 15 años de experiencia, especializada en áreas de educación, promoción y prevención de salud bucal, rehabilitación oral, endodoncia, periodoncia, ortodoncia y estética dental.
                Sede central: Carrera 12 #1A Norte, Armenia 630004</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Procedimientos")}>
                <Text style={styles.buttonText}>Leer más</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Image source={consultorio4} resizeMode={'stretch'} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>PRODENTALES</Text>
              <Text style={styles.text}>El Dr.Oscar Zapata ofrece odontología general y especializada para pacientes de todas las edades. Sus servicios abarcan la prevención, el diagnóstico y el tratamiento de condiciones especiales o enfermedades que afectan a los dientes.
                Sede central: Cl 3 N 12-05 Armenia - Quindío, Colombia</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Procedimientos")}>
                <Text style={styles.buttonText}>Leer más</Text>
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
  contentMenuCerrar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 300,
    marginBottom: 5,
  },
  contentMenuItems: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  contentMenuText: {
    marginLeft: 8,
    color: 'white',
    fontSize: 16,
  },
  contentBuscador: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buscador: {
    width: '90%',
    borderColor: 'gray',
    borderWidth: 2,
    backgroundColor: '#7DC3E8',
    textAlign: 'center',
    opacity: 0.6,
  },
  containerEmpresa: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemEmpresa: {
    marginBottom: 20,
    alignItems: 'center',
  },
  imageEmpresa: {
    width: 110,
    height: 120,
    margin: 5,
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 180,
    height: 300,
    marginRight: 10,
    marginLeft: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
    color: '#7DC3E8',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    marginRight: 5,
  },
  button: {
    backgroundColor: '#249bad',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 105,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    marginTop: 50,
  },
});

export default BlogScreen;