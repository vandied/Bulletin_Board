import React, { Component } from 'react';
import Form from './Form';
import './style.css';
export default class ListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: this.props.listAnnoun,
      editform: this.props.editItem,
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillReceiveProps(nextProps) {
    if (nextProps.listAnnoun !== this.state.forms) {
      this.setState({ forms: nextProps.listAnnoun });
    }
  }
  handleClickDel(item) {
    let array = JSON.parse(localStorage.getItem('announcements') || []);
    let index = array.findIndex((x) => x.id === item.id);
    array.splice(index, 1);
    localStorage.setItem('announcements', JSON.stringify(array));
    this.setState({
      forms: JSON.parse(localStorage.getItem('announcements') || []),
    });
  }
  handleClickEdit(item) {
    this.props.editItem(item);
    this.handleClickDel(item);
  }
  render() {
    const formElements = this.state.forms.map((item) => (
      <li key={item.id} className="li_item">
        <Form
          announcement={item}
          onButtonClickDelete={this.handleClickDel.bind(this, item)}
          onButtonClickEdit={this.handleClickEdit.bind(this, item)}
        />
      </li>
    ));

    return <ul>{formElements}</ul>;
  }
}
