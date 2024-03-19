import { useState } from "react";
const test = {
  message: "",
  severity: "info",
};
function Form() {
  const [newKitty, setNewKitty] = useState("");

  const [kitties, setKitties] = useState([]);
  const [catIsEdit, setCatIsEdit] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [snackProperties, setSnackProperties] = useState(test);

  /* snackbar */
  const [openCreate, setOpenCreate] = useState(false);
  /* Päivämäärä */
  function DigitsNumber(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return (
      [
        DigitsNumber(date.getDate()),
        DigitsNumber(date.getMonth() + 1),
        date.getFullYear(),
      ].join(".") +
      " / " +
      [
        DigitsNumber(date.getHours()),
        DigitsNumber(date.getMinutes()),
        DigitsNumber(date.getSeconds()),
      ].join(":")
    );
  }

  return <p>heippa maailma</p>;
}
export default Form;
