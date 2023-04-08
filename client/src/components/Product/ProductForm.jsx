import React, { Component } from "react";
import "./prod.css";
import axios from "axios";
import { Buffer } from "buffer";
import { addProduct } from "../../context/Context";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductName: "",
      ProductUrl: "",
      Price: "",
      Description: "",
      imageIsUpload: false,
    };
  }

  uploadFileToIPFS = async (fileBlob) => {
    const apiKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE5NzkzNUM4NUQxODZmNEJCN2NlN2U1RjhGYjY4NWQ4NUJlY0ZkREEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NjE5OTY3NzU0MywibmFtZSI6ImhhcnNoQDIzMDQifQ.gEWeVVohValCGdXRyGorzcYkc0umfpjcJOsPJxDMkQU";

    var config = {
      method: "post",
      url: "https://api.nft.storage/upload",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "image/jpeg",
      },
      data: fileBlob,
    };

    const fileUploadResponse = await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });

    return fileUploadResponse;
  };
  onUpload = async (e) => {
    // const image = document.querySelector(".img-uploaded");
    // const fileInput = document.querySelector(".img-fileInput");
    console.log("reached");
    const file = e.target.files[0];
    try {
      // const added = await ipfs.add(file);
      // const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      const reader = new window.FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = async () => {
        window.Buffer = Buffer;
        const res = Buffer(reader.result);
        var b = Buffer.from(res);
        let ab = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
        console.log(res);
        console.log(b);
        console.log(ab);

        const imageblob = new Blob([ab], { type: "image/jpg" });
        // Upload image to IPFS
        const imageUploadResponse = await this.uploadFileToIPFS(imageblob);
        const imageIPFS = imageUploadResponse.value.cid;
        const imageLink = `https://alchemy.mypinata.cloud/ipfs/${imageIPFS}/`;

        //     image.style.height = "100%";
        //   image.style.width = "100%";
        //   fileInput.style.opacity = "0";

        this.setState({ ProductUrl: imageLink });
        console.log(imageLink);
        this.setState({ imageIsUpload: true });
      };
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  SubmitHandle = async () => {
    console.log("Here");
    this.props.setLoading();
    await addProduct(
      this.state.ProductName,
      this.state.Description,
      this.state.ProductUrl,
      this.state.Price
    );
  };

  render() {
    return (
      <div class="prof1">
        <div class="prof-inner">
          <div className="im1"></div>
          <div className="im2"></div>
          <div className="fields">
          
          <div class="prof-img setting_image">
                      <img src={this.state.fileUrl} alt="" />
                      <input  type="file" onChange={this.onUpload} />
                    </div>
            
            <span class="sp">Name</span>
            <input
            class="common-in"
              type="text"
              placeholder="Name"
              value={this.state.ProductName}
              onChange={(e) => this.setState({ ProductName: e.target.value })}
            />
            <span class="sp">Price</span>
            <input
            class="common-in"
              type="Number"
              value={this.state.Price}
              placeholder="Price"
              onChange={(e) => this.setState({ Price: e.target.value })}
            />

            <textarea
              id="des"
              name="des"
              rows="4"
              cols="60"
              class="tarea"
              placeholder="Description"
              onChange={(e) => this.setState({ Description: e.target.value })}
            ></textarea>
             <div className="bn-div">
            <button class="common-sb">Add</button>
            </div>
            <button onClick={() => this.SubmitHandle()}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductForm;
