import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"black"}}>
      <Header/>


    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});