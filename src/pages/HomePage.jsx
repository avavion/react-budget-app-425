

const HomePage = () => {
    return (
        <section>
            <div className="container">
                <div className="layout">
                    <header>
                        <h1>Общий баланс: 30 000 руб.</h1>
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
                            <div className="item">
                                <div className="item__left">
                                    <div className="circle expense">
                                        <i class="fa-solid fa-basket-shopping"></i>
                                    </div>

                                    <p className="category">
                                        Категория: продукты
                                    </p>
                                </div>

                                <div className="item__right">
                                    <p className="total">
                                        2 500 руб.
                                    </p>

                                    <button className="item__button">
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <div className="item">
                                <div className="item__left">
                                    <div className="circle income">
                                        <i class="fa-solid fa-credit-card"></i>
                                    </div>

                                    <p className="category">
                                        Категория: заработная плата
                                    </p>
                                </div>

                                <div className="item__right">
                                    <p className="total">
                                        2 500 руб.
                                    </p>

                                    <button className="item__button">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="pagination">
                            <button className="pagination__button">
                                <span>1</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;