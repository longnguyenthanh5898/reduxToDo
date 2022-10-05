import "antd/dist/antd.css";
import { Button, Row, Col, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
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
              <Space>
                <EditOutlined />
              </Space>
            </Button>
          </Col>
          <Col xs={5} md={4} xl={2}>
            <Button
              type="danger"
              className="listBtn deleteBtn"
              onClick={() => handleDelete(index)}
            >
              <Space>
                <DeleteOutlined />
              </Space>
            </Button>
          </Col>
        </Row>
      ))}
    </ul>
  );
};
export default Lists;
