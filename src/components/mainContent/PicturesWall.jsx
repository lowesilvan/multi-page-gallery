import React from "react";

//Image upload modules
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useState } from "react";

function PicturesWall({ imageUpload, setImageUpload }) {
  const [previewVisible, setPreviewVisible] = useState(false);
//   const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  //remove image
  const handleCancel = () => {
    setPreviewVisible(false);
  };

  //Image Preview
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setImageUpload(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = (fileList) => {
    setFileList(fileList);
  };
  console.log(imageUpload)
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  console.log(fileList);
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        // fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={imageUpload} />
      </Modal>
    </>
  );
}

export default PicturesWall;
