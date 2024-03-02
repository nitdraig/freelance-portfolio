// components/Diagrama.tsx
"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Diagram = () => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chartInstance: Chart | null = null;

    const createChart = () => {
      if (chartContainer.current) {
        const ctx = chartContainer.current.getContext("2d");
        if (ctx) {
          chartInstance = new Chart(ctx, {
            type: "bar",
            data: {
              labels: [
                "Entrevista",
                "Acuerdo",
                "Desarrollo",
                "Entrega",
                "Mantenimiento",
              ],
              datasets: [
                {
                  label: "Pasos del Proyecto",
                  data: [1, 2, 3, 4, 5], // Puedes ajustar estos valores según tus necesidades
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }
      }
    };

    const destroyChart = () => {
      if (chartInstance !== null) {
        chartInstance.destroy();
      }
    };

    // Crea el gráfico cuando el componente se monta
    createChart();

    // Destruye el gráfico cuando el componente se desmonta
    return () => {
      destroyChart();
    };
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Diagram;
