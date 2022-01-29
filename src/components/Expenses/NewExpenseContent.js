import ExpenseForm from "../NewExpense/ExpenseForm";
import {useState} from "react";
import './NewExpenseContent.css';

export default function NewExpenseContent({onSaveExpenseData}) {
    const [showForm, setShowForm] = useState(false);

    const showFormChangeHandler = () => {
        setShowForm(currentState => !currentState);
    }

    const saveExpenseDataHandler = data => {
        showFormChangeHandler();
        onSaveExpenseData(data)
    }

    if (!showForm) {
        return <button onClick={showFormChangeHandler} type="button">Add New Expense</button>
    }

    return (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onFormCancel={showFormChangeHandler}/>
    )
}