import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ShoppingCartProps {
    itemsList: CartItem[];
}

export class ShoppingCart extends Component<ShoppingCartProps> {
    render() {
        return (
            <h1>This is Shopping Cart!</h1>
        );
    }
}