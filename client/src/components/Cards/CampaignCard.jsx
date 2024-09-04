import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import UserIcon from "../UserIcon";

const CampaignCard = (props) => {
    const { campaign } = props;
    const { user } = useContext(LoggedInUserContext);
    return (
        <>
            <Link
                to={`/campaigns/${campaign._id}`}
                className="min-w-[569px] min-h-[308px]">
                <div
                    className="card bg-cover max-w-xl min-w-xl max-h-xl mb-8 rounded-2xl min-h-full"
                    style={{
                        backgroundImage: `url(${campaign.heroImage})`,
                        zIndex: "-1",
                    }}>
                    <div
                        className="absolute inset-0 bg-black opacity-50 rounded-2xl  "
                        style={{
                            zIndex: "-1",
                        }}></div>
                    <div
                        className="text-left shadow-xl p-8 pb-6 rounded-2xl min-w-[569px]"
                        style={{ zIndex: "-1" }}>
                        <h1 className="mb-5 text-3xl font-bold font-unifraktur text-white">
                            {campaign.name}
                        </h1>
                        <p className="mb-5 text-white h-20">
                            {campaign.heroText}
                        </p>
                        <ul className="flex justify-between px-14">
                            {campaign.players.map((player) => (
                                <li key={player._id}>
                                    <UserIcon image={player.image} size="10" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Link>
        </>
    );
};
export default CampaignCard;
