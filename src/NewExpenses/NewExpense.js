import './NewExpense.css';
import ExpenseForm from './ExepenseForm';
import { useState } from 'react';
const NewExpense = ({ onSaveDataApp }) => {
	const [formVisible, setFormVisible] = useState(false);

	const SaveData = (enterData) => {
		const expenseData = {
			...enterData,
			id: Math.floor(Math.random() * 100),
		};

		onSaveDataApp(expenseData);

		setFormVisible(false);
	};

	const showForm = () => {
		setFormVisible(true);
	};
	const CancelEditing = () => {
		setFormVisible(false);
	};
	return (
		<div className='new-expense'>
			{formVisible ? null : <button onClick={showForm}>Add new Expense</button>}

			{formVisible && (
				<ExpenseForm onSaveData={SaveData} CancelEditing={CancelEditing} />
			)}
		</div>
	);
};
export default NewExpense;
