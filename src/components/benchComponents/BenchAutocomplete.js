import React, { Component } from 'react'


import { AutoComplete } from 'antd';

function onSelect(value) {
  console.log('onSelect', value);
}
export default class BenchAutocomplete extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: this.props.dataSourceLocation,
    }
  }
  handleSearch = (value) => {
    this.setState({
      options: [this.state.options.find(item=>item===value)
      ]
    });
  }
  render() {
    return (
      <div>
        <AutoComplete
        options={this.state.dataSource}
        style={{ width: '100%' }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
      />
        
      </div>
    )
  }
}
