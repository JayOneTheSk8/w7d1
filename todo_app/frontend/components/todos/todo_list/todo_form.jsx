import React from 'react';
import { connect } from 'react-redux';
import { receiveTodo } from '../../../actions/todo_actions';
import util from '../../../util/todo_util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: util.uniqueId(),
      title: '',
      body: '',
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({ title: '', body: '', id: util.uniqueId()});
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title: </label>
        <input type='text' onChange={this.update('title')} value={this.state.title}/>

        <label>Body: </label>
        <input type='text' onChange={this.update('body')} value={this.state.body}/>

        <button>Submit Todo</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
