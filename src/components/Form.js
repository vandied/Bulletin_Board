import React, {Component} from 'react'

class Form extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         count: 0
    //     }
	// }
  render(){
	const {announcement, onButtonClick} = this.props
	  		
  	  return (
        <div className="form">
          <div className="form__item announ">
						<p className="form__title">{announcement.title}</p>
						<p className="form__text">{announcement.text}</p>
						<img src={require("../pesel.jpg")} alt=''/>
					</div>
					<div className="form__item announ__info">
						<div className="info">
							<div className="info__item">
								<img src={require("../icon-1.svg")} alt={"phone"}/>
								<span>{announcement.phone}</span>
							</div>
							<div className="info__item">
								<img src={require("../icon-2.svg")} alt={"phone"}/>
								<span>{announcement.city}</span>
							</div>
						</div>
						<div className="btns">
						<div className="edit">
							<button className="btn">Редактировать</button>
						</div>
						<div className="delete">
							<button className="btn btn--red" onClick={onButtonClick}>Удалить</button>
						</div>
						</div>
					</div>
        </div>
      )    
  }
}
export default Form