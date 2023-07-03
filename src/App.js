import logo from './logo.svg';
import './App.css';
import MemberForm from './form';
import React, { useState } from 'react';
function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({ name: '', email: '', role: '' })
  const onSubmit = () => {
    setMembers([values, ...members])
    setValues({ name: '', email: '', role: '' })
  }
  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  }
  return (
    <div className='App'>
      <MemberForm
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            Name: {member.name} Email:{member.email} Role:{member.role}
          </div>
        )
      })}
    </div>

  );
}

export default App;
