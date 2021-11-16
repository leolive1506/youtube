class StarRater extends HTMLElement {
    constructor() {
        super()

        this.build()
    }

    // junção de todos elementos
    build() {
        const shadow = this.attachShadow({ mode: 'open' })

        shadow.appendChild(this.style())

        const rater = this.createRater()
        this.stars = this.createStars()

        this.stars.forEach(star => rater.appendChild(star))

        this.resetRating()

        shadow.appendChild(rater)
    }

    createRater() {
        const rater = document.createElement('div')
        rater.classList.add('start-rater')
        rater.addEventListener('mouseout', this.resetRating.bind(this))

        return rater
    }

    createStars() {
        const createStar = (_, id) => {
            const star = document.createElement('span')
            star.classList.add('star')
            star.setAttribute('data-value', Number(id) + 1)
            star.innerHTML = "&#9733;"

            star.addEventListener('click', this.setRating.bind(this))
            star.addEventListener('mouseover', this.ratingHover.bind(this))

            return star
        }

        // retorna array
        return Array.from({ length: 5 }, createStar)
    }

    resetRating() {
        this.currentRatingValue = this.getAttribute('data-rating') || 0
        this.hightlightRating()
    }

    setRating(event) {
        // this teria o contexto dentro da função e não poderia acessar os atributod de fora caso não tivesse o bind(this)
        this.setAttribute(
            'data-rating', 
            event.currentTarget.getAttribute('data-value')
        )
    }

    ratingHover(event) {
        this.currentRatingValue = event.currentTarget.getAttribute('data-value')
        this.hightlightRating()    
    }

    hightlightRating() {
        this.stars.forEach(star => {
            star.style.color = 
                this.currentRatingValue >= star.getAttribute('data-value')
                    ? 'yellow' : 'gray'
        })
    }

    style() {
        // tag style
        // o acontece aqui não impacta a dom exterior a menos que peça p impactar
        const style = document.createElement('style')
        style.textContent = `
            .start-rater {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;

            }

            .star {
                font-size: 5rem;
                color: gray;
                cursor: pointer;
            }

            .yelow {
                color: yellow;
            }
            .gray {
                color: yellow;
            }
        `
        return style
    }
}


// executa o constructor() automáticamente por conta de ter passado a classe como argumento
customElements.define('star-rater', StarRater)