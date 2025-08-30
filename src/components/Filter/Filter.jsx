import { Component } from "react";
import { Input } from "./FilterStyled";

export class Filter extends Component {
  render() {
    return (
      <label>
        <Input
          type="text"
          name="filter"
          placeholder="Anna Havrylova"
          onInput={this.props.changeValue}
          value={this.props.filter}
        />
      </label>
    );
  }
}
