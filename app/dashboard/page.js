'use client';
import { useState } from 'react';
import { AI_AGENTS_LIST } from '@/lib/db';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', revenue: 4200, leads: 320 },
  { month: 'Feb', revenue: 7800, leads: 590 },
  { month: 'Mar', revenue: 12400, leads: 1100 },
  { month: 'Apr', revenue: 19200, leads: 1650 },
];

export default function UserDashboard() {
  // Standard plan default limit is 4 agents
  const [selectedAgents, setSelectedAgents] = useState(['ceo', 'sales', 'support', 'crm']);
  const maxLimit = 4;

  const toggleAgent = (id) => {
    if (selectedAgents.includes(id)) {
      if (selectedAgents.length > 1) {
        setSelectedAgents(selectedAgents.filter(a => a !== id));
      }
    } else {
      if (selectedAgents.length < maxLimit) {
        setSelectedAgents([...selectedAgents, id]);
      } else {
        alert(`Your current plan allows a maximum of ${maxLimit} active AI agents.`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header & Logout */}
        <header className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-[#EFECE6]">
          <div>
            <h1 className="text-2xl font-bold text-[#2D2A26]">My GrowthAI Dashboard</h1>
            <p className="text-sm text-gray-500">Autonomous multi-agent ecosystem active</p>
          </div>
          <button 
            onClick={() => window.location.href='/login'} 
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors"
          >
            Logout
          </button>
        </header>

        {/* AI Profit & Performance Report Notification */}
        <div className="bg-[#FAF5F2] border border-[#C16239]/30 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-lg font-bold text-[#2D2A26]">🤖 AI Autonomous Profit Report</h3>
            <p className="text-sm text-gray-600 mt-1">
              Your active AI agents generated <span className="font-bold text-[#C16239]">$19,200</span> in net revenue and saved <span className="font-bold text-[#C16239]">180 hours</span> this billing cycle!
            </p>
          </div>
          <span className="bg-[#C16239] text-white text-xs px-3.5 py-1.5 rounded-full font-semibold shadow-sm">
            Live Sync Active
          </span>
        </div>

        {/* Data Visualization Section (Graph & Text View) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EFECE6] grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Graph View */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-[#2D2A26] mb-4">Revenue Growth Overview</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <XAxis dataKey="month" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#C16239" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Text View & Key Metrics */}
          <div className="flex flex-col justify-center space-y-4 bg-[#FDFBF7] p-5 rounded-xl border border-gray-100">
            <h4 className="font-bold text-[#2D2A26] border-b pb-2">Key Performance Metrics</h4>
            <div className="text-sm text-gray-600 space-y-3">
              <p className="flex justify-between"><span>Total Leads:</span> <strong className="text-gray-900">1,650</strong></p>
              <p className="flex justify-between"><span>Conversion:</span> <strong className="text-gray-900">41.2%</strong></p>
              <p className="flex justify-between"><span>Active Agents:</span> <strong className="text-gray-900">{selectedAgents.length} / {maxLimit}</strong></p>
              <p className="flex justify-between"><span>Fail-Safe Guard:</span> <strong className="text-green-600">Enabled</strong></p>
            </div>
          </div>

        </div>

        {/* AI Agent Selection Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EFECE6]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#2D2A26]">Select Your AI Agents</h3>
              <p className="text-sm text-gray-500">Pick up to {maxLimit} autonomous agents to run your business operations.</p>
            </div>
            <span className="text-xs font-bold bg-gray-100 px-3 py-1.5 rounded-lg text-gray-700">
              {selectedAgents.length} Selected
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AI_AGENTS_LIST.map((agent) => {
              const isSelected = selectedAgents.includes(agent.id);
              return (
                <div 
                  key={agent.id} 
                  onClick={() => toggleAgent(agent.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-[#C16239] bg-[#FAF5F2] shadow-sm' 
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-[#2D2A26]">{agent.name}</h4>
                    <input 
                      type="checkbox" 
                      checked={isSelected} 
                      readOnly 
                      className="w-4 h-4 accent-[#C16239]" 
                    />
                  </div>
                  <p className="text-xs text-gray-600">{agent.role}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

