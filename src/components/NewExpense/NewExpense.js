import './NewExpense.css';
import NewExpenseContent from "../Expenses/NewExpenseContent";

const NewExpense = ({onSaveExpenseData}) => {
    const saveExpenseDataHandler = expenseData => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }

        onSaveExpenseData(data);
    }

    return (
        <div className="new-expense">
            <NewExpenseContent onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;