//@ts-check

import InfoIOS from "../../components/User/InfoUser"
import LayoutUser from "../../components/User/LayoutUser";
import { useIPHONE } from "../../lib/swr-fetch";

const Info = () => {
    const { data, error } = useIPHONE();

    if (error) {
        return <div>Error Loading</div>
    }
    if (!data) {
        return <div>Loading</div>
    }

    return(
        <LayoutUser>
            <InfoIOS data={data}/>
        </LayoutUser>
    )
}

export default Info