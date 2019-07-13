import React, {Component} from 'react'
import './style.css'

class EmptyForm extends Component{
    render(){
        return(
            <form encType="multitype/form-data" id='emptyForm'>
            <div className="formField">
                <label htmlFor="title">Заголовок</label> <br/>
                <input className="input oneLineField" type="text" name="title" placeholder=" " minLength="3" maxLength="140" required/>
                <span className="help"></span>
            </div>
            <div className="formField">
                <label htmlFor="text">Текст объявления</label> <br/>
                <input className="input textField" type="text" name="text" placeholder=" " minLength="3" maxLength="300" required/>
                <span className="help"></span>
            </div>
            <div className="formField">
                <label htmlFor="phone">Телефон</label> <br/>
                <input className="input oneLineField" type="tel" name="phone" required placeholder=" "  minLength="18" maxLength="18"/>
                <span className="help"></span>
            </div>
            <div className="formField" required>
                <label htmlFor="city">Город</label> <br/>
                <select className="oneLineField"  name="city" size="1">
                    <option className="defOption" value="" ></option>
                    <option value="msc">Москва</option>
                    <option value="khv">Хабаровск</option>
                    <option value="csy">Чебоксары</option>
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