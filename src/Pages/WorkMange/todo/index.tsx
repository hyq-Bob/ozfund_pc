import { Button } from "antd";
import TableConfig from "./table.jsx";
import linkIcon from "@/assets/images/link.svg";
import { useStopPropagation } from "@/Hooks/StopPropagation.js";
import ModalScope from "@/Components/Modal";
import styleScope from "./index.module.less";
import { createStyles } from "antd-style";
import { useState } from "react";
const useStyle = createStyles(({ token }) => ({
  "my-modal-body": {
    display: "grid",
    gridTemplateColumns: `repeat(4, 1fr) !important`,
    gap: ".15rem",
    paddingInline: ".5rem !important",
    placeItems: "center",
    minHeight: ".99rem",
  },
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },
  "my-modal-header": {
    borderBottom: `1px solid var(--border-color)`,
    padding: ".2rem 0.3rem",
  },
  "my-modal-footer": {
    padding: ".2rem .3rem .24rem",
    borderTop: `1px solid var(--border-color)`,
  },
  "my-modal-content": {
    padding: `0 !important`,
  },
}));
const Todo = () => {
  let [stop] = useStopPropagation();
  let [signatureOpen, setSignatureOpen] = useState(false);
  function signatureCb(e, crt, index) {
    stop(e, () => {
      setSignatureOpen(!signatureOpen);
    });
  }
  return (
    <>
      <div className="flex justify-end bg-[var(--white)] px-[.2rem] py-[.15rem]">
        <Button
          className="flex items-center h-[.35rem]"
          type="primary"
          icon={<img src={linkIcon} alt="" />}
        >
          连接钱包
        </Button>
      </div>
      <TableConfig onEditor={signatureCb} />
      <ModalComp
        signatureOpen={signatureOpen}
        onOk={signatureCb}
        onCancel={signatureCb}
      />
    </>
  );
};
const ModalComp = (props) => {
  const { styles } = useStyle();
  const classNames = {
    body: styles["my-modal-body"],
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
  };
  return (
    <ModalScope
      cancelText="取消"
      onOk={props.onOk}
      onCancel={props.onCancel}
      classNames={classNames}
      showFooter={true}
      open={props.signatureOpen}
      title={
        <span className="flex items-center font-normal">
          <i className={styleScope["icon"]}></i>签名
        </span>
      }
    ></ModalScope>
  );
};
export default Todo;
