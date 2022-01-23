import {useContext, useState} from "react";
import {UserContext} from "../../context/UserContext";
import {Card, CardActions, CardContent, TextField, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";

export default function RegisterPage({onLogin}) {
    const {register} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        register();
    }

    const isFormValid = !!email && !!password && !!confirmPassword && password === confirmPassword;

    return (
        <form onSubmit={handleRegister} className="m-auto" style={{zIndex: 100}}>
            <Card sx={{ minWidth: 275 }} elevation={10}>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="text-center"
                        color="primary"
                    >
                        Inscription
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
                    <div className="mt-2">
                        <TextField
                            required
                            type="password"
                            label="Confirmez"
                            variant="outlined"
                            className="w-full"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </div>
                    {error && <div className="mt-2 error">{error}</div>}
                    <div className="mt-2">
                        Déjà inscrit ? <a href="#" onClick={onLogin}>Se connecter</a>
                    </div>
                </CardContent>
                <CardActions className="d-flex justify-center">
                    <LoadingButton
                        disabled={loading || !isFormValid}
                        loading={loading}
                        type="submit"
                        variant="contained"
                    >
                        S'inscrire
                    </LoadingButton>
                </CardActions>
            </Card>
        </form>
    );
}
