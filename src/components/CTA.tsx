import React from 'react';

const CTA: React.FC = () => {
  return (
    <section style={{
      padding: '5rem 1rem',
      backgroundColor: '#1E40AF',
      color: 'white',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem'
      }}>
        今すぐ始めましょう
      </h2>
      <p style={{
        fontSize: '1.25rem',
        marginBottom: '2rem',
        maxWidth: '600px',
        margin: '0 auto 2rem'
      }}>
        AIの力で、あなたのビジネスを変革する準備はできていますか？
      </p>
      <button style={{
        backgroundColor: 'white',
        color: '#1E40AF',
        padding: '1rem 2.5rem',
        borderRadius: '0.375rem',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        cursor: 'pointer'
      }}>
        無料デモを申し込む
      </button>
    </section>
  );
};

export default CTA; 