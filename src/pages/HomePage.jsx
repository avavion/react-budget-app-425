// INCOME - доходы
// EXPENSE - расходы

import { useState } from "react";
import { TYPES } from "../types/operation";
import Item from "../components/Item/Item";
import formatMoney from "../utils/formatMoney";

const initialItemsState = [
    {
        category: 'Продукты',
        total: 2000,
        type: TYPES.EXPENSE,
        id: 1,
        created_at: new Date('2022-01-01')
    },
    {
        category: 'Зарплата',
        total: 50000,
        type: TYPES.INCOME,
        id: 2,
        created_at: new Date('2023-01-01')
    },
    {
        category: 'Автомобиль',
        total: 16600,
        type: TYPES.EXPENSE,
        id: 3,
        created_at: new Date('2022-03-12')
    },
];

const HomePage = () => {
    const [items, setItems] = useState(initialItemsState);

    return (
        <section>
            <div className="container">
                <div className="layout">
                    <header>
                        <h1>Общий баланс: {formatMoney(70000)}</h1>
                    </header>

                    <div className="form">
                        <h2>Добавить операцию</h2>
                        <form>
                            <input type="text" name="total" placeholder="30 000 руб" />
                            <select name="category">
                                <option value="salary">Заработная плата</option>
                            </select>
                            <button className="button">
                                Добавить операцию
                            </button>
                        </form>
                    </div>

                    <div className="wrapper">
                        <h2>Операции</h2>

                        <div className="filter">
                            <button className="filter__button">Все операции</button>
                            <button className="filter__button">Все доходы</button>
                            <button className="filter__button">Все расходы</button>
                        </div>

                        <div className="items">
                            {
                                items.map((item) => <Item key={item.id} item={item} />)
                            }
                        </div>

                        <div className="pagination">
                            <button className="pagination__button">
                                <span>1</span>
                            </button>

                            <button className="pagination__button">
                                <span>2</span>
                            </button>

                            <button className="pagination__button">
                                <span>3</span>
                            </button>

                            <button className="pagination__button">
                                <span>4</span>
                            </button>

                            <button className="pagination__button">
                                <span>5</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;