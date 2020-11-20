import { format } from 'numeral'
import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount == 1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(expenseTotal/100).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
        </div>
    )
}

const mapStateProps = (state) => {
    const visibleExpense = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpense.length,
        expenseTotal: selectExpensesTotal(visibleExpense)
    }
}

export default connect(mapStateProps)(ExpensesSummary)