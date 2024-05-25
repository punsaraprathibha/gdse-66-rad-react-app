import {Component} from "react";
import icon from '../../../images/icon.png';

export class NavBar extends Component {
    render() {
        return (
            <div className="p-2
                            bg-[#444544]
                            flex">
                <h1 className="text-1x1
                         text-secondary">
                    Organic Shop
                </h1>
                <img className="h-5 w-5 ml-1"
                     src={icon} alt=""/>

                <ul className="list-none ml-[100px]">
                    <li className="inline-block mr-2
                                text-[#e6f0e6]
                                cursor-pointer
                                hover:text-green-400">Home</li>
                    <li className="inline-block mr-2 text-[#e6f0e6] cursor-pointer hover:text-green-400">About</li>
                    <li className="inline-block mr-2 text-[#e6f0e6] cursor-pointer hover:text-green-400">Contact</li>
                </ul>
            </div>
        );
    }
}