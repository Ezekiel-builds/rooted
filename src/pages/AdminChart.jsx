import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

function AdminChart() {
    const data = [
        {month: 'Jan', checkins: 30, readings: 20},
        {month: 'Feb', checkins: 40, readings: 30},
        {month: 'Mar', checkins: 35, readings: 25}
    ]
    return (
        <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="checkins" fill="#8884d8" />
            <Bar dataKey="readings" fill="#82ca9d" />
        </BarChart>
    )
}

export default AdminChart;