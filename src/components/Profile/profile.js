import { useDispatch, useSelector } from "react-redux";
import { changeShowName } from "../../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);

    const handleChangeShowName = () => {
        dispatch(changeShowName);
    }

    return (
        <>
            <h2>My Profile</h2>
            <input type="checkbox" onChange={handleChangeShowName} />
            {data.showName && <span>{data.name}</span>}
        </>
    );
};
