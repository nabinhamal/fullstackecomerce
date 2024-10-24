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
      numColumns={2}
      contentContainerClassName="gap-2"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
