import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ShoppingCartProps {
    itemsList: CartItem[];
}

export class ShoppingCart extends Component<ShoppingCartProps> {
    render() {
        return (
            <div className="flex
                justify-center
                items-center
                min-h-screen">
                <table className="w-full mx-6">
                    <tr className="bg-gray-400">
                        <th className="text-[9px]
                                font-normal
                                border-black
                                border-[0.5px]
                                px-1">Id</th>
                    </tr>
                </table>
            </div>
        );
    }
}