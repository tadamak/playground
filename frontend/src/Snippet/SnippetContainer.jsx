import React, {Component} from "react";
import './SnippetContainer.css'

export default class SnippetContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      content: "..."
    }
    this.loadSnippet = this.loadSnippet.bind(this)
  }

  loadSnippet(e) {
    e.preventDefault()
    fetch(`${this._inputSid.value}.json`)
      .then(res => {
        if (!res.ok) {
          console.error("Something wrong")
        } else {
          res.json().then(json => {
            console.log(json)
            this.setState({
              content: json.content
            })
          })
        }
        this._inputSid.value = ""
      }).catch(err => {
        console.error("server error has occurred!! " + err.message)
      })
  }

  render() {
    return (
      <div className="SnippetContainer">
        <div className="header">
          <form onSubmit={this.loadSnippet}>
            <input ref={(x) => this._inputSid = x}
                   placeholder="enter sid"></input>
            <button type="submit">load</button>
          </form>
        </div>
        <pre>{this.state.content}</pre>
      </div>
    )
  }
}
