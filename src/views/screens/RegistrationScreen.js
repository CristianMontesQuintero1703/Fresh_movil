import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

import Input from "../components/Input";
import Button from "../components/Button";
import Loader from "../components/Loader";
import user from "../../../assets/usuario.png";

const RegistrationScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    id: "",
    email: "",
    fullname: "",
    lastname: "",
    adress: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    let isValid = true;

    if (!inputs.id) {
      handleError("Por favor ingrese un número de identificación", "id");
      isValid = false;
    }
    if (!inputs.email) {
      handleError("Por favor ingrese su dirección de correo eléctronico", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Por favor ingrese una dirección de correo válida", "email");
      isValid = false;
    }
    if (!inputs.fullname) {
      handleError("Por favor ingrese su nombre", "fullname");
      isValid = false;
    }
    if (!inputs.lastname) {
      handleError("Por favor ingrese su apellido", "lastname");
      isValid = false;
    }
    if (!inputs.adress) {
      handleError("Por favor ingrese su dirección", "adress");
      isValid = false;
    }
    if (!inputs.phone) {
      handleError("Por favor ingrese su número de teléfono", "phone");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Por favor ingrese una contraseña", "password");
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError("La contraseña debe ser de mínimo 8 carácteres", "password");
      isValid = false;
    }
    if (!inputs.passwordConfirm) {
      handleError("Por favor confirme su contraseña", "passwordConfirm");
      isValid = false;
    } else if (inputs.passwordConfirm !== inputs.password) {
      handleError("Las contraeñas no coinciden", "passwordConfirm");
      isValid = false;
    }

    if (isValid) register();
  };

  const register = () => {
    console.log("register!");
    console.log(inputs);

    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(inputs));

        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Exito",
          textBody: "Se ha registrado con éxito!",
          button: "Close",
          onHide: () => {
            navigation.navigate("LoginScreen");
          },
        });
      } catch (error) {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: "ERROR",
          textBody: error,
          button: "Close",
        });
      }
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (text, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: text }));
  };

  return (
    <AlertNotificationRoot>
      <SafeAreaView style={styles.container}>
        <Loader visible={loading} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image source={user} style={styles.image} />
          <Text style={styles.heading}>Registro</Text>

          <Input
            label="Identificación"
            iconName="address-card"
            placeholder="Ingrese su número de identificación"
            onChangeText={(text) => handleOnChange(text, "id")}
            onFocus={() => handleError(null, "id")}
            error={errors.id}
          />
          <Input
            label="Nombre"
            iconName="user"
            placeholder="Ingrese su nombre"
            onChangeText={(text) => handleOnChange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            error={errors.fullname}
          />
          <Input
            label="Apellido"
            iconName="user"
            placeholder="Ingrese su apellido"
            onChangeText={(text) => handleOnChange(text, "lastname")}
            onFocus={() => handleError(null, "lastname")}
            error={errors.lastname}
          />
          <Input
            label="Dirección"
            iconName="building"
            placeholder="Ingrese su dirección"
            onChangeText={(text) => handleOnChange(text, "adress")}
            onFocus={() => handleError(null, "adress")}
            error={errors.adress}
          />
          <Input
            label="Teléfono"
            iconName="mobile"
            placeholder="Ingrese su teléfono"
            onChangeText={(text) => handleOnChange(text, "phone")}
            onFocus={() => handleError(null, "phone")}
            error={errors.phone}
          />
          <Input
            label="Correo"
            iconName="envelope"
            placeholder="Ingrese su correo electrónico"
            onChangeText={(text) => handleOnChange(text, "email")}
            onFocus={() => handleError(null, "email")}
            error={errors.email}
          />
          <Input
            label="Contraseña"
            iconName="lock"
            password
            placeholder="Ingrese su contraseña"
            onChangeText={(text) => handleOnChange(text, "password")}
            onFocus={() => handleError(null, "password")}
            error={errors.password}
          />
          <Input
            label="Confirme contraseña"
            iconName="lock"
            password
            placeholder="Confirme su contraseña"
            onChangeText={(text) => handleOnChange(text, "passwordConfirm")}
            onFocus={() => handleError(null, "passwordConfirm")}
            error={errors.passwordConfirm}
          />

          <Button title="Registrarse" onPress={validate} />

        </ScrollView>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
  },
  scrollContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: 'center',
  },
  image: {
    width: 60,
    height: 60,
    // marginTop: 10,
    marginBottom: 5,
    alignSelf: "center",
  },
});

export default RegistrationScreen;