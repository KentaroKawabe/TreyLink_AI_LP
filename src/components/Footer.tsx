import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#1F2937',
      color: 'white',
      padding: '3rem 1rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          TREYLINK AI
        </h3>
        <p style={{
          color: '#9CA3AF',
          marginBottom: '1.5rem'
        }}>
          最新のAI技術で、ビジネスの未来を創造する
        </p>
        <div style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>会社概要</a>
          <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>サービス</a>
          <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>お問い合わせ</a>
        </div>
        <p style={{ color: '#6B7280' }}>
          © 2024 TREYLINK AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 