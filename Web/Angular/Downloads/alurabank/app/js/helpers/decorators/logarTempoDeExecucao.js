System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidadeTempo = 'ms';
                let divisor = 1;
                if (emSegundos) {
                    unidadeTempo = 's';
                    let divisor = 1000;
                }
                console.log("____________________________________");
                console.log(`Método:${propertyKey} Parâmetros:${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`Retorno:${JSON.stringify(retorno)}`);
                console.log(`Tempo de execução: ${(t2 - t1) / divisor} ${unidadeTempo}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
