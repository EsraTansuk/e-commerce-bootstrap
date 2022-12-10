import header from "./partials/header";


const app = {
    init() {
       
        console.log("App started");

        const headerEl = document.getElementById("header");
        const headerHeight = headerEl.clientHeight;
        document.body.style.paddingTop = `${headerHeight}px`;

        header.init();
    },
}

export default app;
