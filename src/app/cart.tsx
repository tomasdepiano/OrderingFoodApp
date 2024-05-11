import { View, Text, Platform, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <FlatList
        contentContainerStyle={{ padding: 10, gap: 10 }}
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
