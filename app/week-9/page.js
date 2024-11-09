"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {

    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
    // Sign in to Firebase with GitHub authentication
    const login = async () => {
        await gitHubSignIn();
    };
    // Sign out of Firebase
    const logout = async () => {
        await firebaseSignOut();
    };
   
    return (
        <main className="m-6">
            <h1 className="font-bold text-xl mb-4">Shopping List App</h1>
            <div>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName} {user.email}!</p>
                        <button onClick={logout}>Sign out</button>
                    </div>
                ) : (
                    <button onClick={login}>Sign in with GitHub</button>
                )}
            </div>
        </main>
    );
}