import React from "react";
import { StyleSheet, Text, View, TextInput, CheckBox } from "react-native";

export default function App() {
  return (
    <View>
      <View>
        <Text>!שלום</Text>
        <View>
          <Text>מספר זהות</Text>
          <TextInput placeholder="נא הכנס מספר זהות"></TextInput>
          <Text>סיסמא</Text>
          <TextInput placeholder="נא הכנס סיסמא"></TextInput>
          <CheckBox title="?מורה" />
          <CheckBox title="?תלמידה" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
