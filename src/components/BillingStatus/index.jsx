"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { Download, Undo2 } from "lucide-react"; // Import the Download icon from Lucide React
import React, { useState } from "react";
import { Heading } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import ActionPopover from "./ActionPopover";
import RefundModal from "./RefundModal";
export default function BillingStatus({ transactionDetails }) {
  const [openPopoverIndex, setOpenPopoverIndex] = useState(null);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [refundTransactionDetails, setRefundTransactionDetails] =
    useState(null);
  console.log("i am billing info", transactionDetails);

  // Check if transactionDetails is provided and has data
  const tableData =
    transactionDetails?.data?.map((charge) => ({
      // chargeId: charge.payment_method_details.card.last4, // Last four digits of the card
      date: new Date(charge.created * 1000).toLocaleDateString(), // Convert timestamp to date
      totalAmount: `${(charge.amount / 100).toFixed(
        2
      )} ${charge.currency.toUpperCase()}`,
      status: charge.amount_refunded > 0 ? "Refunded" : charge.status,
      receiptUrl: charge.receipt_url,
      action: charge.payment_intent,
    })) || [];

  const tableColumnHelper = createColumnHelper();

  const tableColumns = React.useMemo(() => {
    return [
      tableColumnHelper.accessor("chargeId", {
        cell: (info) => (
          <div className="flex flex-col items-start">
            {/* <Heading
              size="headingxs"
              as="p"
              className="text-[0.88rem] font-semibold text-text"
            >
              **** **** **** {info.getValue()} 
            </Heading> */}
            <Heading as="p" className="text-[1.00rem] font-normal text-text">
              {info.row.original.date}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex py-[0.50rem] items-center">
            <Heading as="p" className="text-[1.00rem] font-medium text-body">
              Date
            </Heading>
          </div>
        ),
        meta: { width: "11.00rem" },
      }),
      tableColumnHelper.accessor("totalAmount", {
        cell: (info) => (
          <div className="flex items-center">
            <Heading as="p" className="text-[1.00rem] font-normal text-text">
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex py-[0.50rem] items-center">
            <Heading as="p" className="text-[1.00rem] font-medium text-body">
              Total
            </Heading>
          </div>
        ),
        meta: { width: "11.00rem" },
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex items-center">
            <Heading
              as="p"
              className={`text-[1.00rem] font-normal  capitalize ${
                info.getValue() === "succeeded"
                  ? "!text-green-600"
                  : "!text-red-600"
              }`}
            >
              {info.getValue()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex py-[0.50rem] items-center">
            <Heading as="p" className="text-[1.00rem] font-medium text-body">
              Status
            </Heading>
          </div>
        ),
        meta: { width: "8.00rem" },
      }),
      tableColumnHelper.accessor("receiptUrl", {
        cell: (info) => (
          <div className="flex items-center">
            <a
              href={info.getValue()} // Set the href to the URL of the receipt
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="flex items-center text-blue-500 cursor-pointer"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>
        ),
        header: (info) => (
          <div className="flex py-[0.50rem] items-center">
            <Heading as="p" className="text-[1.00rem] font-medium text-body">
              Receipt
            </Heading>
          </div>
        ),
        meta: { width: "8.00rem" },
      }),

      tableColumnHelper.accessor("action", {
        cell: (info) => {
          const options = [
            {
              label: "Refund Request",
              icon: <Undo2 size={18} />,
              onClick: () => {
                setIsRefundModalOpen(true);
                setRefundTransactionDetails(info.row.original);
              },
            },
          ];

          return (
            <ActionPopover
              options={options}
              isOpen={openPopoverIndex === info.row.index}
              onToggle={() =>
                setOpenPopoverIndex(
                  openPopoverIndex === info.row.index ? null : info.row.index
                )
              }
            />
          );
        },
        header: (info) => <></>,
        meta: { width: "8.00rem" },
      }),
    ];
  }, [openPopoverIndex]);

  return (
    <div className="mb-[13.75rem] w-[34.37rem] flex flex-col gap-[2.50rem] md:self-stretch md:w-full">
      <ReactTable
        size="xs"
        bodyProps={{ className: "" }}
        headerCellProps={{ className: "bg-gray-10101" }}
        cellProps={{ className: "border-border border-b border-solid" }}
        columns={tableColumns}
        data={tableData}
      />
      <RefundModal
        isOpen={isRefundModalOpen}
        onOpenChange={setIsRefundModalOpen}
        transactionDetails={refundTransactionDetails}
      />
    </div>
  );
}
