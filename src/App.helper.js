export const formatPrice = (priceStr) => {
    return Number((+priceStr).toFixed(0)).toLocaleString("en-US");
  };
  