import React from 'react';

const StatsCard = ({ title, value, icon, trend }) => {
    return (
        <div className="glass-panel stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="stat-label">{title}</span>
                <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', color: '#6366f1' }}>
                    {icon}
                </div>
            </div>
            <div className="stat-value">{value}</div>
            {trend && (
                <div style={{ fontSize: '0.75rem', color: trend > 0 ? '#10b981' : '#ef4444', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from last week
                </div>
            )}
        </div>
    );
};

export default StatsCard;
