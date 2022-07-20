import React from "react";
import { v4 as uuid } from "uuid";
const dummyData = [
  {
    id: uuid(),
    title: "To do",
    jobs: [],
  },
  {
    id: uuid(),
    title: "In progress",
    jobs: [],
  },
  {
    id: uuid(),
    title: "Completed",
    jobs: [],
  },
  {
    id: uuid(),
    title: "Verify",
    jobs: [],
  },
];

export default dummyData;
