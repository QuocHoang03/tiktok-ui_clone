import Tippy from "@tippyjs/react/headless"; // different import path!
import { Wrapper as PopperWrapper } from "../";
import MenuItem from "./MenuItem";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  console.log("check1:" + typeof items);
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      delay={[0, 700]}
      interactive="true"
      placement="bottom-end"
      render={(attrs) => {
        return (
          <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>{renderItems()}</PopperWrapper>
          </div>
        );
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
