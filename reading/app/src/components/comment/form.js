import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <form>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>

          <label>
            <span>Make a comment</span>
            <textarea></textarea>
          </label>

          <button className="btn">Send</button>
        </form>
      </div>
    )
  }
}

export default Form