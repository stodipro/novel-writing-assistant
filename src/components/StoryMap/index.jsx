import { useState } from 'react';
import { Plus, Save } from 'lucide-react';

export default function StoryMap({ projectId }) {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  return (
    <div className="h-full flex">
      <div className="flex-1 bg-gray-800 p-6 rounded-lg">
        {/* StoryMap canvas */}
      </div>
      <div className="w-80 bg-gray-800 p-4 rounded-lg ml-4">
        {/* Story node editor */}
      </div>
    </div>
  );
}