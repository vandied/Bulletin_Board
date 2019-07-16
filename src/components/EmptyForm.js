import React, {Component} from 'react'
import './style.css'
import FormErrors from './FormErrors'

class EmptyForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
			title: '',
			text: '',
			phone: '',
			city: '',
			titleValid: false,
      textValid: false,
			phoneValid: false,
			cityValid: false,
			formErrors: {title:'Обязательное полe. Не более 140 символов',
		   						 text:'Не более 300 символов',
									 phone:'Обязательное поле',
									 city:'Обязательное поле'},
			formValid: false,
			editItem: this.props.editData
    }
	}
	componentWillReceiveProps(nextProps){
		let newprops = nextProps.editData;
		if(newprops!==this.state.editItem){
			this.setState({
				title: newprops.title,
				text: newprops.text,
				phone: newprops.phone,
				city: newprops.city,
				titleValid: true,
      	textValid: true,
				phoneValid: true,
				formValid: true,
				cityValid: true,
				editItem: newprops
			})
		console.log(this.state)
		}
	}
	handleChange (e) {
    const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value},
			      				() => { this.validateField(name, value) });
	}

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let titleValid = this.state.titleValid;
		let textValid = this.state.textValid;
		let cityValid = this.state.cityValid;
		let phoneValid = this.state.phoneValid;

    switch(fieldName) {
      case 'title':
				titleValid = (value.length >1) ;
        fieldValidationErrors.title = titleValid? 'Заполнено' : 'Заполните поле';
        break;
      case 'text':
				textValid = (value.length >1);
        fieldValidationErrors.text = textValid ? 'Заполнено': 'Заполните поле';
				break;
			case 'phone':
				phoneValid = value.length >=11;
        fieldValidationErrors.phone = phoneValid ? 'Заполнено': 'Заполните поле';
				break;
			case 'city':
				cityValid = value.length >0;
        fieldValidationErrors.phone = cityValid ? 'Заполнено': 'Заполните поле';
        break;
      	default:
        break;
    }
  	this.setState({formErrors: fieldValidationErrors,
                    titleValid: titleValid,
										textValid: textValid,
										phoneValid: phoneValid,
										cityValid:cityValid
                  }, this.validateForm);	
  }
  	validateForm() {
    	this.setState({formValid: this.state.titleValid &&
                              this.state.textValid && this.state.phoneValid && this.state.cityValid});
  	}

    
    handleSubmit(e){
			e.preventDefault();
			if (this.state.formValid) {
				const announ = {
          id: new Date().getTime().toString(),
          title: e.target.title.value,
          text: e.target.text.value,
          phone: e.target.phone.value,
          city: e.target.city.value 
        }
      var announArray = JSON.parse(localStorage.getItem("announcements") || []);
      announArray.unshift(announ);
      localStorage.setItem("announcements", JSON.stringify(announArray));
			this.props.updateData(announArray);
      this.setState({ title: '',
											text: '',
											phone: '',
											city: '',
											titleValid: false,
      								textValid: false,
											phoneValid: false,
											cityValid: true,
											formErrors: {title:'Обязательное поле \nНе более 140 символов',
												 					 text:'Не более 300 символов',
												 					 phone:'Обязательное поле'},
											formValid: false,

      })} else {
				let fieldValidationErrors = this.state.formErrors;
				if(e.target.title.value==='') (fieldValidationErrors.title = 'Заполните поле'); 
				if(e.target.text.value==='') (fieldValidationErrors.text = 'Заполните поле');
				if(e.target.phone.value==='') (fieldValidationErrors.phone = 'Заполните поле'); 
				if(e.target.city.value==='') (fieldValidationErrors.city = 'Заполните поле'); 
				this.setState({formErrors: fieldValidationErrors })
			}
    }
    render(){
			return(
            <form onSubmit={this.handleSubmit.bind(this)} 
                  encType="multitype/form-data" 
                  id="emptyForm">
            <div className="form__field">
							<div>
                <label htmlFor="title">Заголовок</label> <br/>
                <input className="input oneline__field" 
                       type="text" 
                       name="title" 
                       value={this.state.title}
                       onChange={event => this.handleChange(event)}/>  
						</div>     
               <FormErrors formErrors={this.state.formErrors.title} />
            </div>

            <div className="form__field">
							<div>
                <label htmlFor="text">Текст объявления</label> <br/>
                <input className="input text__field" 
                       type="text" 
                       name="text" 
                       value={this.state.text}
                       onChange={event => this.handleChange(event)}/>
								</div>
                <FormErrors formErrors={this.state.formErrors.text} />
            </div>
            <div className="form__field">
							<div>
                <label htmlFor="phone">Телефон</label> <br/>
                <input className="input oneline__field" 
                       type="tel" 
                       name="phone" 
                       value={this.state.phone}
                       onChange={event => this.handleChange(event)}/>
								</div>
                <FormErrors formErrors={this.state.formErrors.phone} />
            </div>
            <div className="form__field">
							<div className="form__field">
								<div>
                <label htmlFor="city">Город</label> <br/>
                <select className="oneline__field"  
                        name="city" 
                        size="1"
                        value={this.state.city}
                       onChange={event => this.handleChange(event)}>
                    <option className="defOption" value="" ></option>
                    <option value="Москва">Москва</option>
                    <option value="Хабаровск">Хабаровск</option>
                    <option value="Чебоксары">Чебоксары</option>
                </select>
								</div>
								<FormErrors formErrors={this.state.formErrors.city} />
								</div>
	            </div>
            <div className="form__field">
                <button className="send__button" type="submit">Подать</button>
            </div>   
            </form>
        )
    }
}
export default EmptyForm