import * as React from "react";
import { IProduct } from "../../models";
import OrangeButton from "../button";
import trash_can from "../../img/trash_can.png";
import "../../styles/cart-product-style/cart-product-style.css";

export interface ICartProductProps {
    product: IProduct;
    amount?: number;
    removeFromCart: (id: number) => void;
}

export default function CartProduct({
    product,
    amount,
    removeFromCart,
}: ICartProductProps) {
    return (
        <div data-testid={`cart-product-${product.id}`}>
            <div className="cart-product-container flex container">
                <div className="container left-side flex ">
                    <img
                        className="product-card-img"
                        src={product.url}
                        alt=""
                    />

                    <div className="title-disk">
                        <div>
                            <img src="" alt="" /> {product.amount}{" "}
                            {product.typeOfMeasurement}
                        </div>
                        <h1
                            data-testid="title"
                            className="container cart-product-headline font-bold"
                        >
                            {product.title}
                        </h1>
                        <p data-testid="description" className="container">
                            {product.description}
                        </p>
                    </div>
                </div>

                <div className="right-side items-center justify-around">
                    <div>
                        <span data-testid="amount">{amount}</span>
                    </div>
                    <div className="price" data-testid="price">
                        {product.price.sum} {product.price.typeOfCurrency}
                    </div>
                    <OrangeButton
                        onClick={() => {
                            removeFromCart(product.id);
                        }}
                        className={"mr-0 trash-can w-6 h-6"}
                    >
                        <img src={trash_can} data-testid="trash-can" alt="" />
                    </OrangeButton>
                </div>
            </div>
            <hr />
        </div>
    );
}
