import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/views/screens/HomeScreen";
import NosotrosScreen from "./src/views/screens/NosotrosScreen";
import RegistrationScreen from "./src/views/screens/RegistrationScreen";
import ProcedimientosScreen from "./src/views/screens/ProcedimientosScreen";
import ContactoScreen from "./src/views/screens/ContactoScreen";
import SedesScreen from "./src/views/screens/SedesScreen";
import BlogScreen from "./src/views/screens/BlogScreen";
import AgendarCita from "./src/views/screens/AgendarCita";
import LoginScreen from "./src/views/screens/LoginScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="AgendarCita">
        <Stack.Screen name="Inicio" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Blog" component={BlogScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Procedimientos" component={ProcedimientosScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Nosotros" component={NosotrosScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Sedes" component={SedesScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Contacto" component={ContactoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="AgendarCita" component={AgendarCita} options={{headerShown: false}}/>
        <Stack.Screen name="Registro" component={RegistrationScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
