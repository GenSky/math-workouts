import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

// Small graph of y = m·x + b used in the slope-intercept lesson so the words
// "rise over run" have something to point at.
export default function LineViz({ m = 2, b = 1, points = [] }) {
  const data = []
  for (let x = -2; x <= 5; x++) data.push({ x, y: m * x + b })

  return (
    <div className="brutal-box bg-coal p-3">
      <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-ghost">
        y = {m}x {b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`}
      </div>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
            <CartesianGrid stroke="#2c2c34" strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              stroke="#8a8a99"
              tick={{ fontSize: 10, fontFamily: 'monospace' }}
            />
            <YAxis stroke="#8a8a99" tick={{ fontSize: 10, fontFamily: 'monospace' }} />
            <Tooltip
              contentStyle={{
                background: '#141417',
                border: '2px solid #c6ff3a',
                borderRadius: 0,
                fontFamily: 'monospace',
                fontSize: 12,
              }}
              labelStyle={{ color: '#f4f4f5' }}
            />
            <Line
              type="linear"
              dataKey="y"
              stroke="#c6ff3a"
              strokeWidth={3}
              dot={false}
              isAnimationActive
            />
            {points.map((p) => (
              <ReferenceDot
                key={`${p.x}-${p.y}`}
                x={p.x}
                y={p.y}
                r={5}
                fill="#ffc83a"
                stroke="#000"
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
