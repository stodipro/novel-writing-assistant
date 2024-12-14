import { useState } from 'react';
import CharacterManager from './components/CharacterManager';
import ProjectManager from './components/ProjectManager';
import StoryMap from './components/StoryMap';
import WritersHelper from './components/WritersHelper';

export default function App() {
  const [activeView, setActiveView] = useState('write');
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* App implementation */}
    </div>
  );
}