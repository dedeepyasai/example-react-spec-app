import React from 'react';
import PropTypes from 'prop-types';

export default function FeatureCard({feature}){
  return (
    <article className="ft-card" style={{position:'relative'}}>
      <div data-testid="card-label" className="ft-card-label" aria-hidden="true" style={{position:'absolute',top:8,right:8,width:28,height:14,background: feature.labelColor || 'transparent',borderRadius:3,border:'1px solid rgba(0,0,0,0.08)'}} />
      <h3 className="ft-card-title">{feature.title}</h3>
      <p className="ft-card-desc">{feature.description}</p>
      <small className="ft-card-time">{new Date(feature.createdAt).toLocaleString()}</small>
    </article>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    labelColor: PropTypes.string
  }).isRequired
};
