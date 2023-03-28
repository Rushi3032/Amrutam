import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";

const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);



  const filter = (type)=>{
    setMenuProducts(ProductsData.filter((product)=>product.type === type))
  }

  return (
    <div className={css.container}>
        <img src={Plane} />
        <h1>Our featured Products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin care</li>
                <li onClick={()=>filter("conditioner")}>conditionor</li>
                <li onClick={()=>filter("foundation")}>Foundation</li>
            </ul>

            <div className={css.list}>
            {
                MenuProducts.map((product, i) => (
                    <div className={css.product}>
                        <div className='left-s'>
                            <div className='name'>
                                <span>{product.name}</span>
                                <span>{product.detail}</span>
                            </div>
                            <span>{product.price}$</span>
                            <div>Shop now</div>
                            <img src={product.img} className="img-p"/>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  );
};

export default Products;