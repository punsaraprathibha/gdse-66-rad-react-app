import {Component} from "react";
import axios from "axios";

interface ContactState {
    email: string;
    subject: string;
    message: string
}
export class Contact extends Component {

    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({
            baseURL:
                `http://localhost:4000`
        });
    }

    private onSendBtnClick
        = () => {
        try {
            this.api
                .post('/contact/submit', {
                    "email": "someone@gmail.com",
                    "subject": "Contact Subject",
                    "message": "Something went wrong"
                }).then((res: {data: any}) => {
                    const response = res.data;
                    alert(response);
                }).catch((error: any) => {
                    console.error('Axios Error:'
                        , error);
                });
        } catch (error) {
            console.error(
                'Error:', error);
        }
    }

    render() {
        return (
            <div className="flex">
                <div className="h-auto pt-5
                                pl-10 mx-auto">
                    <div className="p-2">
                        <h2 className="text-3xl
                                        text-green-400
                                        text-center
                                        underline
                                        decoration-2">Contact Us</h2>
                        <p className="pb-3 text-[8px]">
                            Got a technical issue?
                            Want to contact us?
                            Please let us assist you..</p>
                    </div>
                    <form className="h-auto p-2
                                     justify-center">
                        <div className="pb-2">
                            <label className="text-[7px]">
                                Your Email:</label>
                            <input type="email"
                                    className="float-right
                                               border-[1px]
                                               border-green-200"/>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">
                                Your Subject:</label>
                            <input type="text"
                                   className="float-right
                                               border-[1px]
                                               border-green-200"/>
                        </div>
                        <div className="pb-2">
                            <label className="text-[7px]">
                                Your Message:</label>
                            <textarea
                                   className="float-right
                                               border-[1px]
                                               border-green-200"/>
                        </div>

                        <div className="mt-2">
                            <button className="mt-5 p-[5px]
                                               bg-green-400
                                               text-[7px]"
                                     onClick={this.onSendBtnClick}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}