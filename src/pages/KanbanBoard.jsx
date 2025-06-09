import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import useTarefas from "../hooks/useTarefas";

const statusColunas = [
  { id: "pendente", nome: "Pendente" },
  { id: "em_andamento", nome: "Em Andamento" },
  { id: "bloqueada", nome: "Bloqueada" },
  { id: "concluida", nome: "Concluída" }
];

export default function KanbanBoard() {
  const { tarefas, atualizarStatus } = useTarefas();
  const [colunas, setColunas] = useState({});

  useEffect(() => {
    const nova = {};
    statusColunas.forEach((col) => {
      nova[col.id] = tarefas.filter((t) => t.status === col.id);
    });
    setColunas(nova);
  }, [tarefas]);

  function onDragEnd(result) {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;
    atualizarStatus(Number(draggableId), destination.droppableId);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {statusColunas.map((col) => (
          <Droppable droppableId={col.id} key={col.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="kanban-column"
              >
                <h3 className="font-semibold text-gray-700 mb-2">{col.nome}</h3>
                {colunas[col.id]?.map((tarefa, index) => (
                  <Draggable
                    key={tarefa.id}
                    draggableId={String(tarefa.id)}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="tarefa-card"
                      >
                        <p className="font-semibold text-sm">{tarefa.titulo}</p>
                        <p className="text-xs text-gray-600">{tarefa.responsavel}</p>
                        <p className="text-xs text-gray-400">{tarefa.prazo}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}