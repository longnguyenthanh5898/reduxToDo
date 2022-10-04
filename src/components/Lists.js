import "antd/dist/antd.css";
import { Button, Input, Row, Col } from "antd";
const Lists = ({ handleEdit, handleDelete, lists }) => {
  return (
    <ul>
      {lists.map((list, index) => (
        <Row key={index} justify="center" className="lists-item">
          <Col xs={14} md={16} xl={20} className="list-text">
            {list}
          </Col>
          <Col xs={5} md={4} xl={2}>
            <Button
              type="warning"
              className="listBtn editBtn"
              onClick={() => handleEdit(index)}
            >
              EDIT
            </Button>
          </Col>
          <Col xs={5} md={4} xl={2}>
            <Button
              type="danger"
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
