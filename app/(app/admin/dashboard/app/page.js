'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AI_AGENTS_LIST, SUBSCRIPTION_PLANS } from '@/lib/db';

export default function LandingPage() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2A26] font-sans selection:bg-[#C16239] selection:text-white">
      
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EFECE6] px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tight text-[#2D2A26]">GrowthAI</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#agents" className="hover:text-[#C16239] transition-colors">Agents</a>
          <a href="#pricing" className="hover:text-[#C16239] transition-colors">Pricing</a>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => router.push('/login')}
            className="text-sm font-semibold text-gray-700 hover:text-[#C16239] transition-colors"
          >
            Login
          </button>
          <button 
            onClick={() => router.push('/login')}
            className="px-4 py-2 bg-[#C16239] text-white text-sm font-semibold rounded-xl hover:bg-[#A8532F] transition-colors shadow-sm"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-[#2D2A26] leading-tight">
          Never Miss a Lead. Every Customer. Every Time.
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Thirteen AI employees that answer instantly, qualify properly, book directly into your calendar and follow up relentlessly.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => router.push('/login')}
            className="px-8 py-4 bg-[#C16239] text-white font-bold rounded-2xl hover:bg-[#A8532F] transition-all shadow-md text-base"
          >
            Book Free Demo
          </button>
          <a 
            href="#agents"
            className="px-8 py-4 bg-white border border-gray-300 font-bold rounded-2xl hover:bg-gray-50 transition-all text-base"
          >
            Explore AI Employees
          </a>
        </div>
      </section>

      {/* 13 AI Agents Showcase Section */}
      <section id="agents" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Thirteen Specialists</h2>
          <p className="text-gray-500 mt-2">Select an agent to see what it does.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {AI_AGENTS_LIST.map((agent) => (
            <div key={agent.id} className="bg-white p-6 rounded-2xl border border-[#EFECE6] shadow-sm hover:border-[#C16239] transition-all">
              <h3 className="text-lg font-bold text-[#2D2A26]">{agent.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{agent.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Plans & Pricing</h2>
          <p className="text-gray-500 mt-2">Every plan includes the full platform.</p>
          
          {/* Billing Toggle */}
          <div className="mt-6 inline-flex bg-gray-200 p-1.5 rounded-xl">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${billingCycle === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}`}
            >
              Pay Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${billingCycle === 'yearly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'}`}
            >
              Pay Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <div key={plan.id} className="bg-white p-8 rounded-3xl border border-[#EFECE6] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#2D2A26]">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-black">${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</span>
                  <span className="text-gray-500 ml-1">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">{plan.description}</p>
              </div>

              <div className="mt-8 space-y-3">
                <button 
                  onClick={() => router.push('/login')}
                  className="w-full py-3.5 bg-[#C16239] text-white font-bold rounded-xl hover:bg-[#A8532F] transition-colors shadow-sm"
                >
                  Pay {billingCycle === 'monthly' ? 'Monthly' : 'Yearly'} — ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => router.push('/login')} className="py-2.5 bg-gray-100 hover:bg-gray-200 text-xs font-semibold rounded-lg text-gray-700 transition-colors">
                    7-day Trial
                  </button>
                  <button onClick={() => router.push('/login')} className="py-2.5 bg-gray-100 hover:bg-gray-200 text-xs font-semibold rounded-lg text-gray-700 transition-colors">
                    5-day Trial
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#EFECE6] text-center text-sm text-gray-500">
        <p>&copy; 2026 GrowthAI Enterprise Ecosystem. All rights reserved.</p>
      </footer>

    </div>
  );
}

