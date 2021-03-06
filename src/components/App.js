import React, { Component } from 'react';
import './style.css';
import EmptyForm from './EmptyForm';
import ListForm from './ListForms';

// для наглядности добавила в localstorage 2 объявления
var announArray = [
  {
    id: '18764382461dchash',
    title: 'Продам собаку',
    text: 'Станет отличным другом, к лотку приучена',
    phone: '+7 (901) 100-00-00',
    city: 'Москва',
  },
  {
    id: 'jfjdfhkdslfdk54',
    title: 'Продам длинный поводок',
    text:
      'Цвет чёрный, размер М, подходит для собак любых пород, кроме декоративных',
    phone: '+7 (901) 100-00-00',
    city: 'Москва',
  },
];
localStorage.setItem('announcements', JSON.stringify(announArray));
class App extends Component {
  state = {
    dataset: JSON.parse(localStorage.getItem('announcements') || []),
    editAnnoun: '',
  };
  updateData = (value) => {
    this.setState({
      dataset: value,
    });
  };
  editData = (item) => {
    this.setState({
      editAnnoun: item,
    });
  };
  componentDidMount() {}
  componentDidUpdate() {}
  render() {
    return (
      <div className="container">
        <div className="addAnnouncement">
          <h1>Подать объявление</h1>
          <EmptyForm
            updateData={this.updateData}
            editData={this.state.editAnnoun}
          />
        </div>
        <div className="existsForms">
          <h3 className="announcement__title">Объявление</h3>
          <ListForm listAnnoun={this.state.dataset} editItem={this.editData} />
        </div>
      </div>
    );
  }
}

export default App;
