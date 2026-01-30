import React, { useState } from 'react';
import LeadTable from './components/LeadTable';
import LeadForm from './components/LeadForm';
import AIGeneratorModal from './components/AIGeneratorModal';
import Toast from './components/Toast';
import StatsCard from './components/StatsCard';

function App() {
  const [leads, setLeads] = useState([
    { id: 1, name: 'Sarah Connor', email: 'sarah@example.com', phone: '555-0123', program: 'Leadership Mastery', status: 'New', background: 'IT Manager with 5 years experience looking to move into executive role.' },
    { id: 2, name: 'John Smith', email: 'john@example.com', phone: '555-0199', program: 'Communication Skills', status: 'Contacted', background: 'Sales representative wanting to improve client negotiation.' },
    { id: 3, name: 'Emily Blunt', email: 'emily@example.com', phone: '555-0144', program: 'Leadership Mastery', status: 'Enrolled', background: 'Senior Director looking for detailed strategy coaching.' }
  ]);

  const [view, setView] = useState('list'); // 'list', 'create', 'edit'
  const [editingLead, setEditingLead] = useState(null);
  const [aiModalLead, setAiModalLead] = useState(null);
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleAddLead = (leadData) => {
    const newLead = { ...leadData, id: Date.now() };
    setLeads([newLead, ...leads]);
    setView('list');
    addToast('Lead added successfully!', 'success');
  };

  const handleUpdateLead = (leadData) => {
    setLeads(leads.map(lead => lead.id === editingLead.id ? { ...leadData, id: lead.id } : lead));
    setEditingLead(null);
    setView('list');
    addToast('Lead updated successfully!', 'success');
  };

  const handleDeleteLead = (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeads(leads.filter(lead => lead.id !== id));
      addToast('Lead deleted successfully.', 'info');
    }
  };

  const startEdit = (lead) => {
    setEditingLead(lead);
    setView('edit');
  };

  // Stats Logic
  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'New').length,
    enrolled: leads.filter(l => l.status === 'Enrolled').length
  };

  return (
    <div style={{ paddingBottom: '4rem' }}>
      <header className="glass-panel" style={{
        position: 'sticky', top: 0, zIndex: 100,
        borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none',
        marginBottom: '2rem', padding: '1rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '40px', height: '40px', background: 'linear-gradient(135deg, #6366f1, #10b981)',
            borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem', fontWeight: 'bold', color: 'white'
          }}>IL</div>
          <h1 style={{ fontSize: '1.25rem' }}>Iron Lady CRM</h1>
        </div>

        {view === 'list' && (
          <button onClick={() => setView('create')} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add New Lead
          </button>
        )}
      </header>

      <main className="container">
        {view === 'list' && (
          <div className="animate-fade-in">
            {/* Dashboard Stats */}
            <div className="stats-grid">
              <StatsCard
                title="Total Leads"
                value={stats.total}
                trend={12}
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                }
              />
              <StatsCard
                title="New Inquiries"
                value={stats.new}
                trend={-5}
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                }
              />
              <StatsCard
                title="Enrolled"
                value={stats.enrolled}
                trend={8}
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                }
              />
            </div>

            <h2 style={{ marginBottom: '1.5rem' }}>Recent Leads</h2>
            <LeadTable
              leads={leads}
              onEdit={startEdit}
              onDelete={handleDeleteLead}
              onGenerateAI={setAiModalLead}
            />
          </div>
        )}

        {view === 'create' && (
          <LeadForm
            onSubmit={handleAddLead}
            onCancel={() => setView('list')}
          />
        )}

        {view === 'edit' && (
          <LeadForm
            initialData={editingLead}
            onSubmit={handleUpdateLead}
            onCancel={() => { setEditingLead(null); setView('list'); }}
          />
        )}
      </main>

      {/* Toast Container */}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>

      {aiModalLead && (
        <AIGeneratorModal
          lead={aiModalLead}
          onClose={() => setAiModalLead(null)}
        />
      )}
    </div>
  );
}

export default App;
