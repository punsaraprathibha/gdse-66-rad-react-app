import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ModifyCartProps {

}
interface ModifyCartState {
    itemCount: number
}

export class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {

    public static itemsList:CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }
    render() {

        let {itemCount}
            = this.state;

        const increaseItemCount =
            () => {
          // alert('Add');
                this.setState({
                    itemCount: ++itemCount
                })
        }

        const decreaseItemCount =
            () => {
            // alert('Remove')
                if (itemCount > 1) {
                    this.setState({
                        itemCount: --itemCount
                    })
                } else {
                    alert('Item count ' +
                        'can\'t be less than 1' );
                }
            }

        return (
            <div className="w-full
                                            mt-1
                                            p-[2.4px]
                                            text-[8px]
                                            text-center">
                <button className="float-left
                                                  text-[8px]
                                                  bg-yellow-300
                                                  rounded-lg
                                                  h-3 w-4"
                         onClick={decreaseItemCount}>-</button>
                <small className="text-[8px]">{itemCount}</small>
                <button className="float-right
                                                  text-[8px]
                                                  bg-yellow-300
                                                  rounded-lg
                                                  h-3 w-4"
                    onClick={increaseItemCount}>+</button>
            </div>
        );
    }
}