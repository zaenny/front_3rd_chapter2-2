import { useMemo } from "react";
import { CartItem } from "../../types";

export const useCartCount = (cart: CartItem[]) => {
  return useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);
};
