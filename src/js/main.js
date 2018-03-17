///// IMPORT FILES /////
import Canvas from "./classes/canvas_class"; // Class of Canvas element

// import BrushTool from "./basic_tools/brush";
// import EaserTool from "./basic_tools/easer";
// import SprayTool from "./basic_tools/spray";  
// import ColorPickerTool from "./basic_tools/color_picker"; 
// import ReactTool from "./basic_tools/rect"; 
import TextDrawTool from "./basic_tools/text"; 

// import OpenFile from "./others-buttons/open_file";
// import DownloadCanvas from "./others-buttons/download";
// import CanvasStorage from "./others-buttons/storage";

// import Undo_Redo from "./others-buttons/undo_redo_class"


/////----------------	ELEMENT HANDLERS ----------------------	/////

// -- menu -- //
const menu = document.querySelector(".menu");

// -- canvas element -- //
const canvasElement = document.querySelector("#canvas");
const workSpaceWidth = window.innerWidth;
const workSpaceHeight = window.innerHeight - menu.offsetHeight;

// -- tool buttons -- //
const brushButton = menu.querySelector("#Brush");
const easerButton = menu.querySelector("#Easer");
const colorPickerButton = menu.querySelector("#Color-Picker");
const sprayButton = menu.querySelector("#Spray");
const textButton = menu.querySelector("#Text");
const rectButton = menu.querySelector("#Rect");

// -- input properties -- //
const toolColor = menu.querySelector("#color-field");
const toolSize = menu.querySelector("#tool-size");

// -- others buttons -- //
const save = menu.querySelector("#save");
const download = menu.querySelector("#download");
const openFile = menu.querySelector("#get-file");

const redoButton = menu.querySelector("#redo");
const undoButton = menu.querySelector("#undo");
const cutTool = menu.querySelector("#cut");
const selectTool = menu.querySelector("#select");
const copyTool = menu.querySelector("#copy");

/////----------------	OBJECTS ----------------------	/////

const Sketch = new Canvas(canvasElement, workSpaceWidth, workSpaceHeight);

// const Brush = new BrushTool(brushButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
// const Easer = new EaserTool(easerButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
// const ColorPicker = new ColorPickerTool(colorPickerButton, Sketch, '../my-icons-collection/svg/001-color-picker.png', canvasElement);
// const Spray = new SprayTool(sprayButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
const TextTool = new TextDrawTool(textButton, Sketch, canvasElement);
// const Rect;

// const SketchStorage = new CanvasStorage(save, Sketch, canvasElement);
// const DownloadImage = new DownloadCanvas(download, canvasElement);
// const LoadFile = new OpenFile(openFile, Sketch);

// const DrawHistory = new Undo_Redo(Sketch);
// const SelectArea;
// const CutImage;
// const CopyImage;


// /////////////////////////////////////////////////

function changeColor() {
	Sketch.changeProperties({color: toolColor.value}); 
}

function changeToolSize() {
	Sketch.changeProperties({width: toolSize.value}); 
}

function changeFontSize() {
	
}


/////----------------	TOOLSET FOR EVENT LISTENER (ENABLE / DISABLE BUTTON)   --------------------/////

// const toolSet = {
// 	"Brush": Brush,
// 	"Easer": Easer,
// 	"Color-Picker": ColorPicker,
// 	"Spray": Spray
// 	// "Rect": Rect
// }

/////----------------	EVENT LISTENERS  ----------------------	/////

// window.addEventListener('load', () => SketchStorage.checkStorage());

toolSize.addEventListener("change", changeToolSize);
toolColor.addEventListener("change", changeColor);
textButton.addEventListener("click", () => TextTool.use())

// save.addEventListener("click", () => SketchStorage.save());
// download.addEventListener("click", () => DownloadImage.downloadCanvas());
// openFile.addEventListener("change", function() {LoadFile.loadFile()});
// redoButton.addEventListener("click", () => DrawHistory.redo());
// undoButton.addEventListener("click", () => DrawHistory.undo());


// function disableButton(e) {
// 	let buttonID = document.querySelector("[data-usage=true]").id;
// 	let toolToDisable = toolSet[buttonID];
	
// 	toolToDisable.disableButton();
// 	toolToDisable.inactive();
// }

// function enableButton(e) {
// 	let buttonID = e.target.id;
// 	let toolToActive = toolSet[buttonID];

// 	toolToActive.enableButton();
// 	toolToActive.active();
// }

// function useButton(e) {
// 	disableButton(e);
// 	enableButton(e);
// }

// menu.addEventListener("click", e => {
// 	if(e.target.hasAttribute("data-usage")){
// 		useButton(e);	
// 	}
// });