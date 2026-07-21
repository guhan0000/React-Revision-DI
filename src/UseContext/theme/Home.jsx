import React, { useContext } from "react";
import styles from "./Home.module.css";
import ThemeContext from "./ThemeContext";
const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        onClick={() => {
          setTheme((prev) => (prev == "dark" ? "light" : "dark"));
        }}
      >
        {theme==='light'?'dark':'light'}
      </button>
      <div className={styles[theme]}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore velit
        consequuntur id soluta odit magni aspernatur tempora obcaecati commodi!
        Soluta vitae ipsum consequuntur debitis eius quae, magni totam iste
        veritatis enim veniam voluptatum ullam molestias id consectetur
        blanditiis vel. Repudiandae veniam nesciunt quia ex ducimus illum fugit,
        omnis, deleniti illo exercitationem iure tempore nostrum quam corrupti
        aliquid, earum dignissimos sequi alias cupiditate recusandae et
        perferendis pariatur voluptatibus. Quia ratione nobis modi, est ipsum
        voluptates quas maiores dolorem, eius perspiciatis sit voluptas
        consectetur eveniet error voluptatum aperiam libero sint illo quaerat
        fuga sequi nam eos minima iste. Minima, recusandae ut? Nostrum, quasi?
        Est, nemo, distinctio eligendi veritatis labore libero ratione, neque
        inventore dicta dignissimos ad eius fugit officiis ipsa assumenda
        praesentium quisquam. Iste totam velit cumque excepturi, assumenda
        nostrum expedita, aliquam maxime ratione magni accusantium quos neque?
        Ducimus corrupti maxime eum debitis molestias rem voluptatum
        necessitatibus aliquid, dignissimos fugiat ut at. Iste similique quo
        nemo assumenda. Quod odio quae perferendis esse obcaecati, neque
        eveniet! Aspernatur recusandae hic earum incidunt illum quasi laudantium
        sunt corporis dignissimos, natus quia mollitia dolor? Amet hic quia
        saepe ab voluptatibus repudiandae et neque sunt maiores asperiores,
        nihil eos sapiente ex voluptas. Harum delectus corporis laudantium nemo.
      </div>
    </>
  );
};

export default Home;
