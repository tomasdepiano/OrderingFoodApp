import { View, Text, Platform, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/button";

const CartScreen = () => {
  const { items, total, checkout } = useCart();
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
        Total: ${total}
      </Text>
      <Button onPress={checkout} text="Checkout" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
