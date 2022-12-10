const header = {
  container: document.getElementById("header"),
  scrollToTopButton: null,

  init() {
    console.log("Header initialized");

    const scrollTrigger = header.container.clientHeight;

    window.onscroll = () => {
      if (window.pageYOffset >= scrollTrigger) {
        this.scrolled();
      } else {
        this.top();
      }
    };

    this.scrollToTop();
  },

  top() {
    console.log("Header at the top");
    this.container.classList.remove("scrolled");
    this.scrollToTopButton.classList.add("d-none");
  },

  scrolled() {
    console.log("Header scrolled");
    this.container.classList.add("scrolled");
    this.scrollToTopButton.classList.remove("d-none");
  },

  scrollToTop() {
    this.scrollToTopButton = document.createElement("button"); 
    const button = this.scrollToTopButton; 
    button.classList.add(
  
      "bottom-2",
      "end-2",
      "scroll-to-top",
      "btn",
      "btn-dark",
      "d-none",
      "w-25",
      "h-25"
    );
    button.innerText = "Scroll to top";

    button.addEventListener("click", () => {
      console.log("Scroll to top clicked");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    document.body.append(button);
  },
};

export default header;
