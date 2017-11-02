import React, { Component } from 'react'
import './style.css'

class Category extends Component {

  categoryChanger = () => (e) => {
    let value = e.target.value
  }

  render() {

    const { categories } = this.props.categories

    return (
      <select className="category-select" onChange={this.categoryChanger()}>
        <option>All category</option>
        { categories.map(category => (
          <option key={category.name} value={category.name}>{category.name}</option>
        )) }
      </select>
    )
  }
}

export default Category