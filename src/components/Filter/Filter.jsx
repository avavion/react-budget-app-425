import { TYPES } from "../../types/operation";

const FILTER_TYPES = {
    all: "Все операции",
    income: "Все доходы",
    expense: "Все расходы"
}

const Filter = ({ items, setFilteredItems }) => {

    const onClickFilterHandle = (type) => {
        switch (type) {
            case TYPES.INCOME:
                setFilteredItems(items.filter((item) => item.type === TYPES.INCOME));
                break;
            case TYPES.EXPENSE:
                setFilteredItems(items.filter((item) => item.type === TYPES.EXPENSE));
                break;
            default:
                setFilteredItems(items);
        }
    };

    const Buttons = Object.keys(FILTER_TYPES).map((type) => {
        return (
            <button
                key={type}
                onClick={() => onClickFilterHandle(type)}
                className="filter__button"
            >
                {FILTER_TYPES[type]}
            </button>
        )
    });

    return (
        <div className="filter">
            {Buttons}
        </div>
    )
}

export default Filter;