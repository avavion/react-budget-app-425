const formatNumber = (value) => {
    return Intl.NumberFormat('ru-RU').format(parseInt(value) || 0);
}

export default formatNumber;