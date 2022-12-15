import React from "react";
import {
  FaCalendar,
  FaDollarSign,
  FaClipboardList,
  FaComments,
  FaRegCommentDots,
  FaPoundSign,
} from "react-icons/fa";
import InfoCard from "./InfoCard";

function Overview() {
  return (
    <>
      <InfoCard
        title="Earnings(Monthly)"
        desc="50,000(approx.)"
        icon={<FaCalendar className="icon" />}
        border_left="border-left-primary"
      />

      <InfoCard
        title="Earnings(Annual)"
        desc="3,455,000"
        icon={<FaPoundSign className="icon" />}
        border_left="border-left-success"
      />

      <InfoCard
        title="Tasks"
        desc="45%"
        icon={<FaClipboardList className="icon" />}
        border_left="border-left-info"
      />

      <InfoCard
        title="Pending requests"
        desc="23"
        icon={<FaRegCommentDots className="icon" />}
        border_left="border-left-warning"
      />
    </>
  );
}

export default Overview;
