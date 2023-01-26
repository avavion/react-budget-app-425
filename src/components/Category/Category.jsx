const Category = ({ url, text }) => {
    return (
        <div className="category">
            <div className="wrapper">
                <img src={url} alt={text} />

                <h2>{text}</h2>
            </div>
        </div>
    )
};

export default Category;