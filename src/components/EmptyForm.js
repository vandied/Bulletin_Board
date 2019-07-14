import React, {Component} from 'react'
import './style.css'

class EmptyForm extends Component{
    constructor(props){
        super(props);
        this.state = {
			title: '',
			text: '',
			phone: '',
			city: ''
    }
}
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value    
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const announ = {
            id: new Date().getTime().toString(),
            title: e.target.title.value,
            text: e.target.text.value,
            phone: e.target.phone.value,
            city: e.target.city.value 
        }
        var announArray = JSON.parse(localStorage.getItem("announcements") || []);
        announArray.push(announ);
        localStorage.setItem("announcements", JSON.stringify(announArray));
        console.log(announArray);
        this.setState({
			title: '',
			text: '',
			phone: '',
			city: ''
       })
    }
    

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)} 
                  encType="multitype/form-data" 
                  id="emptyForm">
            <div className="formField">
                <label htmlFor="title">Заголовок</label> <br/>
                <input className="input oneLineField" 
                       type="text" 
                       name="title" 
                       value={this.state.title}
                       onChange={event => this.handleChange(event)}/>
                <span className="help"></span>
            </div>
            <div className="formField">
                <label htmlFor="text">Текст объявления</label> <br/>
                <input className="input textField" 
                       type="text" 
                       name="text" 
                       value={this.state.text}
                       onChange={event => this.handleChange(event)}/>
                <span className="help"></span>
            </div>
            <div className="formField">
                <label htmlFor="phone">Телефон</label> <br/>
                <input className="input oneLineField" 
                       type="tel" 
                       name="phone" 
                       value={this.state.phone}
                       onChange={event => this.handleChange(event)}/>
                <span className="help"></span>
            </div>
            <div className="formField" required>
                <label htmlFor="city">Город</label> <br/>
                <select className="oneLineField"  
                        name="city" 
                        size="1"
                        value={this.state.city}
                       onChange={event => this.handleChange(event)}>
                    <option className="defOption" value="" ></option>
                    <option value="Москва">Москва</option>
                    <option value="Хабаровск">Хабаровск</option>
                    <option value="Чебоксары">Чебоксары</option>
                </select>
                <span className="help"></span>
            </div>
            <div className="formField">
                <button className="sendButton" type="submit">Подать</button>
            </div>   
            </form>
        )
    }
}
export default EmptyForm