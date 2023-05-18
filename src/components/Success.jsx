import { createClient } from "@supabase/supabase-js"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Canvas from "./Paint/Canvas"

const supabase = createClient (
    "https://yilvmajrrjkkeljiduxi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbHZtYWpycmpra2VsamlkdXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDY1NzMsImV4cCI6MTk5OTY4MjU3M30.kACu74ur-SSSo26idj89j46s2TytpXjaf3sMjHulBnM"
)


function Success() {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    
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


    async function signOutUser() {
        const {error} = await supabase.auth.signOut();
        console.log(error)
        navigate("/")
    }

    return (
        <div>
          {Object.keys(user).length !== 0 ? (
            <div>
              {/* heading needs work to align */}
              <h2>
                Let's get <span className="creative_heading">creative!</span>
              </h2>
      
              <div className="selectContainer">
                <div className="paintSelect">
                  <h3 className="choose_heading">Paint</h3>
                </div>
      
                <div className="pixelSelect">
                  <h3 className="choose_heading">Pixel</h3>
                </div>
      
                <div className="etchSelect">
                  <h3 className="choose_heading">Etch</h3>
                </div>
      
                <div>
                  <button onClick={() => signOutUser()}>Sign Out</button>
                </div>
              </div>
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
