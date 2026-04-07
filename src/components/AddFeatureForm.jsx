import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function AddFeatureForm({onAdd}){
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [labelColor,setLabelColor] = useState('#ffcc00');
  function submit(e){
    e.preventDefault();
    if(!title.trim()) return;
    const feature = {id:Date.now().toString(), title: title.trim(), description: desc.trim(), createdAt: new Date().toISOString(), labelColor};
    onAdd(feature);
    setTitle(''); setDesc(''); setLabelColor('#ffcc00');
  }
  return (
    <form className="ft-form" onSubmit={submit}>
      <input className="ft-input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" required aria-label="Title" />
      <textarea className="ft-textarea" value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description" aria-label="Description" />
      <label htmlFor="labelColor">Label Color</label>
      <input id="labelColor" type="color" aria-label="Label Color" value={labelColor} onChange={e=>setLabelColor(e.target.value)} />
      <div className="ft-actions"><button type="submit">Add Feature</button></div>
    </form>
  );
}

AddFeatureForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};
