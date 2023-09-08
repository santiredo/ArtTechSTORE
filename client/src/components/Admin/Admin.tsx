import { 
    Card,
    Title,
    BarChart,
} from "@tremor/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { InitialState } from "../../redux/reducer";
import { allArtist, getAllProducts, getAllUsers } from "../../redux/action";
import { useEffect } from "react";

const dataFormatter = (number: number) => {
    return  Intl.NumberFormat("us").format(number).toString();
  };


export default function Admin(){
    //!aca vienen los estados y los dispatch
    const dispatch = useDispatch();
    const products=useSelector((state:InitialState)=>state.allPosts)
    const artists=useSelector((state:InitialState)=>state.artists);
    const users=useSelector((state:InitialState)=>state.users)
    useEffect(()=>{
        getAllUsers(dispatch)
        allArtist(dispatch);
        getAllProducts(dispatch);
    },[])
    //
    const cantProducts=products.length;
    const cantArtist=artists.length;
    const cantUsers=users.length
    const cantTotal=(cantProducts+cantArtist+cantUsers)
    const chartdata=[{
        name: "Product",
        "Numberof":cantProducts,
    },{
        name: "Artists",
        "Numberof":cantArtist,
    },{
        name: "Users",
        "Numberof":cantUsers,
    },{
        name:"Total",
        "Numberof":cantTotal,
    }];
    return(
    <>
        <div>
        <Card>
            <Title>Total Number</Title>
            
            <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={["Numberof"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
            />
        </Card>
        </div>
    </>
    )
}