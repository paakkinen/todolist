import { useState } from "react";
import Button from '@mui/material/Button'
import { Grid, TextField } from "@mui/material";
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
const addKitty= async ()=>{
  try {
    if(!newKitty){
      alert("add a kitty")
    }
    else if(newKitty && !toggle) {
setKitties(
  kitties.map((kitten) => {
    if (kitten.id ===catIsEdit){
      return { ...kitties, name: newKitty };
    }
    })
) 
    }else {
  const response = await fetch("http://localhost:3001/", {
    method: "POST",
    body: JSON.stringify({ name: newKitty }),
    headers: {
      "Content-Type": "application/json",
"Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
"Access-Control-Allow-Headers":
  "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    },
  });

const y = await response.json();
console.log("response json rivi 63", y)
const cat = {
  id: y.kitten.id,
  name: y.kitten.name,
  time: formatDate(
    y?.kitten?.time ? new Date(y.kitten.time) : new Date()
  )
}

setKitties([...kitties, cat])
setNewKitty("")
setCatIsEdit(null)
setToggle(true)

setSnackProperties({
  message: `${cat.name} on luotu`,
  severity: "success",
})

setOpenCreate(true);
    }
  } catch (error) {
   console.log("lisäämisen virhe:", error) 
  }
}
  
  return <div>
    <TextField
      value={newKitty}
      onChange={(e) => setNewKitty(e.target.value)}
    />{
      toggle ? (
        <Button
        onClick={addKitty}
        >
          lisää
        </Button>

      ):( <Button
        onClick={addKitty}
        >
          päivitä
        </Button>)
    }
    {kitties.map((cat, index) => {
        return (
          <div key={index}>
            {cat.name}{cat.time}
          </div>
        )
      })
    }
  </div>
}

export default Form;
/* 
seuraavaksi:
luodaan poisto ominaisuus
tarvitaan functio sekä buttoni nimeltä delete
joka tulee kitties listauksen rivin 109 - 116
*/