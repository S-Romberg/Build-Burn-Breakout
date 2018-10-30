import React from 'react'
import { Card } from 'semantic-ui-react'

const CharacterCard = (props) => {
    return props.data.map(character => {
        return(
            <Card key={character.id}>
                <Card.Content header={character.name} />
                <Card.Content description={'Age: ' + character.age} />
                <Card.Content description={'Eye Color: ' + character.eye_color} />
                <Card.Content description={'Gender: '+ character.gender} />
                <Card.Content description={'Hair Color: ' + character.hair_color} />
                <Card.Content extra>

                </Card.Content>
            </Card>
        )
    })
}

export default CharacterCard