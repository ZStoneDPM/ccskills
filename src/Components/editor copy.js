import React, { Component } from "react";

class TextField extends Component{
    render() {
      var text = this.props.text
      return (
        <td>
          <div>{text}</div>
        </td>
      )
    }
  }
  
  class TextInput extends Component {
    render() {
         const {value, onChange, name} = this.props
      return (
        <td>
          <input type="text" 
            value={value}
            onChange={onChange}
            name={name}
          />
        </td>
      )
    }
  }
  
  class TableRow extends Component {
  
    constructor(props) {
      super(props)
      this.state={
        Editing:false,
        name : this.props.data.Name,
        last: this.props.data.Last
      }
      this.toggleEditing = this.toggleEditing.bind(this)
      this.onChange = this.onChange.bind(this)
      this.saveChanges = this.saveChanges.bind(this)
    }
  
    toggleEditing() {
    console.log('toggle')
      let Editing = !this.state.Editing
      this.setState({
        Editing: Editing
      })
    }
    
    onChange(event){
      this.setState({
        [event.target.name] : event.target.value
      })
    }
    
    saveChanges(){
      const {name , last} = this.state
      this.toggleEditing()
      this.props.saveChanges({
          key: this.props.data.Name,
        name,
        last
      }) 
    }
  
    render() {
      const data = this.props.data
      let Editing = this.state.Editing
      if (Editing) {
        return (
          <tr>
            <TextInput value={this.state.name} name="name" onChange={this.onChange}></TextInput>
            <TextInput value={this.state.last} name="last" onChange={this.onChange} ></TextInput>
            <td>
              <button onClick={this.saveChanges} >Done</button>
            </td>
          </tr>
        )
      }
      else {
        return (
          <tr>
            <TextField text={data.Name} ></TextField>
            <TextField text={data.Last} ></TextField>
            <td>
              <button onClick={this.toggleEditing}>Edit</button>
            </td>
          </tr>
        )
      }
    }
  }
  
  class Table extends Component {
    constructor(props){
      super(props)
      this.state = {
        UsersData: UsersData
      }
      this.saveChanges = this.saveChanges.bind(this)
    }
    
    saveChanges({key, name, last}){
      this.setState(prevState => ({
        UsersData: prevState.UsersData.map(data => {
          if(data.Name === key) return { Name: name, Last: last }
          return data
        })
      }))
    }
    
    render() {
      const rows = [] 
      this.state.UsersData.forEach((data) => {
        rows.push (
          <TableRow
            key={data.Name}
            saveChanges={this.saveChanges}
            data={data}
             />
        )
      })
  
      return (
        <table>
          <tbody>{rows}</tbody>
        </table>
      )
    }
  }
  
  let UsersData = [
    {Name: 'AAA',Last:"1111"},
    {Name: 'BBBB',Last:"222"},
  ]
  
  class App extends Component {
    render() {
      return(
        <div>
          <Table UsersData={UsersData} />
        </div>
      )
    }
  }

  export default App;