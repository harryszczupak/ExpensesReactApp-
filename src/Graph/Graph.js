import GraphBar from './GraphBar';
import './Graph.css';
const Graph = ({ dataPoints }) => {
	const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);

	const totalMaximum = Math.max(...dataPointsValues);

	return (
		<div className='chart'>
			{dataPoints.map((data) => (
				<GraphBar
					value={data.value}
					maxValue={totalMaximum}
					key={data.label}
					label={data.label}></GraphBar>
			))}
		</div>
	);
};
export default Graph;
