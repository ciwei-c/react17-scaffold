import Error from "./error";
import { withRouter } from "react-router-dom";
import { ReactPropsWithHistory } from "@/types/global";

const NotFound = (props: ReactPropsWithHistory) => {
	return <Error
		history={props.history}
		status="404"
		title="404"
		subTitle="Sorry, the page you visited does not exist." />
};

export default withRouter(NotFound);
