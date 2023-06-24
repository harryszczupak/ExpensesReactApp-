import Expenses from './ExpensesComponents/Expenses';
import NewExpense from './NewExpenses/NewExpense';
import './App.css';
import { useState } from 'react';

function App() {
	const [newExpense, setNewExpense] = useState([]);
	const saveData = (enterData) => {
		setNewExpense((prev) => {
			return [enterData, ...prev];
		});
	
	};

	return (
		<div className='App'>
			<h1>Let's get started!</h1>
			<NewExpense onSaveDataApp={saveData} />
			<Expenses item={newExpense}></Expenses>
		</div>
	);
}

export default App;
