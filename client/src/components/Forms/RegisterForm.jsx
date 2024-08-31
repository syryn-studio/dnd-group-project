import { useState, useContext } from "react";
import UserService from "../../services/users.services";
import { useNavigate, Link } from "react-router-dom";
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
            <div className="card w-96 shadow-2xl bg-black bg-opacity-75 px-8 rounded-none">
                <form
                    onSubmit={(e) => submitHandler(e)}
                    className="card-content">
                    <h2 className="text-2xl text-center pt-8 pb-4 text-white font-inter ">
                        Register
                    </h2>
                    <div className="flex flex-col gap-4">
                        <label
                            htmlFor="firstName"
                            className="input input-bordered flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                className="grow"
                                type="text"
                                placeholder="First Name"
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
                        <label
                            htmlFor="lastName"
                            className="input input-bordered flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                className="grow"
                                type="text"
                                placeholder="Last Name"
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
                        <label
                            htmlFor="email"
                            className="input input-bordered flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                className="grow"
                                type="email"
                                placeholder="Email Address"
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
                        <label
                            htmlFor="password"
                            className="input input-bordered flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                className="grow"
                                type="password"
                                placeholder="Password"
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
                        <label
                            htmlFor="confirmPassword"
                            className="input input-bordered flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                className="grow"
                                type="password"
                                placeholder="Confirm Password"
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
                    </div>
                    <div className="pt-4 mb-10 flex justify-between">
                        <span className="text-sm text-white">
                            Already have an account?{" "}
                            <Link className="text-blue-500" to="/">
                                Login!
                            </Link>{" "}
                        </span>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default RegisterForm;
