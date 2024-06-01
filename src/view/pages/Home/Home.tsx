import {Component} from "react";
import spinash from '../../../images/products/spinach.png'

export class Home extends Component {
    render() {
        return (
            <div className="flex">
                {/*Row 01  */}
                <div className="flex
                               flex-wrap
                               ml-[1px]
                               mt-10
                               mb-5
                               justify-center
                               items-center
                               mx-auto">
                    <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                        <div>
                            <img className="h-[88px] w-[88px]" src={spinash} alt=""/>
                        </div>
                        <div className="flex">
                            <div>
                                <h3 className="text-secondary text-[12px] pl-2">Spinach</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[12px] pl-2">200 <small className="text-[7px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-full mt-1 p-[2.4px] bg-secondary text-[8px] border-gray-500 border-[0.5px]">Add to Cart</button>
                        </div>
                    </div>
                    <div className="w-28 h-32
                                   bg-blue-300
                                   mr-2
                                   mb-2
                                   flex
                                   justify-center
                                   items-center">
                        02
                    </div>
                    <div className="w-28 h-32
                                   bg-blue-300
                                   mr-2
                                   mb-2
                                   flex
                                   justify-center
                                   items-center">
                        03
                    </div>
                    <div className="w-28 h-32
                                   bg-blue-300
                                   mr-2
                                   mb-2
                                   flex
                                   justify-center
                                   items-center">
                        04
                    </div>
                    <div className="w-28 h-32
                                   bg-blue-300
                                   mr-2
                                   mb-2
                                   flex
                                   justify-center
                                   items-center">
                        05
                    </div>
                    <div className="w-28 h-32
                                   bg-blue-300
                                   mr-2
                                   mb-2
                                   flex
                                   justify-center
                                   items-center">
                        06
                    </div>
                </div>
            </div>
        );
    }
}