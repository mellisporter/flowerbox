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
            <Product num="0"/>
            <Product num="1"/>
            <Product num="2"/>
            <Product num="3"/>
            <Product num="4"/>
            <Product num="5"/>
            <Product num="6"/>
            <Product num="7"/>
            <Product num="8"/>
            <Footer/>
        </div>
        </div>
        
    )
}

export default Flowerbox;