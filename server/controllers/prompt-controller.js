// Importando
const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openai")

// Exportando
module.exports = {
    async sendText(req, res){
        const openaiAPI = openai.configuration()
        const inputModel = new inputPrompt(req.body)

        // Tratamento de erros para a resposta do prompt
        try {
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
            )
            return res.status(200).json({
                sucess:true,
                data:response.data.choices[0].text,
            })
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                error: error.response ? error.response : "there was an inssue on the server"
            })
        }
    }
}