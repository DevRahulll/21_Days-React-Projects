import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

interface TransactionChartSummaryProps {
  expense?: number;
  income?: number;
}

const options: ApexOptions = {
  labels: ["Income", "Expense"],
  colors: ["#213ebf", "#FD5E53"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#213ebf", "#FD5E53"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
    },
  },
};

export default function TransactionChartSummary({
  expense = 100,
  income = 100,
}: TransactionChartSummaryProps) {
  return (
    <Chart
      options={options}
      series={[income, expense]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
}
