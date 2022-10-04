import "antd/dist/antd.css";
import { Button, Input, Row, Col } from "antd";
const Lists = ({ handleEdit, handleDelete, lists }) => {
  return (
    <ul>
      {lists.map((list, index) => (
        <Row key={index} justify="center" className="lists-item">
          <Col xs={16} xl={16}>
            {list}
          </Col>
          <Col xs={4} xl={4}>
            <Button
              className="listBtn editBtn"
              onClick={() => handleEdit(index)}
            >
              EDIT
            </Button>
          </Col>
          <Col xs={4} xl={4}>
            <Button
              className="listBtn deleteBtn"
              onClick={() => handleDelete(index)}
            >
              DELETE
            </Button>
          </Col>
        </Row>
      ))}
    </ul>
  );
};
export default Lists;
