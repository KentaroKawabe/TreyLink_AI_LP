import React from 'react';
import { FaRobot, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaRobot size={40} />,
      title: '最新のAI技術',
      description: '最先端のAI技術を活用し、ビジネスプロセスを自動化'
    },
    {
      icon: <FaChartLine size={40} />,
      title: '生産性向上',
      description: 'AIによる業務効率化で、生産性を大幅に向上'
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: 'セキュリティ',
      description: '高度なセキュリティ対策で、データを安全に保護'
    }
  ];

  return (
    <section style={{
      padding: '5rem 1rem',
      backgroundColor: '#f3f4f6'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '3rem'
      }}>
        特徴
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            <div style={{ color: '#3B82F6', marginBottom: '1rem' }}>
              {feature.icon}
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              {feature.title}
            </h3>
            <p style={{ color: '#6B7280' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 