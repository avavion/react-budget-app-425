import { CATEGORIES } from "../../data/categories";

const Item = ({ item }) => {

    const { id, category, type, total } = item;

    return (
        <div className="item">
            <div className="item__left">
                <div className={`circle ${type}`}>
                    {
                        type === 'income'
                            ?
                            <i className="fa-solid fa-credit-card"></i>
                            :
                            <i className="fa-solid fa-basket-shopping"></i>
                    }
                </div>
                <p className="category">
                    Категория: {CATEGORIES[category]}
                </p>
            </div>

            <div className="item__right">
                <p className="total">
                    {total} руб.
                </p>

                <button className="item__button">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default Item;