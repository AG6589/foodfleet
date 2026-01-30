import React, { useState } from 'react';
import { generateFollowUp } from '../utils/aiService';

const AIGeneratorModal = ({ lead, onClose }) => {
    const [generatedMessage, setGeneratedMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasGenerated, setHasGenerated] = useState(false);

    const handleGenerate = async () => {
        setIsLoading(true);
        setGeneratedMessage('');
        try {
            const message = await generateFollowUp(lead);
            setGeneratedMessage(message);
            setHasGenerated(true);
        } catch (error) {
            console.error("AI Error", error);
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedMessage);
        alert("Message copied to clipboard!");
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(5px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
            <div className="glass-panel animate-fade-in" style={{ width: '90%', maxWidth: '500px', padding: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6366f1' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                    </svg>
                    AI Follow-up Assistant
                </h3>

                <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Generating message for <strong>{lead.name}</strong> ({lead.status}) regarding <strong>{lead.program}</strong>.
                </div>

                {!hasGenerated && !isLoading && (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <p style={{ marginBottom: '1rem' }}>Click below to generate a personalized message.</p>
                        <button onClick={handleGenerate} className="btn-primary" style={{ width: '100%' }}>
                            Generate Message
                        </button>
                    </div>
                )}

                {isLoading && (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div className="spinner" style={{
                            width: '40px', height: '40px', border: '4px solid rgba(99, 102, 241, 0.1)',
                            borderTopColor: '#6366f1', borderRadius: '50%', margin: '0 auto 1rem',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                        <p className="animate-pulse">Thinking...</p>
                        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                )}

                {hasGenerated && (
                    <div className="animate-fade-in">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Generated Content:</label>
                        <textarea
                            value={generatedMessage}
                            onChange={(e) => setGeneratedMessage(e.target.value)}
                            rows="8"
                            style={{ width: '100%', marginBottom: '1rem', fontFamily: 'monospace', fontSize: '0.9rem' }}
                        />
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={copyToClipboard} className="btn-primary" style={{ flex: 1 }}>
                                Copy Text
                            </button>
                            <button onClick={handleGenerate} className="btn-secondary">
                                Regenerate
                            </button>
                        </div>
                    </div>
                )}

                <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                    <button onClick={onClose} className="btn-secondary" style={{ fontSize: '0.875rem' }}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIGeneratorModal;
