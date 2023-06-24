import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = ({ item }) => {
	if (item.length == 0) {
		return <h2 className='expenses-list__fallback'>Expense not found</h2>;
	}

	return (
		<ul className='expense-list'>
			{item.map((expense) => {
				return <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>;
			})}
		</ul>
	);
};
export default ExpensesList;
