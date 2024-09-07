export const cssJs = `
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Roboto:wght@400;500;700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap");


*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 scroll-behavior: smooth;
 }

 body{
  background-color: #15161c;
 }

 .rot{
     animation: rot 0.2s ease-in;
 }
     
 @keyframes rot {
     0%{ transform: rotate(0deg);}
     100%{transform: rotate(90deg);}
 }

  @keyframes drawCircle {
    0% {
        stroke-dasharray: 0 879;
    }
    100% {
        stroke-dasharray: 879 0;
    }
  }

  @keyframes recedeText {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
  }

  .drawCircle {
      animation: drawCircle 3s ease-in-out forwards ;
  }

  .recedeText {
      animation: recedeText 3s ease-in-out forwards ;
      transform-origin: center;
  }

  .line-draw {animation: drawLine 1s forwards;}

  @keyframes drawLine {
    80%{
        width: 100%;
        opacity: 1;

    }
    100%{
        opacity: 0;
    }
  }
  @media (prefers-reduced-motion: no-preference) {
        .aImg {
          scale: 0.8;
          opacity: 0;
          animation: fade-in linear forwards;
          animation-timeline: view();
          animation-range: entry;
        }

        @keyframes fade-in {
          to {
            scale: 1;
            opacity: 1;
          }
        }
      }

      .hide {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1s;
}

.show {
    opacity: 1;
    transform: translateX(0);
}

@media(prefers-reduced-motion) {
    .hid {
    transition: none;
}
}

.hideScrollBar::-webkit-scrollbar {
  display: none; /* For WebKit browsers (Chrome, Safari, etc.) */
}
.hideScrollBar {
  overflow: scroll; /* Enable scrolling */
  scrollbar-width: none; /* For Firefox */
}
`;

export const home = {
  green: "text-accent",
  theme: "text-white bg-primary font-poppins selection:bg-[#2c2c75c5]",
  sectionCenter: "w-4/5 m-auto py-20",
  sectionTitle:
    "text-4xl text-center font-bold  font-roboto text-textColorLight pb-4",
  mainSection:
    "w-4/5 m-auto flex items-center h-screen font-medium text-xl lg:text-start",
  hi: "text-2xl text-accent font-roboto",
  name: "text-4xl lg:text-6xl font-bold uppercase",
  intro: "lg:w-4/5 pt-4 text-gray-200",
};

export const nav = {
  ul: "flex gap-8",
  li: "hover:text-accent",
  container:
    "h-16 flex items-center justify-between font-medium text-lg w-4/5 m-auto ",
};

export const about = {
  flex: "flex flex-col lg:flex-row items-center justify-between gap-16 py-16",
  bio: " text-textColor lg:text-start text-lg  lg:w-1/2 lg:text-xl space-y-4",
  imgContiner: " justify-center flex rounded-md",
  img: "w-full rounded-md hover:bg-[#141424b4] bg-primary",
};

export const servicesStyle = {
  grid: "grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8",
  card: "bg-primaryLight group h-96 duration-300 ease-in hover:shadow-6x hover:shadow-accent rounded-xl p-4 flex flex-col items-center text-center py-8 justify-center gap-6 borde border-accent text-[#9fa6c0]",
  ico: "text-6xl group-hover:text-accent",
  title: "text-2xl font-bold text-accent font-roboto",
};

/*
section {
display: grid;
place-items: center;
align-content: center;
min-height: 100vh;
*/
