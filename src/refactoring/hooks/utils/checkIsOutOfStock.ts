import { Product } from "../../../types";

// utils/checkIsOutOfStock.ts - 상품의 품절 여부를 확인하는 간단한 유틸리티
export const checkIsOutOfStock = (product: Product): boolean => {
  return product.stock <= 0;
};
