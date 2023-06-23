import { Button, Result, ResultProps } from "antd";
import { HOME_URL } from "@/utils/config";
import "./index.less";
import { ReactPropsWithHistory } from "@/types/global";

type Props = ReactPropsWithHistory & ResultProps;

const Error = (props: Props) => {
  const goHome = () => {
    props.history.replace(HOME_URL)
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
