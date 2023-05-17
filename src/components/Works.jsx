import { Auth } from '@supabase/auth-ui-react'
import {ThemeSupa} from '@supabase/auth-ui-shared'
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const supabase = createClient (
    "https://yilvmajrrjkkeljiduxi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbHZtYWpycmpra2VsamlkdXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDY1NzMsImV4cCI6MTk5OTY4MjU3M30.kACu74ur-SSSo26idj89j46s2TytpXjaf3sMjHulBnM"
    )

function Works() {

const [userId, setUserId] = useState('');
const [media, setMedia] = useState([]);
const navigate = useNavigate()

const getUser = async () => {

    try {
    const { data: { user } } = await supabase.auth.getUser()
    if (user !== null) {
        setUserId(user.id);
        console.log(user.id)
    } else {
        setUserId('');
        }
    } catch (e) { }

    }


    async function uploadImage(e) {
    let file = e.target.files[0];


    const { data, error } = await supabase
        .storage
        .from('Works')
        .upload(userId + "/" + uuidv4(), file)

    if (data) {
        getMedia();

    } else {
        console.log(error);
    }
    }

    async function getMedia() {

    const { data, error } = await supabase.storage.from('Works').list(userId + '/', {
        limit: 10,
        offset: 0,
        sortBy: {
        column: 'name', order:
        'asc'
        }
    });

    if (data) {
        setMedia(data);
    } else {
        console.log(71, error);
    }
    }

    async function signOutUser() {
        const {error} = await supabase.auth.signOut();
        console.log(error)
        navigate("/")
    }

    useEffect(() => {
    getUser();
    getMedia();
    }, [userId])

    async function deleteMedia(mediaName) {
        const { error } = await supabase
            .storage
            .from('Works')
            .remove([ userId + "/" + mediaName])
        
        if(error) {
            alert(error);
        } else {
            getMedia();
        }
        }

    return (
    <div>
    {userId == '' ? <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        /> 
    : 
    
    <div>

        <input type="file" onChange={(e) => uploadImage(e)} />
        <div>
            <h1> My Uploads </h1>
        </div>

        {media.map((media, i) => {
        return (
        
            <div key={i}>
            <img src={`https://yilvmajrrjkkeljiduxi.supabase.co/storage/v1/object/public/Works/${userId}/${media.name}`} />
            <button onClick={() => deleteMedia(media.name)}>Delete Image</button>
            
            </div>                                                      
        
        )
        })}
        <div>
        <button onClick={() => signOutUser()}> Sign Out </button>
        </div>
    </div>}

    </div >
)
}




export default Works;