## Form customizado com tailwind e salvo no google forms
* Usando via cdn
    * Tem algumas limitaçoes
    * Coloca no head
    ```html
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    ```

## Ir [documentação](https://tailwindcss.com/docs), jogar oq quer fazer css e ver como faz no tailwind


## [Tailwindui](https://tailwindui.com/)
* Algumas coisas gratuitas e outras pagas
* Por padrão faz tudo p moblie first
    * Quando for grande, muda comportamento caso coloque break points (pontos de quebra)
    ```
    sm:text-4xl
    ```
## Comandos tailwind
* fazer ocupar ocupar toda height screen 
```html
<body class="h-screen"></body>
```

* Usar grid
```html
<body class="grid items-center justify-center"></body>
```

```css
/* font-size: 1.875rem;
line-height: 2.25rem; */
text-3xl

/* deixar bold */
font-extrabold

/* diminuir espaçamento entre letras */
tracking-tight
```

* Cor no texto
```
text-color-number
ex: text-pink-900
```
* Margin top
```
class="mt-8"
```

* Deixar para os leitores de tela
```html
<label class="sr-only"></label>
```

* Selecionar botão e fazer bordinha
```html
<button class="
    focus:outline-none
    focus:ring-2 // grossura
    focus:ring-offset-2 // espaço entre botão e bordinha
    focus:ring-green-500
"><button>
```

#### responsividade
```html
<div class="max-w-7xl mx-auto px-12"></div>
```

# Linkar com google forms
* Ir [Drive](<div class="max-w-7xl mx-auto px-12">)
* Clicar "+"
* Formulário gloogle
* Criar e copiar link
* Ir em network, All, Headers, requestURL e pegar url que ta recebendo as req
* Colocar url no action do form
* No name do form coloca o nome que ta recebendo a informação do form data (Headers)