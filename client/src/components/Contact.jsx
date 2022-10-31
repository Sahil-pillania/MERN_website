import React, { useEffect, useState } from "react";

const Contact = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState({});

  const callContactPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      //console.log("data after fetch request is :" + data);
      setData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log("can't redirect  " + error);
      // navigate("/login");
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between details">
              {/* for phone no  */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <div className="contact_info_icons">
                  <i className="zmdi zmdi-phone-in-talk"></i>
                </div>
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 43546754634</div>
                </div>
              </div>

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <div className="contact_info_icons">
                  <i className="zmdi zmdi-email"></i>
                </div>
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">email@email.com</div>
                </div>
              </div>

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <div className="contact_info_icons">
                  <i className="zmdi zmdi-gps-dot"></i>
                </div>
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">New Delhi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form  */}
      <div className="contact_form">
        <div className="container">
          <div className="row form-col">
            <div className="col-lg-10 offset-lg-1 ">
              <div className="contact_form_container py-5 ">
                <div className="contact_form_title">Get in Touch</div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-center align-items-between details">
                    <input
                      type="text"
                      id="contact_form-name"
                      className="contact_form_name input_field"
                      value={data.name}
                      placeholder="Your Name"
                      required={true}
                    />
                    <input
                      type="text"
                      id="contact_form-email"
                      className="contact_form_email input_field"
                      value={data.email}
                      placeholder="Your email"
                      required={true}
                    />
                    <input
                      type="number"
                      id="contact_form-number"
                      className="contact_form_number input_field"
                      value={data.phone}
                      placeholder="Your phone number"
                      required={true}
                    />
                  </div>
                  <div className="contact_form-text mt-5">
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="6"
                      className="text_field contact_form_message"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
