import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelected } from './../../actions'
import './style.css'

class Category extends Component {

  componentDidMount() {
    const { setSelected } = this.props
    setSelected('category', this.getLocation())
  }

  categoryChanger = () => (e) => {
    let value = e.target.value
    const { setSelected } = this.props

    setSelected('category', value)
    this.goTo(value)
  }

  getLocation = () => {
    const { location } = this.props.history
    return location.pathname.replace("/", "")
  }

  goTo = (category) => {
    this.props.history.push(`/${category}`)
  }

  render() {
    const { categories } = this.props.categories

    return (
      <select className="category-select" defaultValue={this.getLocation()} onChange={this.categoryChanger()}>
        <option value="all">All category</option>
        { categories.map(category => (
          <option key={category.name} value={category.name}>{category.name}</option>
        )) }
      </select>
    )
  }
}

function mapStateToProps({ selected }) {
  return {
    selected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSelected: (target, object) => dispatch(setSelected(target, object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);