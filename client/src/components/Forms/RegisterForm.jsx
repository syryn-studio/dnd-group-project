import { useState, useContext } from "react";
import UserService from "../../services/users.services";
import { useNavigate } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { setUser, setIsLoggedIn } = useContext(LoggedInUserContext);
    const [errors, setErrors] = useState({});
    const [user, setUserState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserState((prevUserValue) => ({ ...prevUserValue, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        UserService.register(user)
            .then((response) => {
                setIsLoggedIn(true);
                setUser(response.data);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data);
            });
    };
    return (
        <>
            <div>
                <form onSubmit={(e) => submitHandler(e)}>
                    <h2>Register</h2>
                    <label htmlFor="firstName">
                        First Name:
                        <input
                            type="text"
                            value={user.firstName}
                            name="firstName"
                            id="firstName"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.firstName}
                            </p>
                        )}
                    </label>
                    <label htmlFor="lastName">
                        Last Name:
                        <input
                            type="text"
                            value={user.lastName}
                            name="lastName"
                            id="lastName"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.lastName}
                            </p>
                        )}
                    </label>
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
                    <label htmlFor="confirmPassword">
                        Confirm Password:
                        <input
                            type="password"
                            value={user.confirmPassword}
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={(e) => changeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.confirmPassword}
                            </p>
                        )}
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );
};
export default RegisterForm;
