import React, { PureComponent } from "react";
import "./EditableCell.scss";

export default class EditableCell extends PureComponent {
  state = {
    value: this.props.cellData
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });

    this.props.column.onChange(e.target.value);
  };

  render() {
    return (
      <input
        value={this.state.value}
        onChange={this.handleChange}
        className="editable-cell"
      />
    );
  }
}
