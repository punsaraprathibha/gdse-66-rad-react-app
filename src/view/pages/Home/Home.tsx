import {Component} from "react";

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
                   <div className="w-28 h-32
                                   bg-blue-300
                                   mr-2
                                   mb-2
                                   flex
                                   justify-center
                                   items-center">
                       01
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
               </div>
           </div>
        );
    }
}