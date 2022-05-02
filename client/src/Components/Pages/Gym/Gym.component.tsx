import { CompactTable } from "@table-library/react-table-library/compact";
const nodes: Array<any> = [
  {
    id: "0",
    name: "Deadlift",
    deadline: new Date(2021, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: null,
    // date: `${
    //   new Date().getMonth() + 1
    // }/${new Date().getDate()}/${new Date().getFullYear()}`,
  },
  {
    id: "1",
    name: "Squat",
    deadline: new Date(2021, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: null,
  },
  {
    id: "2",
    name: "Bench Press",
    deadline: new Date(2021, 1, 15),
    type: "TASK",
    isComplete: true,
    nodes: null,
  },
];

const COLUMNS: Array<any> = [
  { label: "name", renderCell: (item: any) => item.name },
  {
    label: "set",
    renderCell: (item: any) =>
      item.deadline.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
  },
  { label: "reps", renderCell: (item: any) => item.type },
  {
    label: "weight",
    renderCell: (item: any) => item.isComplete.toString(),
  },
  { label: "note", renderCell: (item: any) => item.nodes },
  { label: "completed", renderCell: (item: any) => item.date }, // ckeckbox true or false
];

const Gym = (): JSX.Element => {
  // const data: any = { nodes };
  return (
    <div>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>  
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );

  // <CompactTable columns={COLUMNS} data={data} />;
};
export default Gym;
