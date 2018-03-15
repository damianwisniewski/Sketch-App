import OtherTools from "../classes/otherTools_class.js";

class OpenFile extends OtherTools {

    checkSizeImage(image) {
        const canvasHeight = this.canvas.canvasArea.clientHeight;
        const canvasWidth = this.canvas.canvasArea.clientWidth;
        const imageWidth = image.width;
        const imageHeight = image.height;


        if(imageWidth > canvasWidth || imageHeight > canvasHeight) {
            const widthRatio = canvasWidth / imageWidth;
            const heightRatio = canvasHeight / imageHeight;

            const toatlSizeRatio = Math.min(widthRatio, heightRatio); //it always will be fraction, smaller fraction will show longer side of image;
            //to properly scale, it have be scaled by ratio of longer side

            return {
                x: imageWidth * toatlSizeRatio,
                y: imageHeight * toatlSizeRatio
            }
        } else {
            return {
                x: imageWidth,
                y: imageHeight
            }
        }
    }
    
    loadFile() {
        const file = this.element.files[0];
        const imageObj = new Image();
        const reader = new FileReader();

        reader.readAsDataURL(file);
        
        reader.onload = function() {
            imageObj.src = reader.result;
        };

        imageObj.onload = () => {
            const imageSize = this.checkSizeImage(imageObj);
            this.canvas.ctx.drawImage(imageObj, 0, 0, imageSize.x, imageSize.y);
        }

        this.canvas.saveToHistory();
    }
}

export default OpenFile;