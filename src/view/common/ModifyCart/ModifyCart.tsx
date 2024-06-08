import {Component} from "react";

interface ModifyCartProps {

}
interface ModifyCartState {
    itemCount: number
}

export class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }
    render() {

        const {itemCount} = this.state;

        const increaseItemCount =
            () => {
          alert('Add');
        }

        const decreaseItemCount =
            () => {
            alert('Remove')
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
                <small className="text-[8px]">1</small>
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