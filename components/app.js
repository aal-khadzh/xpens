import React from 'react';
import Header from './header';
import {Input, InputField, InputButton} from './input';
import {Output, OutputItem} from './output';
import {Balance, BalanceItem} from './balance';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      expense: '',
      arrData: [],
      dialogTrigger: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.getNames = this.getNames.bind(this);
    this.getExpenses = this.getExpenses.bind(this);
    this.getAverageExpenses = this.getAverageExpenses.bind(this);
    this.getSummary = this.getSummary.bind(this);
    this.dialogToggle = this.dialogToggle.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    if (/^\d*\.?\d{0,2}$/g.test(event.target.value) || (event.target.value === '')) {
      this.setState({
        expense: event.target.value
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      name: '',
      expense:''
    });
    this.setState(prevState => ({
      arrData: prevState.arrData.concat({
        name: this.state.name,
        expense: (this.state.expense === '') ? 0 : this.state.expense,
      })
    }));
  }

  handleKeyPress(target) {
    if(target.charCode==13){
      this.handleSubmit(event);
    }

}

  getNames() {
    let names = [];
    this.state.arrData.forEach((dataItem) => {
      names.push(dataItem.name);
    });
    return names;
  }

  getExpenses() {
    let expenses = [];
    this.state.arrData.forEach((dataItem) => {
      expenses.push(Number(dataItem.expense));
    });
    return expenses;
  }

  getAverageExpenses() {
    let aveExpenses = this.getExpenses().reduce((a,b) => a + b, 0) / [...new Set(this.getNames())].length;
    return aveExpenses;
  }

  getSummary() {
    let summary = new Map();
    this.getNames().forEach((value, index) => {
      summary.set(value, (summary.get(value) || 0) + this.getExpenses()[index]);
    })
    return summary
  }

  dialogToggle() {
    this.setState(prevState => ({
      dialogTrigger: !prevState.dialogTrigger
    }));
  }


  render() {
    return(
      <div className='container'>
        <div className='wrapper'>
        <Header/>

            <Input>
              <InputField
                value={this.state.name}
                onKeyPress={(this.state.name !== '') ? this.handleKeyPress : null}
                onChange={(event) => {this.setState({name: event.target.value})}}
                placeholder="Name"
                type="text"
                required={true}
              />

              <InputField
                value={this.state.expense}
                onKeyPress={(this.state.name !== '') ? this.handleKeyPress : null}
                onChange={this.handleChange}
                placeholder="Expense"
                type="number"
                min="0"
              />

              <InputButton
                onClick={this.handleSubmit}
                disabled={(this.state.name === '') ? true : false}
                label='Submit'
              />

              <InputButton
                onClick={this.dialogToggle}
                disabled={(this.state.arrData.length != 0) ? false : true}
                label='Calculate'
              />

              <InputButton
                onClick={() => {this.setState({arrData: []})}}
                disabled={(this.state.arrData.length != 0) ? false : true}
                label='Reset'
              />
            </Input>


            {(this.state.arrData.length !==0) ? (
              <Output>
                {this.state.arrData.map(item => (
                  <OutputItem
                    key={`${item.name}${this.state.arrData.indexOf(item)}${item.expense}`}
                    personName={item.name}
                    personExpense={item.expense}
                    name={this.state.arrData.indexOf(item)}
                    onClick={() => this.setState(prevState => ({arrData: prevState.arrData.filter((outputItemToBeDeleted) => {return outputItemToBeDeleted !== item})}))}
                  />
                ))}
              </Output>
            ) : null}


            <Balance
              isShown={this.state.dialogTrigger}
              onCloseComplete={this.dialogToggle}
            >
              {Array.from(this.getSummary()).map(([key, value]) => (
                <BalanceItem
                  key={key}
                  intent={((value-this.getAverageExpenses()) !== 0) ? (((value-this.getAverageExpenses()) > 0) ? 'success' : 'danger') : 'none'}
                  personName={key}
                  personExpense={value}
                  personBalance={(value - this.getAverageExpenses()).toFixed(2)}
                />
              ))}
            </Balance>


        </div>
      </div>
    )
  }
}

export default App;
