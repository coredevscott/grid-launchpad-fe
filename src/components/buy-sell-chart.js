import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Example = () => {
  return (
    <>
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={300} height={100} data={data}>
        <XAxis dataKey="name" />
        <YAxis dataKey="pv" />

            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#017CFD" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#0B0B0F" stopOpacity={1} />
                </linearGradient>
            </defs>
            <Area type="monotone" dataKey="pv" fillOpacity={0.5} fill="url(#colorUv)" />
        </AreaChart>
    </ResponsiveContainer>
    </>
  );
}

//Example.demoUrl = 'https://codesandbox.io/p/sandbox/tiny-line-chart-5f5vq6';

export default Example;