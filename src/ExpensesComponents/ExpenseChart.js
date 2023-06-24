import Graph from '../Graph/Graph';
const ExpenseChart = ({ expenses }) => {
	const chartDatapoints = [
		{ label: 'jan', value: 0 },
		{ label: 'feb', value: 0 },
		{ label: 'march', value: 0 },
		{ label: 'apr', value: 0 },
		{ label: 'may', value: 0 },
		{ label: 'jun', value: 0 },
		{ label: 'jul', value: 0 },
		{ label: 'aug', value: 0 },
		{ label: 'sep', value: 0 },
		{ label: 'oct', value: 0 },
		{ label: 'nov', value: 0 },
		{ label: 'dec', value: 0 },
	];
	for (const expense of expenses) {
		const expenseMonth = expense.date.getMonth();
		chartDatapoints[expenseMonth].value += expense.amount;
	}

	return <Graph dataPoints={chartDatapoints}></Graph>;
};
export default ExpenseChart;
