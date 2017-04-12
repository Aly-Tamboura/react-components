class TodoListItem extends React.Component {
  constructor(props) {
    console.log(props);
    super(props)
    this.state = {
      done: false,
    }
  }

  itemOnClick() {
    console.log(this.state.done)
    this.setState({
      done: !this.done,
    })
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
    }
    return (
      <li style={style} onClick={this.itemOnClick.bind(this)} >{this.props.todo}</li>
    )
  }
}


var TodoList = (props) => (
  <ul>
    {props.todos.map(item => {
      return <TodoListItem todo={item} />
    })}
  </ul>
);

class GroceryList extends React.Component {
  render() {
    return (
      <div>
        <h1>Shopping List</h1>

        <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
      </div>
    );
  }
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));

