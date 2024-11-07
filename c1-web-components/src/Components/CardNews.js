class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");


        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/user-default.png";
        newsImage.alt = "Foto de Darth Vader convidando para se unir ao lado sombrio."
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = 
        `        
            .card {
                border-radius: 5px;
                margin-top: 30px;
                margin-left: 40px;
                width: 90%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            }

            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: 400;
            }

            .card_left > p {
                color: rgb(182, 178, 178);
            }

            .card_left > span {
                font-weight: 400;
            }

            .card_right > img {
                padding: 5px;
                height: 200px;
            }
        `
        return style;

    }
}

customElements.define("card-news", CardNews);