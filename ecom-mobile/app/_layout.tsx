import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "shop" }} />
        <Stack.Screen name="product/[id]" options={{ title: "Product" }} />
      </Stack>
    </GluestackUIProvider>
  );
}
