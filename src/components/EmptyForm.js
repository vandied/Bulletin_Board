import React, {Component} from 'react'
import './style.css'

var announArray = [
    {
        title: 'Продам собаку',
        text: 'Станет отличным другом, к лотку приучена',
        phone: '+7 (901) 100-00-00',
        city: 'Москва'
    },
    {
        title: 'Продам поводок',
        text: 'Цвет чёрный, размер М, подходит для собак любых пород, кроме декоративных',
        phone: '+7 (901) 100-00-00',
        city: 'Москва'
    }
];

class EmptyForm extends Component{
    constructor(){
        super();
        this.state = {
            announcements: announArray,
            newAnnoun: {
                title: '',
                text: '',
                phone: '',
                city: ''
            } 
        };

    }
    render(){
        return(
        <div className="addAnnouncement">
            <h1>
                Подать объявление
            </h1>
            <form encType="multitype/form-data" onSubmit={this.saveData}>
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
        </div>
        )
    }
}
export default EmptyForm