import React, {PureComponent} from 'react'
import Form from './Form'
import './style.css'

export default class ListForm extends PureComponent {
	constructor(props){
		super(props);
		this.state = {
			forms: JSON.parse(localStorage.getItem("announcements") || [])
		};
	}

	componentDidMount() {
		console.log('mount')

  }

	componentDidUpdate(){
		console.log('upd')
	}

	handleClick(item){
		let array = JSON.parse(localStorage.getItem("announcements") || []);
		let index = array.findIndex(x=>x.id===item.id);
		array.splice(index,1);
		localStorage.setItem("announcements", JSON.stringify(array));
		this.setState({
			forms: JSON.parse(localStorage.getItem("announcements") || [])
		});
		console.log(JSON.parse(localStorage.getItem("announcements") || []));
	}
  render() {
    const formElements = this.state.forms.map((item) =>
      <li key = {item.id} className="li_item">
        <Form announcement = {item}
              onButtonClick={this.handleClick.bind(this,item)}/>
      </li>)
        
      return (
        <ul>
          {formElements}
        </ul>
      )
  } 
}