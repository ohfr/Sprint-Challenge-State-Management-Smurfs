import React, { useState, useEffect } from 'react';
import Smurf from './Smurf';
import { fetchSmurf, deleteSmurf, editSmurf, setEdit, cancelEdit } from '../actions/smurf';
import { connect } from 'react-redux';

const Smurfs = (props) => {
    const [smurf, setSmurf] = useState({
        id: props.editingSmurf.id || '',
        name: '',
        age: '',
        height: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        props.editSmurf(props.editingSmurf.id, smurf)
    }
    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    const handleDelete = (id) => {
        props.deleteSmurf(id);
    }
    

    useEffect(() => {
        props.fetchSmurf();
    }, [props.smurfs.length,])

    return (
        <div>
            {props.editing && (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder={props.editingSmurf.name} name="name" value={smurf.name} onChange={handleChange} />
                    <input type="number" placeholder={props.editingSmurf.age} name="age" value={smurf.age} onChange={handleChange} />
                    <input type="text" placeholder={props.editingSmurf.height} name="height" value={smurf.height} onChange={handleChange} />
                    <button type="submit">Submit</button>
                    <button onClick={props.cancelEdit}>Cancel</button>
                </form>
            )}
            {props.smurfs.length && props.smurfs.map((cur, index) => {
                return <Smurf key={index} smurf={cur} name={cur.name} height={cur.height} age={cur.age} id={cur.id} handleDelete={handleDelete} editing={props.editing} handleEdit={props.editSmurf} setEdit={props.setEdit} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        err: state.err,
        editing: state.editing,
        editingSmurf: state.editingSmurf
    }
}

const mapDispatchToProps = {
    fetchSmurf,
    deleteSmurf,
    editSmurf,
    setEdit,
    cancelEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);
