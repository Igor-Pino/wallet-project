import { useState } from "react";
import styled from "styled-components";
import { DropDown } from "../../DropDown";
import { Chart } from "./Chart";
import { StatisticsTable } from "./StatisticsTable";

const DiagramTabWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DropDownWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  max-width: 280px;
  gap: 32px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const TableWrap = styled.div``;
const generateColor = () => {
  const colors = [
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
    "#000080",
    "#00FFFF",
    "#FFFF00",
    "#FF00FF",
    "#D2691E",
    "#00FFFF",
    "#9ACD32",
    "#FF0000",
    "#1E90FF",
    "#FF7F50",
  ];
  const indexColor = Math.floor(Math.random() * (colors.length - 1) + 0);
  return colors[indexColor];
};
//  ______________________Для пропсов диаграммы прокидываем объет такого формата,
//  в котором обязательно должны быть category, categorySum, color, totalSum__________________
const statistics = {
  categories: [
    {
      category: "Продукты",
      categorySum: 2050,
      color: " rgba(254, 208, 87, 1)",
    },
    {
      category: "Ежемесячные расходы",
      categorySum: 500,
      color: "rgba(253, 148, 152, 1)",
    },
    {
      category: "Авто",
      categorySum: 7800,
      color: "rgba(36, 204, 167, 1)",
    },
  ],
  totalSum: 10350,
};

// Данные, которые приходят с бэкенда
// const data = [
//   {
//     isExpense: true,
//     categories: [
//       {
//         category: "Авто",
//         categorySum: 8500,
//       },
//       {
//         category: "Дом",
//         categorySum: 85.5,
//       },
//       {
//         category: "Еда",
//         categorySum: 800,
//       },
//       {
//         category: "Образование",
//         categorySum: 500,
//       },
//     ],
//     totalSum: 9885.5,
//   },
//   {
//     isExpense: false,
//     categories: [
//       {
//         category: "Регулярный доход",
//         categorySum: 15000,
//       },
//     ],
//     totalSum: 15000,
//   },
// ];

// ------------------ Для ПРОПСОВ

// Данные для отрисовки расходов
// let statExpense;
// Данные для отрисовки доходов
// let statIncome;
//Сумма всех расходов
// let sumExpense;
//Сумма всех доходов
// // let sumIncome;

// ---------------------- Как обработать полученные данные из бэкенда
// data.map((st) => {
//   if (st.isExpense === true) {
//     sumExpense = st.totalSum.toFixed(2);
//     st.categories.map((category) => {
//       category.categorySum = category.categorySum.toFixed(2);
//       category["color"] = generateColor();
//       return st.categories;
//     });

//     return (statExpense = st);
//   } else {
//     sumIncome = st.totalSum.toFixed(2);
//     st.categories.map((category) => {
//       category.categorySum = category.categorySum.toFixed(2);
//       category["color"] = generateColor();
//       return st.categories;
//     });
//     return (statIncome = st);
//   }
// });

export const DiagramTab = () => {
  const mounth = [
    { name: "Январь", id: 1 },
    { name: "Февраль", id: 2 },
    { name: "Март", id: 3 },
    { name: "Апрель", id: 4 },
    { name: "Май", id: 5 },
    { name: "Июнь", id: 6 },
    { name: "Июль", id: 7 },
    { name: "Август", id: 8 },
    { name: "Сентябрь", id: 9 },
    { name: "Октябрь", id: 10 },
    { name: "Ноябрь", id: 11 },
    { name: "Декабрь", id: 12 },
  ];
  const years = [
    { name: "2022", id: 1 },
    { name: "2021", id: 2 },
    { name: "2020", id: 3 },
    { name: "2019", id: 4 },
    { name: "2018", id: 5 },
    { name: "2017", id: 6 },
    { name: "2016", id: 7 },
    { name: "2015", id: 8 },
    { name: "2014", id: 9 },
    { name: "2013", id: 10 },
    { name: "2012", id: 11 },
    { name: "2011", id: 12 },
  ];
  // Обов'язкові поля для випадаючого списку: name і id

  const [selectedMounth, setSelectedMounth] = useState({});
  const [selectedYear, setSelectedYear] = useState({});
  return (
    <DiagramTabWrap>
      <Chart statistics={statistics} />
      <TableWrap>
        <DropDownWrap>
          <DropDown
            options={mounth}
            selectedOption={selectedMounth}
            setSelectedOption={setSelectedMounth}
            placeholder="Месяц"
          />
          <DropDown
            options={years}
            selectedOption={selectedYear}
            setSelectedOption={setSelectedYear}
            placeholder="Год"
          />
        </DropDownWrap>
        <StatisticsTable
          statistics={statExpense}
          sumExpense={sumExpense}
          sumIncome={sumIncome}
        />
      </TableWrap>
    </DiagramTabWrap>
  );
};
