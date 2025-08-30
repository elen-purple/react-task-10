import { Component } from "react";
import { Button, Item, Num, Title } from "./ContactsItemStyled";

export class ContactsItem extends Component {
  render() {
    return (
      <Item id={this.props.contact.id}>
        <div>
          <Title>{this.props.contact.name}</Title>
          <Num>{this.props.contact.number}</Num>
        </div>
        <Button data-action="delete" type="button">
          Delete
        </Button>
      </Item>
    );
  }
}
