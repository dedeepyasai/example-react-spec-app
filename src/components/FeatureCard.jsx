import React from 'react';
import PropTypes from 'prop-types';

export default function FeatureCard({feature}){
  return (
    <article className="ft-card">
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
    createdAt: PropTypes.string.isRequired
  }).isRequired
};
