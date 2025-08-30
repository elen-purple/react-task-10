import { Component } from "react";
import { Section } from "./components/Section/Section";
import { Form } from "./components/Form/Form";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { nanoid } from "nanoid";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Title } from "./components/ContactsList/ContactsListStyled";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  changeValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = (e) => {
    e.preventDefault();
    const array = [...this.state.contacts];
    if (array.find((item) => item.name === this.state.name)) {
      alert(`${this.state.name} is alredy in contacts`);
    }
    array.push({
      id: nanoid(4),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ contacts: array, name: "", number: "" });
  };

  deleteContact = (e) => {
    if (e.target.dataset.action === "delete") {
      const array = [...this.state.contacts];
      array.splice(
        array.indexOf(
          array.find((item) => item.id === e.target.parentElement.id)
        ),
        1
      );
      this.setState({ contacts: array });
    }
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Section title="Phonebook">
          <Form
            changeValue={this.changeValue}
            addContact={this.addContact}
            name={this.state.name}
            number={this.state.number}
          />
        </Section>
        <Section title="Contacts">
          <Title>Contacts</Title>
          <Filter filter={this.state.filter} changeValue={this.changeValue} />
          <ContactsList
            deleteContact={this.deleteContact}
            filter={this.state.filter}
            contacts={this.state.contacts}
          />
        </Section>
      </>
    );
  }
}

export default App;
