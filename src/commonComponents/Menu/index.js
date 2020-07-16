import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from "@material-ui/core/Select";
import "./styles.css"

export default ({ selectedItem, onChange, items, label }) => {
    return (
        <FormControl variant="filled" >
            <InputLabel htmlFor='menu-select'>{label}</InputLabel>
            <Select
                className="menu"
                value={selectedItem}
                onChange={onChange}
                inputProps={{
                    id: 'menu-select',
                  }}
            >
                {items.map(item => <option key={item} value={item}>{item}</option>)}
            </Select>
        </FormControl>
    )
}

