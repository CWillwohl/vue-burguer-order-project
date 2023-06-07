const vm = new Vue({
    el: '#app',
    data: {
        inputTipoPao: '',
        inputSalada: [],
        inputMolhos: [],
        inputHamburguer: '',
        inputNome: '',
        inputEmail: '',
        novoPedidoAssincrono: null,
        etapa: 1,
    },
    computed: {
        pao() {
            switch (this.inputTipoPao) {
                case 'gergelim':
                    return [
                        "/assets/img/pao_gergelim_superior.png",
                        "/assets/img/pao_gergelim_inferior.png"
                    ]
                case 'australiano':
                    return [
                        "/assets/img/pao_australiano_superior.png",
                        "/assets/img/pao_australiano_inferior.png"
                    ]
                default:
                    return [
                        "/assets/img/padrao/pao_superior.png",
                        "/assets/img/padrao/pao_inferior.png",
                    ]
            }
        },

        alface() {
            if(this.inputSalada.includes('alface'))
                return "assets/img/alface.png"
            else
                return "assets/img/padrao/alface.png"
        },

        ketchup() {
            if(this.inputMolhos.includes('ketchup'))
                return "assets/img/ketchup.png"
            else
                return "assets/img/padrao/molho.png"
        },

        mostarda() {
            if(this.inputMolhos.includes('mostarda'))
                return "assets/img/mostarda.png"
            else
                return "assets/img/padrao/molho.png"
        },

        maionese() {
            if(this.inputMolhos.includes('maionese'))
                return "assets/img/maionese.png"
            else
                return "assets/img/padrao/molho.png"
        },

        hamburguer() {
            switch (this.inputHamburguer) {
                case 'bovino':
                    return [
                        "/assets/img/bovino.png"
                    ]
                case 'frango':
                    return [
                        "/assets/img/frango.png"
                    ]
                case 'soja':
                    return [
                        "/assets/img/soja.png"
                    ]
                default:
                    return [
                        "/assets/img/padrao/hamburguer.png",
                    ]
            }
        },

    },
    methods: {
        fazerPedido() {
            if (this.inputTipoPao && this.inputHamburguer) {
                this.etapa = 2;
            } else {
                alert('Você precisa selecionar pelo menos o pão e o hambúrguer')
            }
        },
        confirmarPedido() {
            if(this.inputNome && this.inputEmail) {
                this.etapa = 3;
                this.novoPedidoAssincrono = setTimeout(() => this.novoPedido, 7000)
            } else {
                alert('Você precisa inserir um nome e um e-mail para concluir o seu pedido.')
            }
        },
        novoPedido() {
            this.etapa = 1;
            this.inputTipoPao = '';
            this.inputSalada = [];
            this.inputMolhos = [];
            this.inputHamburguer = '';
            this.inputNome = '';
            this.inputEmail = '';
        }
    },
    watch: {
        etapa(novoValor) {
            if (novoValor == 1)
            {
                clearTimeout(this.novoPedidoAssincrono);
            }
        }
    }
})