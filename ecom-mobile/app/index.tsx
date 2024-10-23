import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import products from "../assets/product.json";
import { FlatList } from "react-native";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
