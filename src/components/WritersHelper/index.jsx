import { useState } from 'react';

export default function WritersHelper() {
  const [promptType, setPromptType] = useState('character');

  const generatePrompt = () => {
    // Prompt generation logic
  };

  return (
    <div className="h-full p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Writer's Helper</h2>
      {/* WritersHelper implementation */}
    </div>
  );
}