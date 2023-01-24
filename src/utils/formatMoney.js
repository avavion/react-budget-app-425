import formatNumber from "./formatNumber";

const formatMoney = (value, valute = "руб.") => {
    return `${formatNumber(value)} ${valute}`;
}

export default formatMoney;