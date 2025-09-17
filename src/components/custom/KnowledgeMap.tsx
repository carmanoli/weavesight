import { useState, useCallback } from 'react'; // 1. Importa useState e useCallback
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import type { Node, Edge, NodeChange, EdgeChange } from 'reactflow'; 

// Os dados iniciais agora ficam fora do componente
const initialNodes: Node[] = [ // 4. Adiciona o tipo Node[]
  { id: '1', position: { x: 100, y: 100 }, data: { label: 'Welcome to WeaveSight!' } },
  { id: '2', position: { x: 300, y: 200 }, data: { label: 'This is a node.' } },
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }]; // 4. Adiciona o tipo Edge[]



export function KnowledgeMap() {
  // 5. Cria o estado para nós e arestas
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

 const onNodesChange = useCallback(
    // Adiciona o tipo: um array de NodeChange
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)), // <-- MUDANÇA 2
    [setNodes]
  );
    const onEdgesChange = useCallback(
    // Adiciona o tipo: um array de EdgeChange
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), // <-- MUDANÇA 3
    [setEdges]
  );

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}