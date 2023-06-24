import './ExpenseDate.css';
const ExpenseDate = ({ date }) => {
	return (
		<div className='expense-date'>
			<div className='expense-date-month'>
				{date.toLocaleString('en-US', { month: 'long' })}
			</div>
			<div className='expense-date-year'>{date.getFullYear()}</div>
			<div className='expense-date-day'>
				{date.toLocaleString('en-US', { day: '2-digit' })}
			</div>
		</div>
	);
};
export default ExpenseDate;
