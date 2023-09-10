

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { InitialState } from "../../redux/reducer";
import { getAllProducts } from "../../redux/action";
import { useEffect } from "react";
import { Card, DonutChart, Metric, Text, Title } from "@tremor/react";

const dataFormatter = (number: number) => {
    return  Intl.NumberFormat("us").format(number).toString();
};

export default function AdminDonutChart(){

    const dispatch = useDispatch();
    const products=useSelector((state:InitialState)=>state.allPosts);
    const soldProducts = useSelector((state:InitialState)=>state.allPostsSelled);
    let totalPrice = 0;
    let totalPriceSold = 0;

    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price;
    }

    console.log("The total price of all products is: " + totalPrice);
    for (let i = 0; i < soldProducts.length; i++) {
        totalPriceSold += soldProducts[i].price;
    }

    console.log("The total price of all soldProducts is: " + totalPriceSold);
    
    const chartdata=[{
        name: "In Store",
        sales: products.length,
    },{
        name: "Sold",
    sales: soldProducts.length,
    }]
    useEffect(()=>{
        getAllProducts(dispatch);
    },[])
    return(
        <>
            <Card className="max-w-lg">
                <Title>Sales</Title>
                <DonutChart
                className="mt-6"
                data={chartdata}
                category="sales"
                index="name"
                valueFormatter={dataFormatter}
                colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                />
            </Card>
            <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                <Text>How much you have in store</Text>
                <Metric>$ {totalPrice.toFixed(2)}</Metric>
            </Card>
            <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                <Text>Total of Art Sold</Text>
                <Metric>$ {totalPriceSold.toFixed(2)}</Metric>
            </Card>
        </>
    )
}