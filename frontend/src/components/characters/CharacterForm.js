import React, { Component } from 'react';
import { Card, Form, Input } from 'antd';
import axios from 'axios';

class CharacterForm extends Component {
  state = {
    character: {
      name: '',
      gender: '',
      ethnicity: '',
      image: '',
      physique: '',
      hair: ''
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { character } = this.state;
    axios
      .post('http://localhost:3000/api/characters', character)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          character: {
            name: '',
            gender: '',
            ethnicity: '',
            image: '',
            physique: '',
            hair: ''
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleInputs = (e) => {
    const { character } = this.state;
    const key = e.target.name;
    character[key] = e.target.value;
    this.setState({ character });
  };

  render() {
    const { character } = this.state;
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'peru'
        }}
      >
        <Card title="Create character" style={{ width: '50vw' }}>
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
              <Input value={character.name} onChange={this.handleInputs} type="text" name="name" placeholder="Name" />
            </Form.Item>
            <Form.Item>
              <Input
                value={character.gender}
                onChange={this.handleInputs}
                type="text"
                name="gender"
                placeholder="Gender"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={character.ethnicity}
                onChange={this.handleInputs}
                type="text"
                name="ethnicity"
                placeholder="Ethnicity"
              />
            </Form.Item>
            <Form.Item>
              <Input value={character.hair} onChange={this.handleInputs} type="text" name="hair" placeholder="Hair" />
            </Form.Item>
            <Form.Item>
              <Input
                value={character.physique}
                onChange={this.handleInputs}
                type="text"
                name="physique"
                placeholder="Physique"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={character.image}
                onChange={this.handleInputs}
                type="text"
                name="image"
                placeholder="Image URL"
              />
            </Form.Item>
            <Form.Item>
              <Input type="submit" value="Create" />
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default CharacterForm;
