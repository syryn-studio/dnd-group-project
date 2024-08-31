import RegisterForm from "../../components/Forms/RegisterForm";
import background from "../../assets/images/backgrounds/root_bg.png";
const Register = () => {
    return (
        <>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    // filter: "blur(2px)",
                    zIndex: "-1",
                }}></div>
            <div className=" h-screen flex items-center justify-center">
                <div className="flex-col">
                    <h1 className="text-6xl mb-8 text-white font-unifraktur">
                        Adventure Archives
                    </h1>
                    <div className="flex justify-center">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Register;
