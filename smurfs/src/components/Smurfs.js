import React, { useState, useEffect } from 'react';
import Smurf from './Smurf';
import { fetchSmurf, deleteSmurf, editSmurf, setEdit} from '../actions/smurf';
import { connect } from 'react-redux';

const Smurfs = (props) => {

    const handleDelete = (id) => {
        props.deleteSmurf(id);
    }
    

    useEffect(() => {
        props.fetchSmurf();
    }, [props.smurfs.length,])

    return (
        <div>
            {props.smurfs.length && props.smurfs.map((cur, index) => {
                return <Smurf key={index} name={cur.name} height={cur.height} age={cur.age} id={cur.id} handleDelete={handleDelete} editing={props.editing} handleEdit={props.editSmurf} setEdit={props.setEdit} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
        err: state.err,
        editing: state.editing
    }
}

const mapDispatchToProps = {
    fetchSmurf,
    deleteSmurf,
    editSmurf,
    setEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);
