import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

import { useState } from "react";

let charttypevar = 1;
// const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];
const employeenumberdata = [
  {
    id: 1,
    name: "الذكور",
    value: 50,
  },
  {
    id: 2,
    name: "الإتاث",
    value: 20,
  },
];

const statusdata = [
  {
    id: 1,
    name: "موظف ثابت",
    value: 20,
  },
  {
    id: 2,
    name: "اجر يومي",
    value: 40,
  },
  {
    id: 3,
    name: "متعاقد بالنسبة",
    value: 3,
  },
  {
    id: 4,
    name: "خرج من الخدمة",
    value: 7,
  },
];

function EmpStatusChart() {
  return (
    <div>
      <BarChart
        xAxis={[
          {
            label: "تفصيل حالات الموظفين",
            id: "barCategories",
            data: statusdata.map((d) => d.name),
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: statusdata.map((d) => d.value),
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}

function EmpCountChart() {
  return (
    <div>
      <BarChart
        xAxis={[
          {
            label: "عدد الموظفين في المؤسسة",
            id: "barCategories",
            data: employeenumberdata.map((d) => d.name),
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: employeenumberdata.map((d) => d.value),
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}

function ChartType() {
  const [type, setType] = useState(<EmpCountChart />);

  return (
    <div>
      <div>{type}</div>
      <button
        onClick={() => {
          charttypevar = !charttypevar;
          console.log(charttypevar);
          if (charttypevar) setType(<EmpCountChart />);
          else setType(<EmpStatusChart />);
        }}
      >
        تغيير نوع التقرير
      </button>
    </div>
  );
}

function R_StatusFunc() {
  return (
    <div>
      <ChartType />
    </div>
  );
}
export default R_StatusFunc;
