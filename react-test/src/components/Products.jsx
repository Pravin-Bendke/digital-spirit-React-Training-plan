

const Product = (props)=>{
    return( 
    <div className="">
        <h3>{props.title}</h3>
        <p>Price :{props.price}</p>
        <p>Stock :{props.inStock}</p>
        <p>Categories :{props.categories.join(", ")}</p>
    </div>
    )
}

export default Product