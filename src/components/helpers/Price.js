import React from "react";
import { Currency } from "react-intl-number-format";

const Price = ({ price }) => {
  return (
    <Currency locale="np" currency="NPR">
      {price * 128.3}
    </Currency>
  );
};

export default Price;
