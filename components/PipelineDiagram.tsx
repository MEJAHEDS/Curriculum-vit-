const nodes = [
  { id: "data_pipelines", label: "data_pipelines", y: 40 },
  { id: "backend_apis", label: "backend_apis", y: 140 },
  { id: "ai_agents", label: "ai_agents", y: 240 },
  { id: "full_stack_web", label: "full_stack_web", y: 340 },
];

const targetY = 190;

export default function PipelineDiagram() {
  return (
    <svg
      viewBox="0 0 900 400"
      className="w-full h-auto"
      role="img"
      aria-label="Diagramme de flux reliant data pipelines, APIs backend, agents IA et développement full stack vers un même graphe d'exécution"
    >
      {/* edges */}
      {nodes.map((n) => (
        <path
          key={n.id}
          d={`M 250 ${n.y + 20} C 420 ${n.y + 20}, 480 ${targetY + 20}, 620 ${
            targetY + 20
          }`}
          fill="none"
          stroke="#232A35"
          strokeWidth={1.5}
        />
      ))}
      {nodes.map((n) => (
        <path
          key={`flow-${n.id}`}
          d={`M 250 ${n.y + 20} C 420 ${n.y + 20}, 480 ${targetY + 20}, 620 ${
            targetY + 20
          }`}
          fill="none"
          stroke="#5EEAD4"
          strokeWidth={1.5}
          className="edge-flow"
          opacity={0.55}
        />
      ))}

      {/* source nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          <rect
            x={40}
            y={n.y}
            width={210}
            height={40}
            rx={4}
            fill="#12161D"
            stroke="#232A35"
          />
          <circle
            cx={58}
            cy={n.y + 20}
            r={4}
            fill="#5EEAD4"
            className="status-dot"
          />
          <text
            x={72}
            y={n.y + 25}
            fontFamily="var(--font-mono)"
            fontSize="13"
            fill="#E6EDF3"
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* target node */}
      <g>
        <rect
          x={620}
          y={targetY}
          width={240}
          height={40}
          rx={4}
          fill="#181D26"
          stroke="#5EEAD4"
          strokeWidth={1.5}
        />
        <circle cx={638} cy={targetY + 20} r={4} fill="#F5A623" />
        <text
          x={652}
          y={targetY + 25}
          fontFamily="var(--font-mono)"
          fontSize="13"
          fontWeight={600}
          fill="#5EEAD4"
        >
          soufiane_mejahed
        </text>
      </g>
    </svg>
  );
}
