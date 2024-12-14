import { useState } from 'react';
import CharacterDetailEditor from './CharacterDetailEditor';
import CharacterList from './CharacterList';

export default function CharacterManager({ projectId }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState([]);

  return (
    <div className="h-full flex">
      <CharacterList
        characters={characters}
        onSelect={setSelectedCharacter}
        projectId={projectId}
      />
      {selectedCharacter && (
        <CharacterDetailEditor
          character={selectedCharacter}
          onSave={(updated) => {
            setCharacters(chars =>
              chars.map(c => c.id === updated.id ? updated : c)
            );
            setSelectedCharacter(updated);
          }}
          projectId={projectId}
        />
      )}
    </div>
  );
}