"use client";

import { useCartStore } from "@/store/useCartStore";

export default function CartItem({ item }) {
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <article
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <h3>{item.name}</h3>
      <p>가격: {item.price.toLocaleString("ko-KR")}원</p>
      <p>수량: {item.quantity}</p>
      <p>소계: {(item.price * item.quantity).toLocaleString("ko-KR")}원</p>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <button type="button" onClick={() => decreaseQty(item.id)}>
          수량 감소
        </button>
        <button type="button" onClick={() => increaseQty(item.id)}>
          수량 증가
        </button>
        <button type="button" onClick={() => removeFromCart(item.id)}>
          상품 삭제
        </button>
      </div>
    </article>
  );
}
