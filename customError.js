
class CustomFancyError extends Error {
    constructor(){
        super(message)
        this.secretMessage = "Bananas!";
    }

    toJSON(){
        return {
            secretMessage: this.secretMessage
        }
    }
}

module.exports = { CustomFancyError }