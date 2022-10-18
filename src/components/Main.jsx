import React from "react";
import { PageTitle } from "./PageTitle";
import { SearchBar } from "./SearchBar";
import { Divider } from "antd";

const Main = () => (
  <>
    <PageTitle />
    <Divider orientation="center">Search by User</Divider>
    <SearchBar />
  </>
);

export default Main;
