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
  { month: "Jan", realizado: 485812, meta: 470727 },
  { month: "Fev", realizado: 427563, meta: 441447 },
  { month: "Mar", realizado: 462578, meta: 450130 },
  { month: "Abr", realizado: 520556, meta: 472681 },
  { month: "Mai", realizado: 560176, meta: 473065 },
  { month: "Jun", realizado: 570437, meta: 475920 },
  { month: "Jul", realizado: 553029, meta: 493489 },
  { month: "Ago", realizado: 820837, meta: 511484 },
  { month: "Set", realizado: 592763, meta: 531708 },
  { month: "Out", realizado: 573343, meta: 514676 },
  { month: "Nov", realizado: 538264, meta: 486986 },
  { month: "Dez", realizado: 473646, meta: 477470 },
];

const interfacePurple = "#6575FF";
const projectedLine = "#64748B";

const data2024Total = 5013899.94;
const data2025Total = 6579003.33;
const growthValue = data2025Total - data2024Total;
const growthPercent = (growthValue / data2024Total) * 100;

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const realizadoEntry = payload.find((p: any) => p.dataKey === "realizado");
    const metaEntry = payload.find((p: any) => p.dataKey === "meta");
    const month = payload[0]?.payload?.month;

    const isHighlight = month === "Ago" || month === "Nov";
    const isBelowTarget = month === "Dez" || month === "Fev";

    const realizado = realizadoEntry?.value ?? 0;
    const meta = metaEntry?.value ?? 0;
    const diff = meta > 0 ? ((realizado - meta) / meta) * 100 : 0;
    const diffLabel = `${diff >= 0 ? "+" : ""}${diff.toFixed(1)}%`;
    const aboveMeta = diff >= 0;

    return (
      <div className="rounded-lg border bg-background p-3 shadow-xl ring-1 ring-black/5">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground italic">
          {month} 2025
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-xs font-medium text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6575FF]" />
              Realizado:
            </span>
            <span
              className="text-xs font-bold font-heading text-[#6575FF]"
            >
              R$ {realizado.toLocaleString("pt-BR")}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
              Projetado:
            </span>
            <span className="text-xs font-bold font-heading text-muted-foreground">
              R$ {meta.toLocaleString("pt-BR")}
            </span>
          </div>
          <div className="mt-1 pt-1 border-t border-border/50 flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-tighter text-muted-foreground">
              vs. Meta
            </span>
            <span
              className={`text-sm font-black font-heading ${
                aboveMeta ? "text-[#6575FF]" : "text-red-400"
              }`}
            >
              {diffLabel}
            </span>
          </div>
          {isHighlight && month === "Ago" && (
            <p className="text-[9px] font-bold text-[#6575FF] uppercase tracking-tighter">
              Recorde do ano
            </p>
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
                stopColor={interfacePurple}
                stopOpacity={0.2}
              />
              <stop
                offset="95%"
                stopColor={interfacePurple}
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
              stroke: interfacePurple,
              strokeWidth: 1,
              strokeDasharray: "4 4",
              opacity: 0.3,
            }}
          />

          {/* Linha da Meta Dinâmica */}
          <Area
            type="monotone"
            dataKey="meta"
            stroke={projectedLine}
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
            stroke={interfacePurple}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorRealizado)"
            dot={(props) => {
              const { cx, cy, payload, index } = props;
              // Destacar o pico (Agosto - index 7) e os últimos 2 pontos
              // Ago (index 7) = record; Nov (index 10) = above target; Fev (1) e Dez (11) = below target
              const isHighlight = index === 7 || index === 10;
              if (isHighlight) {
                return (
                  <circle
                    key={`dot-${index}`}
                    cx={cx}
                    cy={cy}
                    r={5}
                    fill={interfacePurple}
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
                  fill={interfacePurple}
                  stroke="#fff"
                  strokeWidth={1}
                />
              );
            }}
            activeDot={{ r: 6, strokeWidth: 0, fill: interfacePurple }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
