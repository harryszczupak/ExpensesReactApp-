import Card from './Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseChart from './ExpenseChart';
const Expenses = ({ item }) => {
	const [selectedYear, setSelectedYear] = useState('2023');
	const changeFilter = (selectedYear) => {
		setSelectedYear(selectedYear);
	};

	const FilteredExpenses = item.filter(
		(year) => selectedYear == year.date.getFullYear()
	);

	return (
		<Card className='expenses'>
			<ExpensesFilter selected={selectedYear} onChangeFilter={changeFilter} />
			<ExpenseChart expenses={FilteredExpenses}></ExpenseChart>
			<ExpensesList item={FilteredExpenses}></ExpensesList>
		</Card>
	);
};
export default Expenses;
