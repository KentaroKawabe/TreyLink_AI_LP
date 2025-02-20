import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{
      textAlign: 'center',
      padding: '5rem 1rem',
      backgroundColor: '#3B82F6',
      color: 'white'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
        AIで未来を創る
      </h1>
      <p style={{
        fontSize: '1.25rem',
        marginBottom: '2rem'
      }}>
        最新のAI技術で、あなたのビジネスを次のレベルへ
      </p>
      <button style={{
        backgroundColor: 'white',
        color: '#3B82F6',
        padding: '0.75rem 2rem',
        borderRadius: '0.375rem',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        無料で相談する
      </button>
    </section>
  );
};

export default Hero; 