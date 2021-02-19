const Book = ({ image, title, author }) => {
    const clickHandler = (e) => {
        console.log(e)
        console.log(e.target)
        alert('i have been clicked')
    }

    return (
        <article
            className="Book"
            onMouseOver={() => {
                {/* TODO add styles on hover */ }
            }}
        >
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h3>{author}</h3>
            <button type="button" onClick={clickHandler}>Add to Cart</button>
        </article>
    )
}

export default Book