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
    },
    form: {
      title: '',
      button: '', 
      endpoint: ''
    }
  };

  componentDidMount() {
    const { params } = this.props.match
    if (params.id) {
      axios.get(`http://localhost:3000/api/characters/${params.id}`)
      .then(({ data: { character }}) => this.setState({ character }))
      this.setState({ form: { title: 'Edit', button: 'Edit', endpoint: `/characters/${params.id}` } })
    } else {
      this.setState({ form: { title: 'Create', button: 'Create', endpoint: '/characters/' } })
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { character, form } = this.state;
    if (form.title === 'Edit') {
      axios.put(`http://localhost:3000/api/${form.endpoint}`, character)
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
        this.props.history.push('/characters')
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
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
        this.props.history.push('/characters')
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  handleInputs = (e) => {
    const { character } = this.state;
    const key = e.target.name;
    character[key] = e.target.value;
    this.setState({ character });
  };

  render() {
    const { character, form } = this.state;
    console.log(this.props)
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
        <Card title={form.title} style={{ width: '50vw' }}>
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
              <Input type="submit" value={form.button} />
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default CharacterForm;
