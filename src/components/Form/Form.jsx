import { Component } from "react";
import img from "../../imgs/phone.png";
import {
  Div,
  Img,
  Title,
  Forma,
  Label,
  Input,
  Button,
  ImgWrap,
  Wrap,
} from "./FormStyled";

export class Form extends Component {
  render() {
    return (
      <Div>
        <Forma onSubmit={this.props.addContact}>
          <Title>Phonebook</Title>
          <Label>
            Name
            <Input
              value={this.props.name}
              onChange={this.props.changeValue}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+((['\- ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Anna"
            />
          </Label>
          <Label>
            Number
            <Input
              value={this.props.number}
              onChange={this.props.changeValue}
              type="tel"
              name="number"
              pattern="^\+?\d{1,4}([.\s\-]?\(?\d{1,3}\)?)*([.\s\-]?\d{1,4}){1,3}$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="0555417683"
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Forma>
        <Wrap>
          <ImgWrap src={img} alt="img" />
          <Img src={img} alt="img" />
        </Wrap>
      </Div>
    );
  }
}
