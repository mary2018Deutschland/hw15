import { memo } from "react";

function Filter({ onChange }) {
  console.log("FilterUsers was rerendered");
  return (
    <div>
      <input
        onInput={(event) => onChange(event.target.value)}
        type="text"
        placeholder="Введите имя"
        // value={user}
      />
    </div>
  );
}
export const FilterUsers = memo(Filter);
// export const FilterUsers = ({ onChange }) => {
//   console.log("FilterUsers was rerendered");

//   return (
//     <div>
//       <input type="text" onInput={(e) => onChange(e.target.value)} />
//     </div>
//   );
// };
