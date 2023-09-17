import { 
    Card,
    Text,
    Metric,
    Flex,
    ProgressBar,
    Title,
    BarChart,
    DonutChart, 
    LineChart, 
    Subtitle, 
    Bold, 
    Italic 
} from "@tremor/react";


const dataFormatter = (number: number) => {
    return  Intl.NumberFormat("us").format(number).toString();
  };


  const chartdata = [
    {
      name: "Artistas",
      "Cantidad": 20,
    },
    {
      name: "Usuarios",
      "Cantidad": 300,
    },
    {
      name: "Administradores",
      "Cantidad": 2,
    },
  ];
export default function Adminnuevo(){
    //
    return(
    <>
        <div>
            <Card className="max-w-xs mx-auto">
                <Text>Cuadros</Text>
                <Metric>200</Metric>
                <Flex className="mt-4">
                <Text>20% of annual target</Text>
                <Text>$ 225,000</Text>
                </Flex>
                <ProgressBar value={20} className="mt-2" />
            </Card>
        </div>
        <div>
        <Card>
            <Title>Transito</Title>
            <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={["Cantidad"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
            />
        </Card>
        </div>
        <div>
        <Card className="max-w-lg, mt-2, mb-2">
            <Title>Sales</Title>
            <DonutChart
            className="mt-6"
            data={chartdata}
            category="Cantidad"
            index="name"
            valueFormatter={dataFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
        </Card>
        </div>
        <div>
        <Card>
            <Title>Cantidades</Title>
            <LineChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={["Cantidad"]}
            colors={["emerald", "gray"]}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
            />
        </Card>
        </div>
        <div>
        <Metric>Textos</Metric>

        <Title>Como escribir algo en su titulo</Title>

        <Subtitle>Su subtitulo</Subtitle>

        <Text>Que queres escribir</Text>

        <Text>Diferentes <Bold>maneras de </Bold>que aparezcan <Italic>Por pantala</Italic></Text>
        </div>
    </>
    )
}