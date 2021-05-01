type Control = "TextBox" | "DropDown" | "DatePicker" | "NumberSlider";

let notes: Control;
notes = "TextBox";

notes = "DropDown";
(notes = "NumberSlider"), (notes = "DatePicker");

interface ITextbox {
  control: "Textbox";
  value: string;
  multiline: boolean;
}

interface IDatePicker {
  control: "Datepicker";
  value: Date;
}

interface INumberSlider {
  control: "NumberSlider";
  value: number;
}

type Field = ITextbox | IDatePicker | INumberSlider;


