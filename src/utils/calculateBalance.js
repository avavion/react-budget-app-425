import { TYPES } from "../types/operation";

const calculateBalance = (items) => {
    return items.reduce((prev, item) => {
        if (item.type === TYPES.EXPENSE) {
            return prev -= item.total;
        }

        return prev += item.total;
    }, 0)
}

export default calculateBalance;