'use client';
import { useState } from 'react';
import { TOP_REVENUE_LEADERBOARD } from '@/lib/db';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('leaderboard');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2D2A26] text-white p-6 hidden md:block">
        <h1 className="text-2xl font-bold text-[#C16239] mb-8">GrowthAI Master</h1>
        <nav className="space-y-4">
          <button 
            onClick={() => setActiveTab('leaderboard')} 
            className={`w-full text-left py-2.5 px-4 rounded-lg font-medium transition-colors ${activeTab === 'leaderboard' ? 'bg-[#C16239]' : 'hover:bg-gray-800'}`}
          >
            Top 10 Leaderboard
          </button>
          <button 
            onClick={() => window.location.href='/login'} 
            className="w-full text-left py-2.5 px-4 rounded-lg text-red-400 hover:bg-gray-800 mt-10 transition-colors"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Master Admin Control Panel</h2>
            <p className="text-sm text-gray-500">Exclusive owner access for revenue tracking and marketing data</p>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            Secure Master Node
          </span>
        </header>

        {activeTab === 'leaderboard' && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Top 10 High-Revenue Generating Companies</h3>
                <p className="text-sm text-gray-500">Use this performance ledger for marketing social proof and video campaigns.</p>
              </div>
              <span className="text-xs bg-[#FAF5F2] text-[#C16239] font-bold px-3 py-1.5 rounded-lg border border-[#C16239]/30">
                Marketing Asset
              </span>
            </div>

            <div className="space-y-3">
              {TOP_REVENUE_LEADERBOARD.map((item) => (
                <div key={item.rank} className="p-4 border rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50/50 hover:bg-gray-50 transition-colors gap-2">
                  <div className="flex items-center space-x-4">
                    <span className="w-8 h-8 rounded-full bg-[#FAF5F2] text-[#C16239] font-bold flex items-center justify-center text-sm border border-[#C16239]/20">
                      #{item.rank}
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.companyName}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Active Agents: {item.agentsUsed.join(', ')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-green-700">{item.revenue}</span>
                    <p className="text-[11px] text-gray-400">Generated via AI Ecosystem</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

