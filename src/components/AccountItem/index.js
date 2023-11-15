import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("Wrapper")}>
      <img
        className={cx("avatar")}
        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/395600337_1488167625309303_271981549836388819_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZNcG7QUpwo4AX-qNAA1&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBUdwPs8ZLZzz9ql6xj-ue6SUsmFmxQXlfHM5vE_jbFEw&oe=6556F0F6"
        alt="Hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>WanFiT</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>WangF</span>
      </div>
    </div>
  );
}

export default AccountItem;
