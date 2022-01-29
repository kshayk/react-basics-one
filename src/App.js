import './App.css';
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Car Insurance', amount: 295.3, date: new Date(2022, 0, 10)},
    {id: 'e2', title: 'House Insurance', amount: 1006.3, date: new Date(2022, 0, 10)},
    {id: 'e3', title: 'Life Insurance', amount: 189.3, date: new Date(2022, 0, 10)},
    {id: 'e4', title: 'Life Insurance', amount: 189.3, date: new Date(2021, 0, 10)}
]

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expenseData => {
        setExpenses(latestList => [expenseData, ...latestList])
    }

    return (
        <div>
            <NewExpense onSaveExpenseData={addExpenseHandler}/>
            <ExpenseList expenseItems={expenses} />
        </div>
    );
}

export default App;
