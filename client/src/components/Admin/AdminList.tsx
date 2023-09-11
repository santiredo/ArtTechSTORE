

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { InitialState } from "../../redux/reducer";
import { getAllProducts } from "../../redux/action";
import { useEffect } from "react";
import { Card, List, ListItem, Title } from "@tremor/react";



export default function AdminList(){

    const dispatch = useDispatch();
    const products=useSelector((state:InitialState)=>state.allPosts);
    const cantPencil=products.filter((product)=>product.technique==="Pencil")
    const cantOil=products.filter((product)=>product.technique==="Oil Painting")
    const cantWater=products.filter((product)=>product.technique==="Watercolor")
    const cantDrawing=products.filter((product)=>product.type==="Drawing")
    const cantPainting=products.filter((product)=>product.type==="Painting")
    const cant3D=products.filter((product)=>product.type==="3D Object")
    console.log("Estos son los productos",cantOil);
    
    const chartdata=[{
        Technique: "Pencil",
        Quantity: cantPencil.length,
    },{
        Technique: "Oil Painting",
        Quantity: cantOil.length,
    },{
        Technique: "Watercolor",
        Quantity: cantWater.length,
    }]
    const chartdata2=[{
        Type: "Drawing",
        Quantity: cantDrawing.length,
    },{
        Type: "Painting",
        Quantity: cantPainting.length,
    },{
        Type: "3D Object",
        Quantity: cant3D.length,
    }]
    useEffect(()=>{
        getAllProducts(dispatch);
    },[])
    return(
        <>
            <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                <Title>List of Product by technique</Title>
                <List>
                {chartdata.map((item) => (
                    <ListItem key={item.Technique}>
                    <span>{item.Technique}</span>
                    <span>{item.Quantity}</span>
                    </ListItem>
                ))}
                </List>
            </Card>
            <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                <Title>List of Product by Type</Title>
                <List>
                {chartdata2.map((item) => (
                    <ListItem key={item.Type}>
                    <span>{item.Type}</span>
                    <span>{item.Quantity}</span>
                    </ListItem>
                ))}
                </List>
            </Card>
        </>
    )
}