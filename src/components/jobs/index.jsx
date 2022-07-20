import React from "react";
import "./style.scss";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import dummyData from "../../data";
import Card from "../card/index";
import { useState } from "react";
const Jobs = () => {
  const [jobs, setJobs] = useState(dummyData);
  const handleDragEnd = (value) => {
    if (!value) return;
    const { source, destination } = value;
    // index column trước đó
    const sourceColldx = jobs.findIndex((e) => e.id === source.droppableld);
    // index column sau khi drag
    const destinationColldx = jobs.findIndex(
      (e) => e.id === destination.droppableld
    );
    // trên cùng 1 column
    if (source.droppableld === destination.droppableld) {
      const sourceRowldx = source.index;
      const destinationRowldx = destination.index;
      const sourceCol = jobs[sourceColldx];
      const sourceTasks = sourceCol.jobs[sourceRowldx];
      const destinationTasks = sourceCol.jobs[destinationRowldx];
      jobs[sourceColldx].jobs[destinationRowldx] = sourceTasks;
      jobs[sourceColldx].jobs[sourceRowldx] = destinationTasks;
      setJobs(jobs);
    }
    // khác column
    if (source.droppableld !== destination.droppableld) {
      const sourceCol = jobs[sourceColldx];
      const destinationCol = jobs[destinationColldx];
      const sourceTasks = [...sourceCol.jobs];
      const destinationTasks = [...destinationCol.jobs];
      const [removed] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);
      jobs[sourceColldx].jobs = sourceTasks;
      jobs[destinationColldx].jobs = destinationTasks;
      setJobs(jobs);
    }
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="job">
        {jobs &&
          jobs.map((section) => (
            <Droppable key={section.id} droppableld={section.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  className="job__section"
                  ref={provided.innerRef}
                >
                  <div className="job__section-title">{section.title}</div>
                  <div className="job__section-content">
                    {section.jobs.map((job, idx) => (
                      <Draggable key={job.id} draggableld={job.id} index={idx}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            {...provided.droppableProps}
                            style={{
                              ...provided.droppableProps.style,
                              opacity: snapshot.isDragging ? "0.5" : 1,
                            }}
                          >
                            <Card>{job.title}</Card>
                            {provided.placeholder}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
      </div>
    </DragDropContext>
  );
};

export default Jobs;
