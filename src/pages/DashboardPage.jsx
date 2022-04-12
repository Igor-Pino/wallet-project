import styled from "styled-components";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTransactions } from "../redux/operations/financeOperations";
import { Header } from "../components/Common/Header";
import { HomeTab } from "../components/Dashboard/HomeTab/HomeTab";
import { Currency } from "../components/Dashboard/SideBar/Currency";
import { DiagramTab } from "../components/Dashboard/DiagramTab/DiagramTab";
import Balance from "../components/Dashboard/SideBar/Balance";
import Navigation from "../components/Dashboard/SideBar/Navigation";
import useMediaQuery from "../Hooks/useMediaQuery";
import Media from "react-media";

const PageWrap = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  padding: 15px 20px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(50px);
  flex-grow: 1;
  height: 100%;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    padding: 32px 32px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 16px;
    flex-direction: row;
  }
`;

const TabContainer = styled.div`
  @media screen and (min-width: 1024px) {
    padding-top: 40px;
    padding-left: 69px;
  }
`;

const SideBar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 40px;
    padding-right: 69px;
    flex-direction: column;
    border-right: 1px solid #e7e5f2;
    justify-content: start;
  }
`;

const MiddleSideBarWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 0;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export default function DashboardPage() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isWideScreen = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const getData = () => dispatch(fetchTransactions());

    getData();

    if (isWideScreen && pathname === "/dashboard/currency") {
      navigate("home");
    }
  }, [dispatch, pathname, isWideScreen, navigate]);

  return (
    <>
      <Header />
      <PageWrap>
        <SideBar>
          <MiddleSideBarWrap>
            <Navigation />
            <Media query="(min-width: 768px)" render={() => <Balance />} />
          </MiddleSideBarWrap>
          <Media query="(min-width: 768px)" render={() => <Currency />} />
        </SideBar>

        <TabContainer>
          <Routes>
            <Route index element={<HomeTab />} />
            <Route path="home" element={<HomeTab />} />
            <Route path="diagram" element={<DiagramTab />} />
            <Route path="currency" element={<Currency />} />
          </Routes>
        </TabContainer>
      </PageWrap>
    </>
  );
}
