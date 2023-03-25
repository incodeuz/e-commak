import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const CardComp = ({ isAdded, setIsAdded, image, title, desc, price, id }) => {
  // const [isAdded, setIsAdded] = useState(false);

  function deleteFunc() {
    fetch(`https://641e84efad55ae01ccab3810.mockapi.io/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 5000);
  }
  return (
    <Card
      style={{
        width: 300,
        marginBottom: "30px",
      }}
      cover={<img alt={title} src={image} />}
      actions={[
        <DeleteOutlined key="setting" onClick={() => deleteFunc()} />,
        <EditOutlined key="edit" />,
        <span>{price}</span>,
      ]}
    >
      <Meta
        title={title.length > 30 ? title.slice(0, 30) + "..." : title}
        description={desc.length > 50 ? desc.slice(0, 50) + "..." : desc}
      />
    </Card>
  );
};

export default CardComp;
