import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = ({ onSaveData, CancelEditing }) => {
	const [titleChange, setTiteChange] = useState('');

	const [AmountChange, setAmountChange] = useState('');

	const [DateChange, setDateChange] = useState('');

	const ChangeTitle = (e) => {
		setTiteChange(e.target.value);
	};
	const ChangeAmount = (e) => {
		setAmountChange(e.target.value);
	};
	const ChangeDate = (e) => {
		setDateChange(e.target.value);
	};
	const sumbitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: titleChange,
			amount: +AmountChange,
			date: new Date(DateChange),
		};

		onSaveData(expenseData);

		setTiteChange('');
		setAmountChange('');
		setDateChange('');
	};
	return (
		<form onSubmit={sumbitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={titleChange}
						onChange={(e) => {
							ChangeTitle(e);
						}}></input>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={AmountChange}
						onChange={(e) => {
							ChangeAmount(e);
						}}></input>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={DateChange}
						onChange={(e) => {
							ChangeDate(e);
						}}></input>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='button' onClick={CancelEditing}>
					Cancel
				</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
