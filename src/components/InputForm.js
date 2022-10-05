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
  console.log(isEdit);
  return (
    <>
      <Row justify="center">
        <Col xs={18} xl={18}>
          <Input
            className="text-input"
            size="large"
            value={list}
            ref={inputRef}
            onChange={(e) => dispatch(setList(e.target.value))}
            placeholder="Enter task......"
          />
        </Col>

        {!isEdit && (
          <Col xs={4} xl={2}>
            <Button className="inputBtn" onClick={() => handleAdd()}>
              Add Task
            </Button>
          </Col>
        )}

        {isEdit && (
          <Col xs={4} xl={2}>
            <Button className="inputBtn" onClick={() => editSubmit()}>
              Edit Task
            </Button>
          </Col>
        )}
      </Row>
    </>
  );
};
export default InputForm;
