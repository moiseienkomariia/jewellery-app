import { Card } from "@ui";
import Button from "../../ui/Button/Button";
import { useCart } from "../../hooks/useCartActions";
import { useState } from "react";
import { DEFAULT_DELIVERY_FEE } from "@config/constants";

export const CheckoutPage = () => {
  const { data: order, isLoading } = useCart();
  const deliveryOptions = [
    {
      name: "DPD",
      deliveryFee: "50",
    },
    {
      name: "DHL",
      deliveryFee: "55",
    },
    {
      name: "InPost",
      deliveryFee: "40",
    },
  ];
  const paymentMethods = ["MasterCard", "Visa", "PayPal"];
  const [selectedDelivery, setSelectedDelivery] =
    useState(DEFAULT_DELIVERY_FEE);
  const [selectedPayment, setSelectedPayment] = useState("MasterCard");

  const placeOrder = () => {
    console.log(order);
  };
  const onDeliveryChange = (value: number) => {
    setSelectedDelivery(value);
    console.log(selectedDelivery);
  };
  const onPaymentChange = (value: string) => {
    setSelectedPayment(value);
    console.log(selectedPayment);
  };
  if (isLoading || !order) return <p>Loading...</p>;
  return (
    <>
      <Card>
        <div>Deliver to:</div>
        <label htmlFor="name">Full Name:</label>
        <input id="name" type="text" />
        <label htmlFor="street">Street:</label>
        <input id="street" type="text" />
        <label htmlFor="city">City:</label>
        <input id="city" type="text" />
        <label htmlFor="country"></label>
        <select name="country" id="country">
          <option value="1">London</option>
          <option value="2">New York</option>
          <option value="3">Parys</option>
        </select>
        <input id="code" type="text" />
        <label htmlFor="code">Postal Code</label>
      </Card>
      <Card>
        <label htmlFor="delivery">Delivery Method:</label>
        <select
          onChange={(e) => onDeliveryChange(Number(e.target.value))}
          defaultValue={selectedDelivery}
          name="delivery"
          id="delivery"
        >
          {deliveryOptions.map((option) => (
            <option value={option.deliveryFee}>{option.name}</option>
          ))}
        </select>
      </Card>
      <Card>
        <label htmlFor="payment">Payment method:</label>
        <select
          onChange={(e) => onPaymentChange(e.target.value)}
          defaultValue={selectedPayment}
          name="payment"
          id="payment"
        >
          {paymentMethods.map((paymentMethod) => (
            <option value={paymentMethod}>{paymentMethod}</option>
          ))}
        </select>
      </Card>
      <div>
        <div>Amount</div>
        <div>
          Item total <span>{order.subtotal}</span>
        </div>
        <div>
          Delivery fee <span>{order.deliveryFee}</span>
        </div>
        <hr />
        <div>
          Total <span>{order.total}</span>
        </div>
      </div>
      <Button size="lg" type="primary" onClick={() => placeOrder}>
        Place Order
      </Button>
    </>
  );
};
