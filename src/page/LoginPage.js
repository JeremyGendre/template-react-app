import Button from "@mui/material/Button";
import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext";
import {Card, CardActions, CardContent, TextField, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";

export default function LoginPage() {
    const {login} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        login();
    }
    return (
        <div className="d-flex w-full h-screen">
            <div className="w-full h-full absolute login-bg" style={{overflow: 'hidden'}}/>
            <form onSubmit={handleLogin} className="m-auto" style={{zIndex: 100}}>
                <Card sx={{ minWidth: 275 }} elevation={10}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className="text-center"
                            color="primary"
                        >
                            Connexion
                        </Typography>
                        <div className="mt-2">
                            <TextField
                                required
                                autoFocus
                                type="email"
                                label="Email"
                                variant="outlined"
                                className="w-full"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mt-2">
                            <TextField
                                required
                                type="password"
                                label="Mot de passe"
                                variant="outlined"
                                className="w-full"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        {error && <div className="mt-2 error">{error}</div>}
                    </CardContent>
                    <CardActions className="d-flex justify-center">
                        <LoadingButton
                            disabled={loading}
                            loading={loading}
                            type="submit"
                            variant="contained"
                        >
                            Se connecter
                        </LoadingButton>
                    </CardActions>
                </Card>
            </form>
        </div>
    );
}
