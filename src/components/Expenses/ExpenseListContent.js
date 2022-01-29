import ExpenseItem from "./ExpenseItem";
import './ExpenseListContent.css';

const ExpenseListContent = ({expenseItems}) => {
    if (expenseItems.length === 0) {
        return <h2 className="expenses-list__fallback">No items found</h2>;
    }

    return <ul className="expenses-list">
        {expenseItems.map(item => (
            <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        ))}
    </ul>;
}

export default ExpenseListContent;