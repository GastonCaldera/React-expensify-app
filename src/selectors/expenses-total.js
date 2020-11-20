import expenses from "../tests/fixtures/expenses"

export default (expenses) => {
    if (!expenses.length) {
        return 0
    }

    return expenses
        .map((expense) => expense.amount)
        .reduce((sum,value)=>{
            return sum + value
        }, 0)
}