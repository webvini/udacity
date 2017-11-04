import React, { Component } from 'react'

class Form extends Component {

  state = {
    nameError: true,
    commentError: true
  }

  handleName = (el) => {
    let value = el.target.value

    this.setState({
      nameError: (value.length <= 0) ? true : false
    })
  }

  handleComment = (el) => {
    let value = el.target.value

    this.setState({
      commentError: (value.length <= 0) ? true : false
    })
  }

  render() {

    const error = this.state.nameError || this.state.commentError

    return (
      <div className="form-wrapper">
        <form>
          <label>
            <span>Name</span>
            <input type="text" onChange={this.handleName} />
          </label>

          <label>
            <span>Make a comment</span>
            <textarea onChange={this.handleComment}></textarea>
          </label>

          <button className="btn" disabled={error}>Send</button>
        </form>
      </div>
    )
  }
}

export default Form