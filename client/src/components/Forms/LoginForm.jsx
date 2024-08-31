import { useState, useContext } from "react";
import UserService from "../../services/users.services";
import { useNavigate, Link } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const LoginForm = () => {
    const navigate = useNavigate();
    const { setUser, setIsLoggedIn } = useContext(LoggedInUserContext);
    const [errors, setErrors] = useState({});
    const [user, setUserState] = useState({ email: "", password: "" });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserState((prevUserValue) => ({ ...prevUserValue, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        UserService.login(user)
            .then((response) => {
                setIsLoggedIn(true);
                setUser(response.data);
                navigate("/home");
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data);
            });
    };
    return (
        <>
            <div>
                <form onSubmit={(e) => submitHandler(e)}>
                    {errors && <p className="text-red-500">{errors.errors}</p>}
                    <h2>Login</h2>
                    <label htmlFor="email">
                        Email:
                        <input
                            type="email"
                            value={user.email}
                            name="email"
                            id="email"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.email}
                            </p>
                        )}
                    </label>
                    <label htmlFor="password">
                        Password:
                        <input
                            type="password"
                            value={user.password}
                            name="password"
                            id="password"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.password}
                            </p>
                        )}
                    </label>
                    <button type="submit">Login</button>
                    <span>
                        Not a user yet?{" "}
                        <Link className="text-blue-500" to="/users/register">
                            Register!
                        </Link>{" "}
                    </span>
                </form>
            </div>
        </>
    );
};
export default LoginForm;
