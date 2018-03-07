import React, { Component } from 'react'
import PropTypes from 'prop-types'

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export class MyComponent extends Component {

    static propTypes = {
      render: PropTypes.func.isRequired,
      path: PropTypes.string.isRequired
    }

    state = {
      data: null,
      loading: true
    }

    componentDidMount() {
      this.getData()
    }

    getData = async () => {
      const response = await fetch(this.props.path)
      const data = await response.json()

      await timeout(500)
      
      this.setState({ data, loading: false})
    }

  
    render() {
      const { render, ...props } = this.props

      return this.state.loading ? 
        <span>loading</span> 
        : this.props.render({ data: this.state.data, ...props})
    }
    
} 
  
export class MyNextComponent extends Component {
    static propTypes = {
      children: PropTypes.func.isRequired
    }
    render() {
      const { children, ...props} = this.props
      return children(props)
    }
}