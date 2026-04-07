import React, {useState} from 'react';
import AddFeatureForm from './AddFeatureForm';
import FeatureCard from './FeatureCard';
import './feature-tracker.css';

export default function FeatureTracker(){
  const [features, setFeatures] = useState([]);
  function addFeature(f){ setFeatures(prev => [f, ...prev]); }
  return (
    <main className="ft-root">
      <header className="ft-header"><h1>Feature Request Tracker</h1></header>
      <AddFeatureForm onAdd={addFeature} />
      <section className="ft-list">
        {features.map(f => <FeatureCard key={f.id} feature={f} />)}
      </section>
    </main>
  );
}
