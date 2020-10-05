
# MuchMoreUi
Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.
(Projeto realizado sem instalação de dependências externas)

## Requisitos
* node, npm (desenvolvido na versão 12.18.1 do Node) 

## SCRIPTS
- `ng serve` para iniciar a aplicação em `http://localhost:4200/`.
- `ng build` para criar build do projeto. Os artefatos de construção serão armazenados no diretório `dist /`. Use o sinalizador `--prod` para um build de produção.
- `ng test` para iniciar testes unitarios via [Karma](https://karma-runner.github.io).

## Iniciar projeto local
- git clone URL_REPOSITORIO_GIT
- npm install
- ng serve | npm start

## Criação de novos arquivos
Execute `ng generate component-name` para gerar um novo componente. Você também pode usar `ng generate Directive | pipe | service | class | guard | interface | enum | module`.

## Camadas
- `Interfaces`: Criação de modelos de objetos.
- `Pages`: Telas que serão criadas contendo os arquivos `HTML | TS | Test | SCSS`.
- `Services`: Chamadas para API/Storage.

## Resoluções
- `Maior que 768px`: Desktop
- `De 591px á 768px`: Tablet
- `Menor que 591px`: Smartphone
- Testes de respomsividade devem ser realizados utilizando break points do proprio navegador e simulando diferentes dispositivos
  desde a menor resolução `iPhone 5 (320x568)` até o desktop.

## Rotas e Header
- São adicionadas em header.component.ts por meio de um array e renderizada no template.
- Em cada rota existe uma propriedade `show` do tipo boolean para definir no template se estará disponível para exibição.

Ex.:

    public routesMenu = [
        { name: 'Home', link: '', show: false },
        { name: 'About Us', link: '/about', show: true },
        { name: 'Contact Us', link: '/contact', show: true },
    ];

## Styles
- Os Icones são SVGs presentes em assets/icons.
- Fonte ultilizada: `Roboto`, implantada via `@import url(...)`.
- Possi como principio containers possuindo `display: flex` e `display: grid`.
- Configurações gerais de cores, espaçamentos, bordas devem estar presentes em app/layout/variables.scss,
  esse arquivo contem as variareis SCSS que poderão ser acessadas em outros arquivos.scss via import.
- Estilos "Globais" que podem ser aproveitados em varias situações, estão presentes em styles.scss;
  para configurações especificas alterar o .scss correspondente ao componente.

### Modelo de estrutura de template 

    <div class="container"> 
        <div class="content">
            CONTEUDO
        </div>
    </div>

## Local Storage
- Chave para acesso de contatos está presente como variável de ambiente em enviroment.ts (CONTACT_KEY);

#### Sua camada de serviço contem as funções para :
* `Buscar`: Espera como parametro uma Key.
* `Adicionar`: Espera como parametro uma Key + valor (String).
* `Limpar`: não possui parametros.


## Timer 
- Funciona de forma assincrona pois foi criado usando operadores do `rxjs`.
- Varrável timer$ é um Observable do tipo number onde armazena o valor atual do timer.
- Para iniciar o timer é necessário assinar o observável, isso é feito através do `Subscription`.
- Ao realizar a assinatura a variável timer$ passa a ser monitorada e passa para a validação de uma nova exibição do timer.
- A visualização no template é controlada por uma variável `timerInfo` do tipo array com o seguinte formato : 
    
Ex.:
    public timerInfo = [
        { value: 0, label: 'Days' },
        { value: 0, label: 'Hours' },
        { value: 0, label: 'Minutes' },
        { value: 0, label: 'Seconds' },
    ];

## Considerações gerais
- Desenvolver um código limpo.
- Componentização.
- Reponsividade.
- Priorizar o uso Variáveis SCSS para facilitar possíveis mudanças futuras.