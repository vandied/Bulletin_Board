import React, {Component} from 'react'

class Form extends Component {
  render(){
	const {announcement, onButtonClickDelete, onButtonClickEdit} = this.props
	  		
  	  return (
        <div className="form">
          <div className="form__item announ">
						<p className="form__title">{announcement.title}</p>
						<p className="form__text">{announcement.text}</p>
						<img src={("http://placehold.it/330x250.jpg")} alt=''/>
					</div>
					<div className="form__item announ__info">
						<div className="info">
							<div className="info__item">
								<span><img className="info__item__img" src={require("../icon-2.svg")} alt={"phone"}/>{announcement.phone}</span>
							</div>
							<div className="info__item">
								<span><img className="info__item__img" src={require("../icon-1.svg")} alt={"phone"}/>{announcement.city}</span>
							</div>
						</div>
						<div className="btns">
						<div className="edit">
							<button className="btn" onClick={onButtonClickEdit}>Редактировать</button>
						</div>
						<div className="delete">
							<button className="btn btn--red" onClick={onButtonClickDelete}>Удалить</button>
						</div>
						</div>
					</div>
        </div>
      )    
  }
}
export default Form