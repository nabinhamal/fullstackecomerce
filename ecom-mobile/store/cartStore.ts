import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],

  addProduct: (product: any) =>
    set((state: any) => ({
      items: state.items.some((item: any) => item.product.id === product.id)
        ? state.items.map((item: any) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { product, quantity: 1 }],
    })),

  resetCart: () => set({ items: [] }),
}));
