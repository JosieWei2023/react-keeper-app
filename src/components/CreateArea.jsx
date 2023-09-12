import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isFolded, setFoldStatus] = useState(true);
    function handleFold() {
        setFoldStatus(false);
    }

    function handleChange(event) {
        const {name, value} = event.target; // destructuring
        setNote(prevValue => {
            return {
                ...prevValue, // spread operator
                [name]: value
            };
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isFolded ? null : <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
                <textarea onChange={handleChange} onClick={handleFold} name="content" value={note.content} placeholder="Take a note..." rows={isFolded ? "1" : "3"} />
                {isFolded ? null : <Zoom in={true}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>}
            </form>
        </div>
    );
}

export default CreateArea;