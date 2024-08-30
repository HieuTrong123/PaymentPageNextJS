import styles from "./Popup.module.css";
import Image from "next/image";
interface Popup {
  show: boolean;
  onClose: any;
  children: React.ReactNode;
}
const Popup = ({ show, children, onClose }: Popup) => {
  return show ? (
    <>
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <div className={styles.head}>
            <Image
              className={styles.backImg}
              src={"/ArrowLeft.png"}
              alt="error"
              width={500}
              height={354}
              onClick={onClose}
            />
            <h2>Tạo gói cước mới</h2>
          </div>
          {children}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Popup;
