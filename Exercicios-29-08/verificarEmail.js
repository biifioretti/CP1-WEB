var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmailInvalidoError = /** @class */ (function (_super) {
    __extends(EmailInvalidoError, _super);
    function EmailInvalidoError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'EmailInvalidoError'; // Nome do erro customizado
        return _this;
    }
    return EmailInvalidoError;
}(Error));
function verificarEmail(email) {
    // Verificamos se o email contém o caractere '@'
    if (!email.includes('@')) {
        // Lançamos o erro personalizado caso o email seja inválido
        throw new EmailInvalidoError('Email inválido: O email deve conter o caractere "@"');
    }
    console.log('Email válido!');
}
// Exemplo de uso:
try {
    verificarEmail('usuario.com'); // Não contém '@', então lançará o erro
}
catch (error) {
    // Captura o erro e imprime a mensagem
    if (error instanceof EmailInvalidoError) {
        console.error(error.message); // Deve imprimir "Email inválido"
    }
}
