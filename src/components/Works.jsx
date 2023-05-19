import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import './Works.css'

const supabase = createClient (
    "https://yilvmajrrjkkeljiduxi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbHZtYWpycmpra2VsamlkdXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDY1NzMsImV4cCI6MTk5OTY4MjU3M30.kACu74ur-SSSo26idj89j46s2TytpXjaf3sMjHulBnM"
    )

function Works( props ) {
    const [media, setMedia] = useState([]);
    const navigate = useNavigate();
    const { session } = props;
    const { user } = session; // destructure session

    useEffect ( () => {
        if ( !session ) {
            navigate("/")
        } else {
            getMedia();
        }
    }, [session])

    async function uploadImage(e) {
        let file = e.target.files[0];

        const { data, error } = await supabase
            .storage
            .from('Works')
            .upload(user.id + "/" + uuidv4(), file)

        if (data) {
            getMedia();
        } else {
            console.log(error);
        };
    };

    async function getMedia() {
        const { data, error } = await supabase.storage.from('Works').list(user.id + '/', {
            limit: 20,
            offset: 0,
            sortBy: {
            column: 'created_at', 
            order: 'desc'
            }
        });

        if (data) {
            setMedia(data);
        } else {
            console.log(71, error);
        };
    };

    async function deleteMedia(mediaName) {
        const { error } = await supabase
            .storage
            .from('Works')
            .remove([ user.id + "/" + mediaName])
        
        if(error) {
            alert(error);
        } else {
            getMedia();
        };
    };

    async function downloadMedia(mediaName) {
        const { data, error } = await supabase
            .storage
            .from('Works')
            .download(user.id + "/" + mediaName);

            if (data) {
                // Create a download link
                const downloadUrl = URL.createObjectURL(data);

                // Create an anchor element and set its href and download attributes
                const link = document.createElement("a");
                link.href = downloadUrl;
                link.download = mediaName;

                // Simulate a click on the anchor element to trigger the download
                link.click();

                // Clean up the URL object
                URL.revokeObjectURL(downloadUrl);
            } else {
                console.log(error);
            };
        };

    return (
            
        <div>
            <div className="header-container">
                <h1>My Gallery</h1>
                    <label className="file-input">
                        Select a file to Upload
                    <input type="file" onChange={(e) => uploadImage(e)} />
                    </label>
            </div>
                <div className="grid-container">
                {media.map((media, i) => (
                <div key={i} className="grid-item">
                        <img src={`https://yilvmajrrjkkeljiduxi.supabase.co/storage/v1/object/public/Works/${user.id}/${media.name}`}
                                onClick={() => window.open(`https://yilvmajrrjkkeljiduxi.supabase.co/storage/v1/object/public/Works/${user.id}/${media.name}`, '_blank')}/>
                    <div className="button-container">
                    <button className="delete-button" onClick={() => deleteMedia(media.name)}>Delete Image</button>
                    <button className="download-button" onClick={() => downloadMedia(media.name)}>Download Image</button>
                    </div>
                </div>
                ))}
                </div>
        </div>
          
    );
}

export default Works;