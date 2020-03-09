import Search from 'react-search';
import React, { Component } from 'react';

class AutoComplete extends Component {
  HiItems(items) {
    console.log(items);
  }

  // TODO:  이 함수는 나중에 필요없으면 삭제해주세요
  setCountry = event => this.props.onChange(event.target.value);

  render() {
    let items = [
      { id: 0, value: 'ruby' },
      { id: 1, value: 'javascript' },
      { id: 2, value: 'lua' },
      { id: 3, value: 'go' },
      { id: 4, value: 'julia' },
    ];
    return (
      <div>
        {/* TODO: input 태그는 나중에 삭제해주세요 */}
        <input type="text" placeholder="임시" onChange={this.setCountry} />
        <Search items={items} />

        <Search
          items={items}
          placeholder="Pick your language"
          maxSelected={3}
          multiple={true}
          onItemsChanged={this.HiItems.bind(this)}
        />
      </div>
    );
  }
}

export default AutoComplete;
