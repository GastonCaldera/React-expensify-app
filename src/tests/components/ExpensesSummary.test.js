import React from 'react'
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expenseTotal={225}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expenseTotal={22556}/>)
    expect(wrapper).toMatchSnapshot()
})