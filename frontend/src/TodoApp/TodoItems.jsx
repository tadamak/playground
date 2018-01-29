import React, { Component } from "react"

export default class TodoItems extends Component {
  constructor(props, context) {
    super(props, context)
    this.createTask = this.createTask.bind(this)
  }

  delete(key) {
    this.props.delete(key)
  }

  createTask(item) {
    console.log(item)
    return <li onClick={() => this.delete(item.key)}
               key={item.key}>{item.text}</li>
  }

  render() {
    const listItems = this.props.entries.map(this.createTask);
    return (
      <ul className="theList">
        {listItems}
      </ul>
    )
  }
}
