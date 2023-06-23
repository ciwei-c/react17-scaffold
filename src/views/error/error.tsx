import { Button, Result, ResultProps } from "antd";
import { HOME_URL } from "@/utils/config";
import "./index.less";
import { useHistory } from "react-router-dom";

const Error = (props: ResultProps) => {
  const history = useHistory()
  const goHome = () => {
    history.replace(HOME_URL)
  };
  return (
    <Result
      status={props.status}
      title={props.title}
      subTitle={props.subTitle}
      extra={
        <Button type="primary" onClick={goHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default Error;
