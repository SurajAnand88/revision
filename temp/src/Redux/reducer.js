const initialState = {
  tasks: [
    {
      title: "Monday task",
      category: "personal",
      description: "This is monday's task",
      status: "progress",
      subtask: [{ name: "10:00 AM Assignment", checked: true }],
    },
    {
      title: "Tuesday task",
      category: "official",
      description: "This is tuesday's task",
      status: "new",
      subtask: [
        { name: "10:00 AM Assignment", checked: true },
        { name: "12:00 PM Assignment", checked: false },
        { name: "01:00 PM Assignment", checked: true },
        { name: "04:00 PM Assignment", checked: true },
      ],
    },
    {
      title: "Wednesday task",
      category: "official",
      description: "This is wednesday's task",
      status: "new",
      subtask: [
        { name: "10:00 AM Assignment", checked: true },
        { name: "12:00 PM Assignment", checked: true },
        { name: "01:00 PM Assignment", checked: true },
      ],
    },
    {
      title: "Thursday task",
      category: "official",
      description: "This is thursday's task",
      status: "progress",
      subtask: [
        { name: "10:00 AM Assignment", checked: true },

        { name: "04:00 PM Assignment", checked: true },
      ],
    },
    {
      title: "Friday task",
      category: "official",
      description: "This is friday's task",
      status: "done",
      subtask: [
        { name: "10:00 AM Assignment", checked: true },
        { name: "12:00 PM Assignment", checked: true },
        { name: "01:00 PM Assignment", checked: true },
        { name: "04:00 PM Assignment", checked: true },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

export { reducer };
