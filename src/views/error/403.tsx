import Error from "./error";
import { withRouter } from "react-router-dom";
import { ReactPropsWithHistory } from "@/types/global";

const NotAuth = (props: ReactPropsWithHistory) => {
	return <Error
		history={props.history}
		status="403"
		title="403"
		subTitle="Sorry, you are not authorized to access this page." />
};

export default withRouter(NotAuth);
