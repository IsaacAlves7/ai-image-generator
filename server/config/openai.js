const OpenAI = require("openai")

// Exportar os módulos da classe openai
module.exports = class openai{
    // Método estático para retornar a nova instância da chave da API OpenAI
    // Simulando o configuration
    static openai(){
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        return new OpenAIApi(openai)
    }
    // Método estático para receber prompt dinâmico
    static textCompletion({prompt}){
        return{
            model: "gpt-3.5-turbo",
            prompt: `${prompt}`,
            messages: [
              {
                "role": "user",
                "content": ""
              }
            ],
            temperature: 1,
            max_tokens: 256, // 3500
            top_p: 1,
            frequency_penalty: 0, // 0.5
            presence_penalty: 0,
        }
    }
}
