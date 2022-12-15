import React from "react";
import { Col } from "react-bootstrap";
import { EarningsChart } from "../../utils/charts/EarningsChart";
import ChartsContainerCard from "../ChartsContainerCard/ChartsContainerCard";
import { RevenueSourcesPieChart } from "../../utils/charts/RevenueSourcesPieChart";
import Projects from "../Projects/Projects";
import Overview from "../Overview/Overview";
import ColorCards from "../ColorCards/ColorCards";
import Illustrations from "../Illustrations/Illustrations";
import DevelopmentApproach from "../DevelopmentApproach/DevelopmentApproach";
import DashboardTitle from "../DashboardTitle/DashboardTitle";

function Dashboard() {
  return (
    <div className="dashboard container-fluid p-md-3 p-sm-1 ">
      {/* Title */}
      <DashboardTitle />
      {/* Overview */}
      <div className="infoCards row">
        <Overview />
      </div>
      {/* Charts*/}
      <div className="charts row">
        <Col xl={8} lg={7}>
          <ChartsContainerCard
            chart={<EarningsChart />}
            header="Earnings Overview"
            dropDown
          />
        </Col>
        <Col xl={4} lg={5}>
          <ChartsContainerCard
            chart={<RevenueSourcesPieChart />}
            header="Revenue Sources"
            dropDown
          />
        </Col>
      </div>
      {/* Projects Color Cards,Illustrations,Development Approach*/}
      <div className="row">
        <Col lg={6}>
          <ChartsContainerCard chart={<Projects />} header="Projects" />
          <ColorCards />
        </Col>
        <Col lg={6}>
          <Illustrations />
          <DevelopmentApproach />
        </Col>
      </div>
    </div>
  );
}

export default Dashboard;
