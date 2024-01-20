class ValidatorMiddleware {
    validateInput(request, response, next) {
        const {nome, idade} = request.body;
        if ((typeof(nome) !== 'string') || typeof(idade)!== "number"){
            return response.status(500).json({ description: `Pyload contem tipos errados : Parametro errado ${typeof(nome) !== 'string' ?"Nome" : "Idade"}`})
        } else {}
        next()
        console.log(request.body);
    }
}
module.express = new ValidatorMiddleware