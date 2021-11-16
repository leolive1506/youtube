## CONTAINER

    - display: grid; inia
    - grid-template-columns 
        quantas colunas possui
    - grid-template-rows 
        quantas linhas
    - grid-gap; 
        espaçamentos, aplica pro row e column ao mesmo tempo
        . grid-row-gap
        . grid-column-gap
    - grid template-areas
        ponto pra ocupar so uma área
        grid-template-areas: "h ."
                        "main aside"
                        "footer ."

## ITENS

    - grid-column
        onde fica o item na colua
        . grid-column-start
        . grid-column-end
    - grid-row
        onde fica o item na linha
        - grid-row-start
        - grid-row-end
    - grid-area

  
## ALINHAMENTOS

# Container
    1. `justify-content`
    2. `align-content` 
    3. `justify-items` - alinhar os items em    qualquer espaço disponivel que tiver
    4. `align-items` - alinhar os items em qualquer espaço disponivel que tiver 
    5. `justify-self`
    6. `align-self`

# `justify`(x) e `align`(y)
    alinhar o próprio grid, relativo ao espaço fora do grid
    só usado quando grid é menor que a área definida
    1. start
    2. end
    3. center
    4. stretch - padrão grid
    5. space-between
    6. space-around
    7. space-evenly

## ITENS
1. start
2. end
3. center
4. stretch

# SELF
    Mesma coisa que que justify-items e align-items, porém aplicado diretamente no item de um grid(filho)


