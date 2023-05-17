import { createClient } from "@supabase/supabase-js"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Canvas from "./Paint/Canvas"

const supabase = createClient (
    "https://yilvmajrrjkkeljiduxi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbHZtYWpycmpra2VsamlkdXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDY1NzMsImV4cCI6MTk5OTY4MjU3M30.kACu74ur-SSSo26idj89j46s2TytpXjaf3sMjHulBnM"
)


function Success({ onSetUser }) {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    
    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if (value.data?.user) {
                    setUser(value.data.user)

                    // passing onSetUser back into App
                    onSetUser(value.data.user)
                }
            })
        }
        getUserData()
    }, [onSetUser])


    async function signOutUser() {
        const {error} = await supabase.auth.signOut();
        console.log(error)
        navigate("/")
    }

	return (
        <div>
        {Object.keys(user).length !== 0 ?
            <div>   
            <Canvas />
            <button onClick={() => signOutUser()}> Sign Out </button>
            </div>
            
        :

            <div>
                <h1>User Is Not Logged in</h1>

            </div>
		
        }
        </div>
                
	)
}

export default Success
