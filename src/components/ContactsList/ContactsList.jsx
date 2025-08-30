import { Component } from "react";
import { ContactsItem } from "../ContactsItem/ContactsItem";
import { List } from "./ContactsListStyled";

export class ContactsList extends Component {
  render() {
    return (
      <>
        <List onClick={this.props.deleteContact}>
          {this.props.contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(this.props.filter.toLowerCase())
            )
            .map((contact) => (
              <ContactsItem key={contact.id} contact={contact} />
            ))}
        </List>
      </>
    );
  }
}
