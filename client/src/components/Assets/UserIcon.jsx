const UserIcon = (props) => {
    const { image, size } = props;
    const styling = `border border-black rounded-full shadow-sm max-w-16 max-h-16 min-w-16 min-h-${size}`;
    return (
        <>
            <img className={styling} src={image} alt="" />
        </>
    );
};
export default UserIcon;
