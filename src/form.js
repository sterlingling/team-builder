import React from 'react';

export default function MemberForm(props) {

    const onChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value);
    }
    const onSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }
    return (
        <form className='formConatiner' onSubmit={onSubmit}>
            <label>Name
                <input
                    type='text'
                    name='name'
                    placeholder='Type Your Name'
                    value={props.values.name}
                    onChange={onChange}
                />
            </label>
            <label>Email
                <input
                    type='email'
                    name='email'
                    placeholder='Type an Email'
                    value={props.values.email}
                    onChange={onChange}
                />
            </label>
            <label>Role
                <select value={props.values.role} name='role' onChange={onChange}>
                    <option value=''>---Select a Role---</option>
                    <option value='fEnd'>Front-End Enineer</option>
                    <option value='bEnd'>Back-End Engineer</option>
                    <option value='fStack'>Full-Stack Engineer</option>

                </select>
            </label>
            <input type='submit' value='Create your team!' />
        </form>
    )
}