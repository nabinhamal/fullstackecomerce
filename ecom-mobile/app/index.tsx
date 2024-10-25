import React, { useEffect, useState } from "react";

import products from "../assets/product.json";
import { ActivityIndicator, FlatList } from "react-native";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { listProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";
import { Text } from "@/components/ui/text";

export default function HomeScreen() {
  // const { width } = useWindowDimensions();
  // const numColumns = width > 700 ? 3 : 2;
  // const [products, setProducts] = useState();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const data = await listProducts();
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: listProducts,
  });

  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
    xs: 1,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error fetching products</Text>;
  }
  return (
    <FlatList
      key={numColumns}
      data={data}
      numColumns={numColumns}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
