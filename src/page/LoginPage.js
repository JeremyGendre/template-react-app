import Button from "@mui/material/Button";
import {useContext} from "react";
import {UserContext} from "../context/UserContext";

export default function LoginPage() {
    const {login} = useContext(UserContext);
    return (
        <div>
            <Button onClick={login}>Se connecter</Button>
        </div>
    );
}
