import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { fetchSmurf } from '../actions/smurf';
import { connect } from 'react-redux';

const Smurfs = (props) => {
    useEffect(() => {
        props.fetchSmurf();
    }, [])
    return (
        <div>
            {props.smurfs.length && props.smurfs.map((cur, index) => {
                return <Smurf key={index} name={cur.name} height={cur.height} age={cur.age} id={cur.id} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.fetch.smurfs,
        loading: state.fetch.loading,
        err: state.fetch.err
    }
}

const mapDispatchToProps = {
    fetchSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);
