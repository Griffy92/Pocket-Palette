import { Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://yilvmajrrjkkeljiduxi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbHZtYWpycmpra2VsamlkdXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDY1NzMsImV4cCI6MTk5OTY4MjU3M30.kACu74ur-SSSo26idj89j46s2TytpXjaf3sMjHulBnM"
);

const CanvasUpload = (props) => {
  const [fileName, setFileName] = useState('');
  const [userId, setUserId] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleCanvasUpload = async () => {
    if (fileName && userId) {
      const canvas = document.getElementById('canvas');
      canvas.toBlob(async (blob) => {
        if (blob) {
          const { error } = await supabase.storage
            .from(`Works/${userId}`)
            .upload(`${fileName}.png`, blob, {
              cacheControl: 'max-age=31536000',
              contentType: 'image/png',
            });

          if (error) {
            console.error('Error uploading canvas:', error);
          } else {
            console.log('Canvas uploaded successfully');
          }
        }
      }, 'image/png');
    }
  };

  const getUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user !== null) {
        setUserId(user.id);
        console.log(user.id);
      } else {
        setUserId('');
      }
    } catch (e) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <TextField
        label="File Name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <Button onClick={handleCanvasUpload}>Upload</Button>

    </>
  );
};

export default CanvasUpload;
