'use client'
import dynamic from 'next/dynamic';
import '../../globals.css';

// Dynamically import react-split without SSR
const Split = dynamic(() => import('react-split'), { ssr: false });

// pages/index.tsx

import CodeEditor from '@/components/CodeEditor';
import Description from '@/components/Discription';
import TestCaseAnalysis from '@/components/TestCases';

export default function Home(){
  return (
    <div className="flex flex-col h-screen w-screen bg-green-300">
      <h1 className="text-3xl font-bold text-center">LeetCode Workspace Clone</h1>
      <Split className="split flex-1" sizes={[50, 50]} minSize={100}>
        <Description />
        <Split className='split2' sizes={[50,50]} direction='vertical'>
          <CodeEditor/>
          <TestCaseAnalysis />
        </Split>
      </Split>
    </div>
  );
};
