"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", realizado: 417825, meta: 470727 },
  { month: "Fev", realizado: 427562, meta: 441447 },
  { month: "Mar", realizado: 462577, meta: 450130 },
  { month: "Abr", realizado: 520555, meta: 472681 },
  { month: "Mai", realizado: 560175, meta: 473065 },
  { month: "Jun", realizado: 570437, meta: 475920 },
  { month: "Jul", realizado: 583029, meta: 493489 },
  { month: "Ago", realizado: 820837, meta: 511484 },
  { month: "Set", realizado: 592763, meta: 531708 },
  { month: "Out", realizado: 573343, meta: 514676 },
  { month: "Nov", realizado: 538264, meta: 486986 },
  { month: "Dez", realizado: 512637, meta: 477470 },
];

const data2024Total = 5013899.94;
const data2025Total = 6579004.0;
const growthValue = data2025Total - data2024Total;
const growthPercent = (growthValue / data2024Total) * 100;

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const isHighlight =
      payload[0].payload.month === "Ago" ||
      payload[0].payload.month === "Nov" ||
      payload[0].payload.month === "Dez";

    return (
      <div className="rounded-lg border bg-background p-3 shadow-xl ring-1 ring-black/5">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground italic">
          {payload[0].payload.month} 2025
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-xs font-medium text-foreground">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isHighlight ? "bg-accent" : "bg-primary"
                }`}
              />
              Realizado:
            </span>
            <span
              className={`text-xs font-bold font-heading ${
                isHighlight ? "text-accent" : "text-primary"
              }`}
            >
              R$ {payload[0].value?.toLocaleString("pt-BR")}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
              Projetado:
            </span>
            <span className="text-xs font-bold font-heading text-muted-foreground">
              R$ {payload[0].payload.meta?.toLocaleString("pt-BR")}
            </span>
          </div>
          {isHighlight && (
            <div className="mt-1 pt-1 border-t border-border/50">
              <p className="text-[9px] font-bold text-accent uppercase tracking-tighter">
                {payload[0].payload.month === "Ago"
                  ? "★ Recorde do Ano"
                  : "✓ Escala Confirmada"}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRealizado" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-primary)"
                stopOpacity={0.2}
              />
              <stop
                offset="95%"
                stopColor="var(--color-primary)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--color-border)"
            opacity={0.3}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "var(--color-muted-foreground)",
              fontSize: 10,
              fontWeight: 600,
            }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--color-muted-foreground)", fontSize: 10 }}
            tickFormatter={(value) =>
              value >= 1000000
                ? `R$ ${(value / 1000000).toFixed(1)}M`
                : `R$ ${value / 1000}k`
            }
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "var(--color-primary)",
              strokeWidth: 1,
              strokeDasharray: "4 4",
              opacity: 0.3,
            }}
          />

          {/* Linha da Meta Dinâmica */}
          <Area
            type="monotone"
            dataKey="meta"
            stroke="var(--color-muted-foreground)"
            strokeWidth={1.5}
            strokeDasharray="5 5"
            strokeOpacity={0.4}
            fill="transparent"
            dot={false}
            activeDot={false}
          />

          {/* Realizado - Área com Gradiente */}
          <Area
            type="monotone"
            dataKey="realizado"
            stroke="var(--color-primary)"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorRealizado)"
            dot={(props) => {
              const { cx, cy, payload, index } = props;
              // Destacar o pico (Agosto - index 7) e os últimos 2 pontos
              const isHighlight = index === 7 || index >= data.length - 2;
              if (isHighlight) {
                return (
                  <circle
                    key={`dot-${index}`}
                    cx={cx}
                    cy={cy}
                    r={5}
                    fill="var(--color-accent)"
                    stroke="#fff"
                    strokeWidth={2}
                  />
                );
              }
              return (
                <circle
                  key={`dot-${index}`}
                  cx={cx}
                  cy={cy}
                  r={3}
                  fill="var(--color-primary)"
                  stroke="#fff"
                  strokeWidth={1}
                />
              );
            }}
            activeDot={{ r: 6, strokeWidth: 0, fill: "var(--color-accent)" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
