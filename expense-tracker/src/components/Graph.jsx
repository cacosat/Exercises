import React from "react";
import { Chart } from "react-google-charts";

export default function Graph(props) {
    // hooks

    const data = [
        [
          'Day',
        //   'total',
          'Alojamiento',
          'Comida',
          'Movilización',
          'Entretenimiento',
          'Otros',
        ],
        [1, 168990, 7800, 15620, 25800, 8000],
        [2, 0, 9500, 130000, 15000, 15000],
        [3, 0, 12000, 10590, 6700, 19852],
        [4, 60000, 41000, 11000, 27000, 2000],
        [5, 0, 28000, 8000, 5800, 8000],
        [6, 0, 9800, 3000, 29000, 3000],
        [7, 53000, 19700, 104000, 36650, 10568],
        [8, 0, 10100, 19000, 28000, 20560],
        [9, 45000, 9900, 36500, 2000, 38520],
        [10, 37000, 15200, 7700, 10365, 8000],
        [11, 56000, 5500, 86000, 63000, 85000]

        // With totalValue at index[1]
        // [1, 226210, 168990, 7800, 15620, 25800, 8000],
        // [2, 395710, 0, 9500, 130000, 15000, 15000],
        // [3, 444852, 0, 12000, 10590, 6700, 19852],
        // [4, 828852, 60000, 41000, 11000, 270000, 2000],
        // [5, 878652, 0, 28000, 8000, 5800, 8000],
        // [6, 923452, 0, 9800, 3000, 29000, 3000],
        // [7, 1147370, 53000, 19700, 104000, 36650, 10568],
        // [8, 1405030, 0, 10100, 19000, 28000, 200560],
        // [9, 1536950, 45000, 9900, 36500, 2000, 38520],
        // [10, 1615215, 37000, 15200, 7700, 10365, 8000],
        // [11, 1910715, 56000, 5500, 86000, 63000, 85000]
      ];
    
    const options = {
        backgroundColor: '#000000',
        hAxis: {
            textStyle: { color: '#FFFFFF' }, // Custom color for horizontal axis labels
            gridlines: { color: 'transparent' },
        },
        vAxis: {
            textStyle: { color: '#FFFFFF' }, // Custom color for vertical axis labels
            gridlines: { color: '#27272A' },
            viewWindow: {
                min: 0,
                max: 200000
              },
        },
        colors: ['white', 'red', 'blue'],
        curveType: "function",
        legend: { 
            position: "top", 
            textStyle: {color: '#FFFFFF'} 
        },
        colors: ['#D32F2F', '#1976D2', '#388E3C', '#FBC02D', '#7B1FA2'],
    };

    return <>
    <div  className="flex flex-col gap-8">
      <div className='text-2xl text-start'>
        Gráfico de Gastos
      </div>
      <div className={`flex flex-col w-[${props.width}] justify-center py-4 border-2 rounded-2xl border-stone-700 overflow-hidden`}>
        <Chart
            chartType="LineChart"
            width={props.width}
            height= "350px"
            data={data}
            options={options}
        />
      </div>
    </div>
    </>
}