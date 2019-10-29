import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    smurf: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        width: '100%',
      
      },
      singleSmurf : {
        border: '1px solid black',
        width: '20%',
        padding: '20px',
        margin: '20px',
      },
      button: {
        margin: '10px',
      }
})
const Smurf = (props) => {
    const classes=useStyles();
    const [smurf, setSmurf] = useState({
        id: props.id,
        name: '',
        age: '',
        height: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handlEdit(props.id, smurf)
    }
    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={classes.smurf}>
            {/* {
            props.editing ? (
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={props.name} name="name" value={smurf.name} onChange={handleChange} />
                <input type="number" placeholder={props.age} name="age" value={smurf.age} onChange={handleChange} />
                <input type="text" placeholder={props.height} name="height" value={smurf.height} onChange={handleChange} />
                <button type="submit">Submit</button>
                <button onClick={props.setEdit}>Cancel</button>
            </form>
            )
            
            : 
            ( */}
            <div className={classes.singleSmurf}>
                <h2>{props.name}</h2>
                <p>{props.age}</p>
                <p>{props.height}</p>
                <button className={classes.button} onClick={() => props.setEdit(props.smurf)}>Edit</button>
                <button className={classes.button} onClick={(e) => props.handleDelete(props.id)}>Delete</button>
            </div>
            {/* )   

            } */}
        </div>
    )
}

export default Smurf;