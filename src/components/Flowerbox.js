import Nav from "./Nav";
import Logo from "./Logo";
import Product from "./Product";
import Footer from "./Footer";


function Flowerbox() {
    return (
        <div className="flowerbox">
        <Nav/>
        <Logo/>
        <div className="product">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Footer/>
        </div>
        </div>
        
    )
}

export default Flowerbox;