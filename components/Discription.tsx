// components/Description.tsx
import React from 'react';

const Description: React.FC = () => {
  return (
    <div className="p-4 border rounded bg-gray-50 h-full">
      <h2 className="text-xl font-bold">Problem Title</h2>
      <p className="mt-2 text-gray-700">
        Description of the coding problem goes here. It could involve
        multiple paragraphs, examples, and input/output descriptions.
      </p>
    </div>
  );
};

export default Description;
