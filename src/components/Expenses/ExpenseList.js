import './ExpenseList.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpenseListContent from "./ExpenseListContent";
import ExpensesChart from "./ExpensesChart";

function ExpenseList({expenseItems}) {
    const [date, setDate] = useState("");

    const filterDateChangedHandler = currentDate => {
        setDate(currentDate);
    }

    const filteredList = expenseItems.filter(expenseItem => {
        return date === "" || +date === expenseItem.date.getFullYear()
    });

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter selected={date} onFilterDateChanged={filterDateChangedHandler}/>
            </div>
            <ExpensesChart expenses={filteredList}/>
            <ExpenseListContent expenseItems={filteredList} />
        </Card>
    )
}

export default ExpenseList;