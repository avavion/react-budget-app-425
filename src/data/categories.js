const INCOME_CATEGORIES = {
    salary: "Заробатная плата",
    cashback: "Кэшбэк",
    deposit: "Вклад"
};

const EXPENSE_CATEGORIES = {
    products: "Продукты",
    services: "Коммунальные услуги",
    car: "Автомобиль",
    health: "Здоровье и красота"
};

const CATEGORIES = { ...INCOME_CATEGORIES, ...EXPENSE_CATEGORIES };

export {
    INCOME_CATEGORIES,
    EXPENSE_CATEGORIES,
    CATEGORIES
}