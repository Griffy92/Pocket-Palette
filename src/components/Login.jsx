import { createClient } from "@supabase/supabase-js"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const supabase = createClient (
    "https://yilvmajrrjkkeljiduxi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbHZtYWpycmpra2VsamlkdXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDY1NzMsImV4cCI6MTk5OTY4MjU3M30.kACu74ur-SSSo26idj89j46s2TytpXjaf3sMjHulBnM"

)

function Login() {
    const navigate = useNavigate()
    
    useEffect(() => {
        async function getLogin() {
        supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            navigate("/")
        }
        if (event === "SIGNED_IN") {
            navigate("/success")
        }
    
    })
        }
    getLogin()
    }, [])

	return (
		<div>
			<div>   
                <h1>Welcome to Pocket Palette </h1>
                <div className="login">
                <Auth 
                supabaseClient={supabase}
                appearance={{theme: ThemeSupa}}
                theme="dark"
                providers={["email"]}
                />
                </div>
			</div>
		</div>
	)
}
export default Login