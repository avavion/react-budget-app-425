import { useState } from 'react';
import { CATEGORIES } from '../../data/categories';
import getType from '../../utils/getType';
import Storage from '../../services/StorageService';

const initialFormState = {
    value: 0,
    category: "none"
};

const CreateItemForm = ({ setItems }) => {
    const [form, setForm] = useState(initialFormState);

    const onChangeCategoryHandle = (event) => {
        setForm((prevState) => {
            prevState = { ...prevState };

            prevState.category = event.target.value;

            return prevState;
        });
    };

    const onChangeInputHandle = (event) => {
        setForm((prevState) => {
            prevState = { ...prevState };

            const value = parseInt(event.target.value) || 0;

            if (!isNaN(value)) {
                prevState.value = value;
            }

            return prevState;
        });
    };

    const createItemHandle = () => {
        setItems((prevState) => {
            prevState = [...prevState];

            prevState.push({
                category: form.category,
                total: form.value,
                type: getType(form.category),
                id: Date.now(),
                created_at: new Date()
            });

            Storage.set('items', prevState);

            return prevState;
        });

        setForm(prevState => {
            prevState = { ...prevState };

            prevState.value = 0;

            return prevState;
        });
    }

    const SelectOptions = Object.keys(CATEGORIES).map((category) => {
        return (
            <option key={category} value={category}>{CATEGORIES[category]}</option>
        );
    })

    return (
        <div className="form">
            <h2>Добавить операцию</h2>
            <form onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    name="total"
                    placeholder="30 000 руб"
                    onChange={(e) => onChangeInputHandle(e)}
                    value={form.value}
                />
                <select
                    onChange={(e) => onChangeCategoryHandle(e)}
                    name="category"
                >
                    <option value="none">Выберите категорию</option>
                    {SelectOptions}
                </select>
                <button
                    onClick={createItemHandle}
                    className="button"
                >
                    Добавить операцию
                </button>
            </form>
        </div>
    )
}

export default CreateItemForm;