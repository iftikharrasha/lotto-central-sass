import React, { useState, useEffect } from "react";
import coinImg from "../../assets/img/coins.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboard.css";
import Modal from "react-modal";
import moment from "moment";
import { Navbar } from "../../Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";

export const Dashoboard = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [editId, setEditId] = useState(null);
  const makeDefaultRadio = [
    { id: 1, name: "HAZAR" },
    { id: 2, name: "LAKH" },
    { id: 2, name: "CRORE" },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setEditId(null);
    setLotteryData(null);
  };
  const [lotteryData, setLotteryData] = useState(null);
  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("onchnage input", name, value);
    setLotteryData({
      ...lotteryData,
      [name]: value,
    });
  };
  const handleImagechange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    // console.log("onchnage input",file);
    // const formDataImage = new FormData();
    // formDataImage.append("file", file);
    console.log("file", file);
    setLotteryData({
      ...lotteryData,
      [e.target.name]: file,
    });
  };
  const handleOnChange = (name) => {
    console.log("onchnage radio", name);
    setLotteryData({
      ...lotteryData,
      ["type"]: name,
      ["priceType"]: name,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("lotteryData", lotteryData);
    // let payload = {
    //   name: lotteryData && lotteryData.name,
    //   startTime: lotteryData && lotteryData.startTime,
    //   expiryTime: lotteryData && lotteryData.expiryTime,
    //   price: lotteryData && lotteryData.price,
    //   priceType: lotteryData && lotteryData.type,
    //   color: lotteryData && lotteryData.color,
    //   image:lotteryData && lotteryData.image,
    // };
    // console.log("payload", payload);
    const formData = new FormData();
    formData.append("name", lotteryData && lotteryData.name);
    formData.append("startTime", lotteryData && lotteryData.startTime);
    formData.append("expiryTime", lotteryData && lotteryData.expiryTime);
    formData.append("price", lotteryData && lotteryData.price);
    formData.append("priceType", lotteryData && lotteryData.type);
    formData.append("color", lotteryData && lotteryData.color);
    formData.append("image", lotteryData && lotteryData.image);
    onCloseModal();
    let tokens = localStorage.getItem("access_token");

    let headers = {
      Authorization: `Basic ${tokens}`,
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://api.lottocentral.in/dev/lotteries/create",
        formData,
        { headers: headers }
      );

      if (response.status === 200) {
        await getLotteries();
        toast.success("Created Successfully!");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("An error occurred:", error.response.data.message);
      setEmptyInput(error.response.data.message);
    }

    setLotteryData(null);
  };

  const getLotteries = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.lottocentral.in/dev/lotteries/get`
      );
      if (res.status === 200) {
        console.log("dataaaa", res?.data);
        setData(res?.data);
      }
      console.log("total companies", res?.data);
      // setCount(res?.data?.data.count);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const deleteLottery = async (id) => {
    try {
      setIsLoading(true);
      let tokens = localStorage.getItem("access_token");

      let headers = {
        Authorization: `Bearer ${tokens}`,
      };

      console.log("headers", headers);

      const res = await axios.put(
        `https://api.lottocentral.in/dev/lotteries/delete?id=${id}`,
        null, // Pass null as the second parameter for PUT requests with no data
        {
          headers: headers,
        }
      );

      if (res.status === 200) {
        await getLotteries();
        toast.success("Deleted Successfully!");
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const updateLottery = async (e) => {
    e.preventDefault();
    onCloseModal();
    try {
      setIsLoading(true);
      // let payload = {
      //   name: lotteryData && lotteryData.name,
      //   startTime: lotteryData && lotteryData.startTime,
      //   expiryTime: lotteryData && lotteryData.expiryTime,
      //   price: lotteryData && lotteryData.price,
      //   priceType: lotteryData && lotteryData.type,
      //   color: lotteryData && lotteryData.color,
      // };
      const formData = new FormData();
      formData.append("name", lotteryData && lotteryData.name);
      formData.append("startTime", lotteryData && lotteryData.startTime);
      formData.append("expiryTime", lotteryData && lotteryData.expiryTime);
      formData.append("price", lotteryData && lotteryData.price);
      formData.append("priceType", lotteryData && lotteryData.type || lotteryData.priceType);
      formData.append("color", lotteryData && lotteryData.color);
      formData.append("image", lotteryData && lotteryData.image );
      formData.append("imageUrl", lotteryData && lotteryData.imageUrl );
      let tokens = localStorage.getItem("access_token");

      let headers = {
        Authorization: `Bearer ${tokens}`,
      };

      console.log("headers", headers);
      console.log("updateLottery", formData);

      const res = await axios.put(
        `https://api.lottocentral.in/dev/lotteries/update?id=${editId}`,
        formData, // Pass null as the second parameter for PUT requests with no data
        {
          headers: headers,
        }
      );

      if (res.status === 200) {
        await getLotteries();
        // toast.success("Updated Successfully!");
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setLotteryData(null);
    setEditId(null);
  };

  useEffect(() => {
    getLotteries();
  }, []);
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      marginTop: "1rem",
      width: "50%",
      transform: "translate(-50%, -50%)",
      //   background: linear-gradient(40deg, rgba(161, 198, 221, 0.5), rgba(161, 198, 221, 0.225)),
    },
  };
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  console.log("data", data);
  return (
    <div style={{}} className="marginTop">
      <Toaster />

      {isLoading && (
        <div className="create-company-container">
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      )}
      <Navbar />
      <section className="hero" id="home" style={{ visibility: "hidden" }}>
        <div className="container">
          <div className="hero__content">
            <div className="hero__content__left">
              <h1
                data-aos="fade"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-offset="0"
                data-aos-once="true"
              >
                Welocme To <span className="yellow">Admin</span> <br />{" "}
                <span className="yellow">Panel</span>
              </h1>
              <p
                data-aos="fade"
                data-aos-delay="700"
                data-aos-duration="1000"
                data-aos-offset="0"
                data-aos-once="true"
              >
                Lotto centrals makes daily live easier and that in a safe way,
                by eliminating the till in all situations, on- and offline.{" "}
              </p>
            </div>
            <div className="hero__content__right">
              <img
                src={coinImg}
                alt="coins"
                width="546px"
                height="401px"
                data-aos="fade"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-offset="0"
                data-aos-once="true"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="dashboard-container" style={{ marginTop: "-10rem" }}>
        <div className="dashboard-header">
          <h2>DASHBOARD</h2>
          <button
            onClick={() => {
              handleLogOut();
            }}
            className="main__btn btn2"
          >
            Logout
          </button>
        </div>
        <div className="dashboard-navbar-table-container">
          <div className="dashboard-navbar-container">
            <div className="header-navbar">
              <div className="head-para">
                <h1>Hello, Admin </h1>
              </div>
              <img src={coinImg} alt="#" />
            </div>
          </div>
          <div className="dashboard-table-container">
            <div className="table-create-header">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div></div>
              </div>
              <button className="main__btn" onClick={onOpenModal}>
                Add Lottery
              </button>
            </div>
            <table style={{}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Color</th>
                  <th>Expiry Date</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, index) => (
                    <tr
                      key={item.id}
                      className={index % 2 === 0 ? "green-row" : "white-row"}
                    >
                      <td>{item.name ? item.name : "N/A"}</td>
                      <td>{item.priceType ? item.priceType : "N/A"}</td>
                      <td>{item.price ? item.price : "N/A"}</td>
                      <td>
                        {item.color ? (
                          <div
                            style={{
                              background: `${item.color}`,
                              height: "40px",
                              width: "40px",
                              borderRadius: "8px",
                            }}
                          ></div>
                        ) : (
                          "N/A"
                        )}
                      </td>
                      <td>{item.expiryTime ?  moment.utc(item.expiryTime).format("YYYY-MM-DD hh:mm A") : "N/A"}</td>
                      <td>
                        <button
                          onClick={() => {
                            setEditId(item.id);
                            setLotteryData(item);
                            onOpenModal();
                            //   setform(item);
                          }}
                          className="dashboard-edit-button"
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteLottery(item.id)}
                          className="dashboard-delete-button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* 
            {((data && data.length >= 10) || page > 1) && (
              <div className="pagination-dashboard">
                <button
                  className="prev-button-dashboard"
                //   onClick={handlePrevPage}
                  disabled={page === 1 ? true : false}
                  style={{
                    backgroundColor: page === 1 ? "#C2E7D3" : "#26BC6A  ",
                  }}
                >
                  Previous
                </button>
                <button
                  className="next-button-dashboard"
                //   onClick={handleNextPage}
                  disabled={data.length < 10 ? true : false}
                  style={{
                    backgroundColor: data.length < 10 ? "#C2E7D3" : "#26BC6A",
                  }}
                >
                  Next
                </button>
              </div>
            )}
            */}
          </div>
        </div>
      </div>
      {open && (
        <Modal isOpen={open} onRequestClose={onCloseModal} style={customStyles}>
          <div style={{ padding: "1rem" }}>
            <h2>
              {editId && editId ? "Update" : "Add"} Lottery
            </h2>
            <div style={{ maxHeight: "30rem", overflowY: "auto" }}>
              <form encType="multipart/form-data" className="formPopup">
                <div
                  className="fields"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <label style={{ color: "white", fontWeight: "bold" }}>
                    Lottery Name
                  </label>
                  <input
                    className="inputStyle"
                    type="text"
                    name="name"
                    value={lotteryData && lotteryData.name}
                    placeholder="Name"
                    onChange={handlechange}
                    required
                  />
                  <label style={{ color: "white", fontWeight: "bold" }}>
                    Lottery Image
                  </label>
                  <input
                    className="inputStyle"
                    type="file"
                    name="image"
                    // value={lotteryData && lotteryData.image}
                    placeholder="Image"
                    onChange={handleImagechange}
                    required
                  />
                  <span style={{ color: "green" }}>
                    {lotteryData && lotteryData.imageUrl
                      ? "Image already Exists"
                      : ""}
                  </span>
                  <label style={{ color: "white", fontWeight: "bold" }}>
                    Lottery Price
                  </label>
                  <input
                    type="text"
                    className="inputStyle"
                    placeholder="Price"
                    value={lotteryData && lotteryData.price}
                    name="price"
                    // value={for}
                    onChange={(e) => {
                      const result = e.target.value.replace(
                        /^-?\D*(\.\D{0,2})?$/,
                        ""
                      );
                      const re = /^\d*(?:\.\d{0,2})?$/;
                      if (e.target.value === "" || re.test(e.target.value)) {
                        console.log("here in upadte")
                        handlechange(e);
                      }
                    }}
                    required
                  />
                  <label style={{ color: "white", fontWeight: "bold" }}>
                    Lottery Type
                  </label>
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "50%",
                    }}
                  >
                    {makeDefaultRadio &&
                      makeDefaultRadio.map((item, index) => (
                        <label
                          style={{ cursor: "pointer" }}
                          key={index}
                          onClick={() => {
                            handleOnChange(item.name);
                          }}
                        >
                          <input
                            type="radio"
                            value={
                              (lotteryData && lotteryData.priceType) ||
                              item.name
                            }
                            // defaultValue={lotteryData && lotteryData.priceType}
                            name="type"
                            onChange={() => {
                              handleOnChange(item.name);
                            }}
                            checked={
                              lotteryData && lotteryData.priceType === item.name
                            }
                          />{" "}
                          {item.name}
                        </label>
                      ))}
                  </div>
                  <label style={{ color: "white", fontWeight: "bold" }}>
                    Lottery color
                  </label>
                  <input
                    type="color"
                    name="color"
                    className="inputStyle"
                    value={lotteryData && lotteryData.color}
                    style={{ width: "30%" }}
                    placeholder="color"
                    onChange={handlechange}
                    required
                  />{" "}
                  <label style={{ color: "white", fontWeight: "bold" }}>
                    Start Date
                  </label>
                  <input
                    type="datetime-local"
                    className="inputStyle"
                    name="startTime"
                    // value="2018-06-12T19:30"
                    value={
                      lotteryData &&
                      lotteryData.startTime 
                      &&
                      moment.utc(lotteryData.startTime).format("YYYY-MM-DDTHH:mm")
                    }
                    placeholder="Start Date"
                    onChange={handlechange}
                    required
                  />{" "}
                  <label style={{ color: "white", fontWeight: "bold" }}>
                    Expiry Date
                  </label>
                  <input
                    type="datetime-local"
                    className="inputStyle"
                    name="expiryTime"
                    value={
                      lotteryData &&
                      lotteryData.expiryTime 
                      &&
                      moment.utc(lotteryData.expiryTime).format("YYYY-MM-DDTHH:mm")
                    }
                    placeholder="Expire Date"
                    onChange={handlechange}
                    required
                  />
                  <button
                    type="submit"
                    className="main__btn"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                    onClick={(e) => {
                      if (editId) {
                        updateLottery(e);
                      } else {
                        handleSubmit(e);
                      }
                    }}
                  >
                    {editId && editId ? "UPDATE" : "SAVE"}
                  </button>
                  <button
                    type="submit"
                    className="main__btn"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                    onClick={onCloseModal}
                  >
                    CLOSE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
