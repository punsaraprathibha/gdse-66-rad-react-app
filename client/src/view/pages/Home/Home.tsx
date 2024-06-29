import {useEffect, useState} from "react";
import axios from 'axios';
import {Product} from "../../common/Product/Product";

export const Home = () => {
    const [data, setData] = useState([]);

    const api = axios.create({
           baseURL: `http://localhost:4000`});

    const fetchData = async () => {
        try {
            // let response = await fetch('./product-data.json');
            // let jsonData = await response.json();
            api.get('/products/all')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    setData(jsonData);
                }).catch((error: any) => {
                console.error("Axios Error:", error);
            });
        } catch (error) {
            console.error(
                'Error fetching data:',
                error);
        }
    }

    useEffect(()=> {
       fetchData();
    });

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
                {
                    data.map((product: any) => (
                        <Product key={product.id}
                                 data={product}/>
                    ))
                }
            </div>
        </div>
    );
};