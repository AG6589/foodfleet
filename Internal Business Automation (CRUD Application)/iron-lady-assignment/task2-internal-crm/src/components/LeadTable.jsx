import React from 'react';

const LeadTable = ({ leads, onEdit, onDelete, onGenerateAI }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'New': return 'status-badge status-new';
            case 'Contacted': return 'status-badge status-contacted';
            case 'Enrolled': return 'status-badge status-enrolled';
            default: return 'status-badge';
        }
    };

    return (
        <div className="glass-panel" style={{ overflowX: 'auto' }}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email / Phone</th>
                        <th>Program</th>
                        <th>Status</th>
                        <th>AI Assistant</th>
                        <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.length === 0 ? (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                                No leads found. Add one to get started.
                            </td>
                        </tr>
                    ) : (
                        leads.map((lead) => (
                            <tr key={lead.id} className="animate-fade-in">
                                <td>
                                    <div style={{ fontWeight: '500' }}>{lead.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{lead.background && lead.background.substring(0, 30) + (lead.background.length > 30 ? '...' : '')}</div>
                                </td>
                                <td>
                                    <div>{lead.email}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{lead.phone}</div>
                                </td>
                                <td>{lead.program}</td>
                                <td>
                                    <span className={getStatusClass(lead.status)}>{lead.status}</span>
                                </td>
                                <td>
                                    <button
                                        onClick={() => onGenerateAI(lead)}
                                        className="btn-secondary"
                                        style={{
                                            fontSize: '0.75rem',
                                            padding: '0.25rem 0.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            borderColor: '#6366f1',
                                            color: '#6366f1'
                                        }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                                        </svg>
                                        Generate
                                    </button>
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                        <button onClick={() => onEdit(lead)} className="btn-secondary" title="Edit">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                            </svg>
                                        </button>
                                        <button onClick={() => onDelete(lead.id)} className="btn-danger" title="Delete">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default LeadTable;
