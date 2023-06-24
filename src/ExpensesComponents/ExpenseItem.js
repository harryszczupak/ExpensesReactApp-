import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
const ExpenseItem = ({ expense }) => {
	return (
		<Card className='expense-item '>
			<ExpenseDate date={expense.date}></ExpenseDate>
			<div className='expense-item_desc'>
				<h2>{expense.title}</h2>
				<div className='expense-item_price'>${expense.amount}</div>
			</div>
		</Card>
	);
};
export default ExpenseItem;
