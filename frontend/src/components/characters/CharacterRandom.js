import React, { Component } from 'react';
import { Card } from 'antd';
import axios from 'axios';

export default class CharacterRandom extends Component {
  state = {
    character: {}
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/characters/random')
      .then(({ data }) => {
        this.setState({ character: { ...data.character } });
      })
      .catch((error) => {});
  }

  render() {
    const { character } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100vh'
        }}
      >
        <Card
          title={character.name}
          style={{ width: '25%' }}
          cover={<img src={character.image} alt={character.name} height="500px" />}
        ></Card>
      </div>
    );
  }
}
