"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button/Button";
import InfoITem from "@/components/InfoItem/InfoITem";
import ProductItem from "@/components/ProductItem/ProductItem";
// import getOrder from "./GetOrder";
import Swal from "sweetalert2";
// import dataRef from "@/components/Config/config";
import ReactCardFlip from "react-card-flip";

export default function Home() {
  const [statePayment, setsStatePayment] = useState(true);
  const [stateTks, setsStateTks] = useState(true);

  const [detailsInfo, setDetailsInfo] = useState([
    {
      image: "/Product.png",
      name: "Ao thun",
      number: "0123456",
      money: 100000,
    },
  ]);
  const showAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "This is a success alert",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  function SetPayments() {
    setsStatePayment(!statePayment);
  }

  return (
    <div className={`grid wide ${styles.Payment}`}>
      <div className={`l-8 c-12 ${styles.right}`}>
        <div>
          {/* <div className={styles.head}>
                    <h1 className='darkColor'>Thông tin đơn hàng</h1>
                    {
                        stateDetais ? (<p onClick={SetDetails}>Ẩn</p>) : (<p onClick={SetDetails}>Xem</p>)
                    }
                </div>
                className={stateDetais ? `${styles.listInfoOn}` : `${styles.listInfoOff}`}
                */}
          <button onClick={showAlert}>Show Alert</button>
          <div className={styles.info}>
            <ul className={`${styles.listInfo} ${styles.container}`}>
              <h1 className="textTitle">Khách hàng</h1>
              <InfoITem title="Khách hàng" content="nguyen van A" />
              <InfoITem title="Số điện thoại" content="0123456987" />
              <InfoITem title="Địa chỉ" content="Da lat" />
            </ul>
            <ul className={`${styles.listInfo} ${styles.container}`}>
              <h1 className="textTitle">Nhân viên</h1>
              <InfoITem title="Nhân viên" content={"employeeName"} />
              <InfoITem
                title="Số điện thoại"
                content={"customer.assign.phone"}
              />
              <div className={styles.contact_img}>
                <Image
                  // onClick={() => openZalo(customer.assign.phone)}
                  src={"/zalo_icon.png"}
                  alt="error"
                  width={372}
                  height={288}
                />
                <Image
                  src={"/Phone.png"}
                  alt="error"
                  width={372}
                  height={288}
                />
                <Image
                  src={"/Facebook.png"}
                  alt="error"
                  width={372}
                  height={288}
                />
              </div>
            </ul>

            {/* <div className={styles.box_img}>
                            <Image className={styles.img} src={ThienTrang} />
                        </div> */}
            {/* {totalPay > 0 && (
                        <p className='darkColor' style={{ textAlign: 'center', padding: '30px 0 10px 0' }}>
                            Lưu ý : Khánh hàng vui lòng thanh toán số tiền cọc theo đã ghi trong đơn hàng để hệ thống tiến hành duyệt đơn.
                        </p>
                    )} */}
          </div>
        </div>
        <div className={`${styles.products} ${styles.container}`}>
          <h1 className="textTitle">Danh sách sản phẩm</h1>
          <div className={styles.product_list}>
            {detailsInfo.map((e, i) => (
              <div key={i}>
                <ProductItem index={i} content={e} />
              </div>
            ))}
          </div>

          <div className={styles.stt}>
            <div className={styles.box_btn}>
              <p className="">Trạng thái :</p>
              <p className="textTitle">{"status.text"}</p>
              {/* <Button className={['đã gửi', 'hoàn thành'].includes(status.text.toLocaleLowerCase()) ? styles.btn_stt_success : styles.btn_stt_warning}>
                                {status.text}
                            </Button> */}
              {/* <a href='#QR' onClick={SetDetails}>
                                <Button className={`l-0 c-12 ${styles.btn}`}>
                                    Thanh Toán
                                </Button>
                            </a> */}
            </div>
            <div className="c-12 l-6">
              <InfoITem
                darkColor={true}
                title="Tổng tiền"
                content={
                  <>
                    {"totalAmountFormat"}
                    <br />
                    (VAT: {"VATFormat"})
                  </>
                }
              />
              <InfoITem
                darkColor={true}
                title="Đã thanh toán"
                content={`depositFormat +  {depositRatio}`}
              />
              <InfoITem
                darkColor={true}
                title="Cần thanh toán"
                content={
                  <>
                    {"totalPayFormat"} <br /> (Chưa bao gồm phí ship){" "}
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.qrpay}`}>
        {1 > 0 ? (
          <ReactCardFlip flipDirection="horizontal" isFlipped={statePayment}>
            <div
              id="QR"
              className={`${styles.container} ${styles.height_left}`}
            >
              <div className={styles.Payhead}>
                {/* <Image src={lamp} /> */}
                <p className="textTitle">Mã QR thanh toán</p>
              </div>
              <div className={`${styles.pay_container}`}>
                <div className={` ${styles.box_QR}`}>
                  <Image
                    className={styles.QR_img}
                    // src={`https://img.vietqr.io/image/${BankInfo.BANKID}-${
                    //   BankInfo.ACCOUNT_NO
                    // }-compact.png?amount=${totalPay}&addInfo=${
                    //   detailsInfo.code + " Thanh toan don hang"
                    // }&accountName=${BankInfo.ACCOUNT_NAME}`}
                    src={"/QR.png"}
                    alt="error"
                    width={372}
                    height={288}
                  />
                </div>
                <div className="">
                  <div className={styles.pay_container_right}>
                    <div className={styles.bank}>
                      <Image
                        src={"/Bank.png"}
                        alt="error"
                        width={372}
                        height={288}
                      />
                      <div>
                        {/* <p>
                                                    Ngân hàng
                                                </p> */}
                        <p className="darkColor">{"BankInfo.BANKNAME"}</p>
                      </div>
                    </div>
                    <div className={styles.box_flex}>
                      <p>Chủ tài khoản:</p>
                      <p className="darkColor">{"BankInfo.ACCOUNT_NAME"}</p>
                    </div>
                    <div className={`row`}>
                      <div className={`col l-7 c-7 ${styles.box_flex}`}>
                        <p>Số tài khoản:</p>
                        <p className="darkColor">{"BankInfo.ACCOUNT_NO"}</p>
                      </div>
                      <div className={`col l-5 c-5 ${styles.box_btn_pay}`}>
                        <Button
                          // onClick={function (event) {
                          //   copyTextToClipboard(
                          //     BankInfo.ACCOUNT_NO,
                          //     event.currentTarget
                          //   );
                          // }}
                          className={styles.btn_pay}
                        >
                          Sao chép
                        </Button>
                      </div>
                    </div>
                    <div className={`row`}>
                      <div className={`col l-7 c-7 ${styles.box_flex}`}>
                        <p>Số tiền:</p>
                        <p className="darkColor">{"totalPayFormat"}</p>
                      </div>
                      <div className={`col l-5 c-5 ${styles.box_btn_pay}`}>
                        <Button
                          // onClick={function (event) {
                          //   copyTextToClipboard(
                          //     totalPayFormat,
                          //     event.currentTarget
                          //   );
                          // }}
                          className={styles.btn_pay}
                        >
                          Sao chép
                        </Button>
                      </div>
                    </div>
                    <div className={`row`}>
                      <div className={`col l-7 c-7 ${styles.box_flex}`}>
                        <p>Nội dung:</p>
                        <p className="darkColor">{"detailsInfo.code"}</p>
                      </div>
                      <div className={`col l-5 c-5 ${styles.box_btn_pay}`}>
                        <Button
                          // onClick={function (event) {
                          //   copyTextToClipboard(
                          //     detailsInfo.code,
                          //     event.currentTarget
                          //   );
                          // }}
                          className={styles.btn_pay}
                        >
                          Sao chép
                        </Button>
                      </div>
                    </div>
                    <Button
                      onClick={SetPayments}
                      className={` ${styles.btn_QR}`}
                    >
                      Hủy
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles.container} ${styles.paymentMT} ${styles.height_left}`}
            >
              <div className={styles.box_flex}>
                <Image
                  src={"/iconscheck.png"}
                  alt="error"
                  width={372}
                  height={288}
                />
                <p>Quý khách vui lòng kiểm tra lại thông tin cá nhân.</p>
              </div>
              <div className={styles.box_flex}>
                <p>
                  Nếu có bất kỳ vấn đề gì với đơn hàng, xin vui lòng liên hệ
                  ngay qua số điện thoại/Zalo: {"customer.assign.phone"} để được
                  hỗ trợ nhanh chóng.
                </p>
                <Image
                  src={"/iconsSupport.png"}
                  alt="error"
                  width={372}
                  height={288}
                />
              </div>
              <div className={styles.box_flex}>
                <Image
                  src={"/iconsPayment.png"}
                  alt="error"
                  width={372}
                  height={288}
                />
                <p>
                  Vui lòng thanh toán số tiền trong đơn hàng để chúng tôi có thể
                  xử lý đơn hàng của Quý khách ngay lập tức.
                </p>
              </div>
              <Button onClick={SetPayments} className={styles.btn_MT}>
                Thanh toán
              </Button>
            </div>
          </ReactCardFlip>
        ) : (
          <ReactCardFlip flipDirection="horizontal" isFlipped={stateTks}>
            <div
              id="QR"
              className={`${styles.container} ${styles.height_left} ${styles.tks}`}
            >
              <div className={styles.Payhead}>
                <Image
                  src={"/TTtks"}
                  className={styles.imgTks}
                  alt="error"
                  width={372}
                  height={288}
                />
              </div>
            </div>

            <div
              className={`${styles.container} ${styles.paymentMT} ${styles.height_left} `}
            >
              <div className={styles.box_flex}>
                <Image
                  src={"/iconsProduct"}
                  alt="error"
                  width={372}
                  height={288}
                />
                <p>
                  Thời gian sản xuất dự kiến từ 8-10 ngày. Không tính chủ nhật
                  và nghỉ lễ.
                </p>
              </div>

              <div className={styles.box_flex}>
                <p>
                  Nhận hàng được mở hàng kiểm tra. Đúng hàng, đủ số lượng sản
                  phẩm.
                </p>
                <Image
                  src={"/iconscheck"}
                  alt="error"
                  width={372}
                  height={288}
                />
              </div>
              <div className={styles.box_flex}>
                <Image
                  src={"/iconsSupport"}
                  alt="error"
                  width={372}
                  height={288}
                />
                <p>
                  Nếu gặp sự cố trong quá trình kiểm hàng và giao nhận hàng.
                  Mình liên hệ lại qua số điện thoại/ Zalo:{" "}
                  {"customer.assign.phone"} để có thể xử lý kịp thời .
                </p>
              </div>
            </div>
          </ReactCardFlip>
        )}

        <div className={`${styles.container} ${styles.transport}`}>
          <p className="darkColor">Vận chuyển và nhận hàng</p>
          <p>Mã vận chuyển : {"Chưa có thông tin"}</p>
          <p>Đơn vị vận chuyển : {"Chưa có thông tin"}</p>
          <p>
            Dự kiến nhận hàng :{" "}
            {"new Date(detailsInfo.deadline).toLocaleDateString(en-DE)"}
          </p>
          <p>Phí vận chuyển : {"Khách hàng thanh toán phí ship"}</p>
        </div>
      </div>
    </div>
  );
}
