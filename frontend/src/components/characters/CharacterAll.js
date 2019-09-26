import React, { Component } from 'react';
import { Card } from 'antd';
import axios from 'axios';

export default class CharacterAll extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/characters')
      .then(({ data }) => {
        this.setState({ characters: [...data.characters] });
      })
      .catch((error) => {});
  }

  render() {
    const { characters } = this.state;
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
        {characters.map((character) => (
          <Card title={character.name} style={{ width: '25%' }} cover={<img src={character.image} alt={character.name} height="500px" />}>
            
          </Card>
        ))}
      </div>
    );
  }
}
