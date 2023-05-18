import { createClient } from "@supabase/supabase-js"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Canvas from "./Paint/Canvas"
import Home from "./Home"

const supabase = createClient (
    "https://yilvmajrrjkkeljiduxi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbHZtYWpycmpra2VsamlkdXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDY1NzMsImV4cCI6MTk5OTY4MjU3M30.kACu74ur-SSSo26idj89j46s2TytpXjaf3sMjHulBnM"
)


function Success() {
    const [user, setUser] = useState({})

    
    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if (value.data?.user) {
                    setUser(value.data.user)      
                }
            })
        }
        getUserData()
    }, [])

    return (
        <div>
          {Object.keys(user).length !== 0 ? (
            <div>
              
              {/* Renders home page*/}
              <Home />
            </div>
          ) : (
            <div>
              <h1>User Is Not Logged in</h1>
            </div>
          )}
        </div>
      );
      
}

export default Success
