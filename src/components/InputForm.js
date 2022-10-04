import "antd/dist/antd.css";
import { Button, Input, Row, Col } from "antd";
const InputForm = ({
  setList,
  handleAdd,
  editSubmit,
  list,
  inputRef,
  isEdit,
  dispatch,
}) => {
  return (
    <>
      <Row justify="center">
        <Col xs={18} xl={18}>
          <Input
            size="large"
            value={list}
            ref={inputRef}
            onChange={(e) => dispatch(setList(e.target.value))}
            placeholder="enter......"
          />
        </Col>
        <Col xs={4} xl={2}>
          {!isEdit && (
            <Button className="inputBtn" onClick={() => handleAdd()}>
              Add Task
            </Button>
          )}
          {isEdit && (
            <Button className="inputBtn" onClick={() => editSubmit()}>
              Edit Task
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
};
export default InputForm;
