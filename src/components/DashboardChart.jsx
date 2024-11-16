import PropTypes from "prop-types";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Computers",
    price: 494,
    total: 372,
    rating: 3.7,
  },
  {
    name: "Phones",
    price: 251,
    total: 467,
    rating: 4.6,
  },
  {
    name: "Smart watches",
    price: 61,
    total: 214,
    rating: 2.9,
  },
  {
    name: "Chargers",
    price: 134,
    total: 303,
    rating: 5,
  },
  {
    name: "Power Banks",
    price: 390,
    total: 518,
    rating: 4.1,
  },
];

export default function DashboardChart() {
  return (
    <ResponsiveContainer
      className="mt-10 w-full rounded-xl bg-base-100"
      height={500}
    >
      <ComposedChart
        className="w-full"
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis dataKey="price" />
        <Tooltip />
        <Legend content={CustomLegend} />
        <Area type="linear" dataKey="price" fill="#BF87EE" stroke="#BF87EE" />
        <Bar dataKey="total" barSize={40} fill="#9538E2" />
        <Scatter dataKey="rating" fill="#FF0000" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

function CustomLegend({ payload = [] }) {
  return (
    <div className="mt-5 flex items-center justify-center gap-5">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center gap-1">
          <span
            className="h-4 w-4"
            style={{
              backgroundColor: entry.color,
              borderRadius: "30%",
            }}
          />
          <span className="text-sm capitalize">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

CustomLegend.propTypes = { payload: PropTypes.array };
