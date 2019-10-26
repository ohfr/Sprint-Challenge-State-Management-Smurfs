import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions/smurf';

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.postSmurf(smurf)
        setSmurf({
            name: '',
            age: '',
            height: ''
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={smurf.name} onChange={handleChange} />
            <input type="number" name="age" placeholder="Age" value={smurf.age} onChange={handleChange}/>
            <input type="text" name="height" placeholder="Height" value={smurf.height} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.post.loading
    }
}

const mapDispatchToProps = {
    postSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);