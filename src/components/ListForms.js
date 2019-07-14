import React, {Component} from 'react'
import Form from './Form'
import './style.css'

export default class ListForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			forms: this.props.listAnnoun
		};
	}
	componentDidMount() {
  	}
	componentDidUpdate(){

	}
	componentWillReceiveProps(nextProps){
		if(nextProps.listAnnoun!==this.state.forms){
			console.log(nextProps.listAnnoun)
			this.setState({forms: nextProps.listAnnoun})
		}
	}
	handleClick(item){
		let array = JSON.parse(localStorage.getItem("announcements") || []);
		let index = array.findIndex(x=>x.id===item.id);
		array.splice(index,1);
		localStorage.setItem("announcements", JSON.stringify(array));
		this.setState({
			forms: JSON.parse(localStorage.getItem("announcements") || [])
		});
	}
  render() {
	// console.log('--',this.state.forms)

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