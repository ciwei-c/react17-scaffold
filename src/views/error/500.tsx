import Error from "./error";
import { withRouter } from "react-router-dom";
import { ReactPropsWithHistory } from "@/types/global";

const NotNetwork = (props: ReactPropsWithHistory) => {
	return <Error
		history={props.history}
		status="500"
		title="500"
		subTitle="Sorry, something went wrong." />
};

export default withRouter(NotNetwork);
