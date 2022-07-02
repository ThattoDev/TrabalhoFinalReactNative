import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Login 

const Stack = createNativeStackNavigator();

const RotasPublicas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
     {/*  <Stack.Screen
        name="Contatos"
        component={Cotatos}
        options={{ title: "Título da Página" }}
      /> vai ficar no draw?  */}
    </Stack.Navigator>
  );
};

export default RotasPublicas;