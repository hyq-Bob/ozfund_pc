import TableComp from "@/Components/Table";
import type { ColumnsType } from "@/Components/Table";
import { ConfigProvider, Switch, Typography } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useStopPropagation } from "@/Hooks/StopPropagation";
const TableAllocation = (props) => {
  const columns: ColumnsType = [
    {
      title: "日期",
      dataIndex: "frezzTime",
      render: (_, record, index) => index + 1,
    },
    {
      title: "链上时间(天）",
      dataIndex: "address",
    },
    {
      title: "流入(OZC)",
      dataIndex: "num",
    },
    {
      title: "兑换(TOTO/OZC)",
      dataIndex: "num",
    },
    {
      title: "净流入(OZC)",
      dataIndex: "num",
    },
    {
      title: "当天生产(TOTO)",
      dataIndex: "num",
    },
    {
      title: "Prize Pool余额(OZC)",
      dataIndex: "num",
    },
    {
      title: "当天流通量(TOTO)",
      dataIndex: "num",
    },
    {
      title: "兑换价格(TOTO/OZC)",
      dataIndex: "num",
    },
  ];
  const [dataList, setDataList] = useState<any>([
    {
      key: 1,
      frezzTime: new Date(),
      address: "djahoaic4234kahdiuahdajag",
      num: 439487,
      notes: "Ozfund投注挖矿：sifjsidijjisd-Ozfund投注挖矿：Aioeowie",
      staffId: "xiaowu",
    },
  ]);
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerColor: "#333",
            colorText: "#666",
          },
        },
        token: {
          borderRadius: 2,
          controlHeight: 36,
        },
      }}
    >
      <TableComp
        className="_reset-table__no-btn"
        dataSource={dataList}
        columns={columns}
      />
    </ConfigProvider>
  );
};

export default TableAllocation;
