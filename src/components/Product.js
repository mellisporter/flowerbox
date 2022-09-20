import Flowers from "../Flowers";

function Product(props) {
    return(
        <div className="productInfo">
            <p>{Flowers[props.num].name}</p>
            <img src={Flowers[props.num].image} width="100px"></img>  
        </div>
 
       
    )
}

export default Product;