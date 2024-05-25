import {Component} from "react";

export class NavBar extends Component {
    render() {
        return (
            <div className="p-2
                            bg-gradient-to-r
                            from-blue-500
                            to-red-400">
                <h1 className="text-1xl
                           text-tertiary
                           text-center">
                    This is Navbar
                </h1>
            </div>
        );
    }
}