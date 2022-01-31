import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints}) => {
    const datapointValues = dataPoints.map(dataPoint => dataPoint.value);
    /**
     * the max function requires each number as one parameter and the datapointValues is an array.
     * So to each value in the array a single argument, we can use the spread (...) operator on the array.
     *
     */
    const maxValue = Math.max(...datapointValues);

    return <div className="chart">
        {dataPoints.map(dataPoint => (
            <ChartBar
                value={dataPoint.value}
                maxValue={maxValue}
                label={dataPoint.label}
                key={dataPoint.label} />
        ))}
    </div>
}

export default Chart;