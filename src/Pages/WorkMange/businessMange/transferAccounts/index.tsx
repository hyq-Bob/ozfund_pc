import { EditOutlined } from "@ant-design/icons";
import SplitComp from "../common";
import { useState } from "react";
import { ModalTitle } from "@/Components/Modal";
import { Button, ConfigProvider, Input, InputNumber } from "antd";
import closeIcon from "@/assets/images/close.svg";
import Icon from "@/Components/Icon";

const BatchTransferAccounts = () => {
  let [listInfo] = useState([
    {
      id: "1",
      title: "长期支持者占比",
      percentage: 15,
    },
    {
      id: "2",
      title: "OZ基金会占比",
      percentage: 30,
    },
    {
      id: "3",
      title: "OZ团队成员占比",
      percentage: 20,
    },
    {
      id: "4",
      title: "流动性占比",
      percentage: 5,
    },
    {
      id: "5",
      title: "用户OZC投注主矿池挖矿",
      percentage: 20,
    },
    {
      id: "6",
      title: "VIP用户OZC投注VIP矿池挖矿",
      percentage: 10,
    },
  ]);
  function editorCb(crt) {
    console.log("crt: ", crt);
  }
  return (
    <div className="h-full overflow-y-auto bg-white rounded-[var(--border-radius)] mt-[.15rem]">
      <TitleComp title="TOTO矿池资产批量转账" />
      <SplitComp
        onEditor={editorCb}
        className="px-[.3rem] pt-[.2rem]"
        list={listInfo}
        opertion={
          <>
            <EditOutlined />
            <span className=" ml-[.1rem] font-normal">发起</span>
          </>
        }
      />
      <TitleComp title="Ozfund投注挖矿" />
      <ConfigProvider
        theme={{
          components: {
            Input: {
              paddingBlock: 6,
            },
            InputNumber: {
              paddingBlock: 6,
            },
          },
          token: {
            controlHeight: 36,
          },
        }}
      >
        <ul className="mt-[.2rem] px-[.3rem] pb-[.3rem]">
          <li className="flex gap-x-[.2rem] not-first-of-type:mt-[.15rem]">
            <Input size="middle" className="flex-1" placeholder="输入地址" />
            <InputNumber
              size="middle"
              className="flex-1"
              placeholder="输入数量"
            />
            <div className="grid cursor-pointer place-items-center w-[.4rem] h-[.36rem] rounded-[.02rem] bg-[var(--border-color)] opacity-20">
              <Icon
                style={{
                  cursor: "pointer",
                  fontSize: ".24rem",
                  color: "#333",
                }}
                name="h-icon-close"
              />
            </div>
          </li>
          <li className="flex gap-x-[.2rem] not-first-of-type:mt-[.15rem]">
            <Input size="middle" className="flex-1" placeholder="输入地址" />
            <InputNumber
              size="middle"
              className="flex-1"
              placeholder="输入数量"
            />
            <div className="grid cursor-pointer place-items-center w-[.4rem] h-[.36rem] rounded-[.02rem] bg-[var(--border-color)] opacity-20">
              <Icon
                style={{
                  cursor: "pointer",
                  fontSize: ".24rem",
                  color: "#333",
                }}
                name="h-icon-close"
              />
            </div>
          </li>
          <li className="flex justify-end mt-[.2rem] gap-[.1rem]">
            <Button className="w-[1rem] text-[#999]">取消</Button>
            <Button className="w-[1rem]" type="primary">
              发起转账
            </Button>
          </li>
        </ul>
      </ConfigProvider>
    </div>
  );
};
const TitleComp = ({ title }) => {
  return (
    <ModalTitle
      showTitleIcon
      title={title}
      classTitleName="py-[.2rem] ml-[.3rem]  border-b border-b-[#e6e6e6] text-[16px] text-[#333]"
      classIconName="w-[.03rem] h-[.13rem]"
    />
  );
};
export default BatchTransferAccounts;
