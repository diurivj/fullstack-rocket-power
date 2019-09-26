import React, { Component } from 'react';
import { Card, Icon } from 'antd';
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

  deleteCharacter = (id) => {
    axios.delete(`http://localhost:3000/api/characters/${id}`)
    .then(({data}) => {
      this.setState(prevState => {
        return {
          ...prevState,
          characters: prevState.characters.filter(e => e._id !== data.character._id )
        }
      })
    })
    .catch(err => console.log(err))
  }

  editCharacter = (id) => {
    this.props.history.push(`/characters/edit/${id}`)
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
          <Card title={character.name} style={{ width: '25%' }} cover={<img src={character.image} alt={character.name} height="500px" />} actions={[
            <Icon type="delete" key="delete" onClick={() => this.deleteCharacter(character._id)} />,
            <Icon type="edit" key="edit" onClick={() => this.editCharacter(character._id)} />
          ]}>
            
          </Card>
        ))}
      </div>
    );
  }
}
