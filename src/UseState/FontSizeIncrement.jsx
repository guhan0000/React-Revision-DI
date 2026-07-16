import React, { useState } from "react";

const FontSizeIncrement = () => {
  const [size, setSize] = useState("10px");
  const decreaseFontSize = () => {
    setSize((prev) => {
      if (parseInt(prev) > 10) {
        let intVal = parseInt(prev) - 10;
        return intVal + "px";
      } else {
        return "10px";
      }
    });
  };
  const increaseFontSize = () => {
    setSize((prev) => {
      let intVal = parseInt(prev) + 10;
      return intVal + "px";
    });
  };
  const handleScroll = () => {};
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={increaseFontSize}>+</button>
        <button onClick={decreaseFontSize}>-</button>
      </div>
      <div style={{ fontSize: size }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
        sapiente, explicabo totam velit nobis nisi, praesentium deleniti
        incidunt voluptate voluptatem dicta corporis? Laudantium officia
        molestiae dolorem facere sequi reprehenderit repellendus perspiciatis
        qui quod voluptas, ipsam, saepe suscipit nihil sint similique quas error
        debitis corporis, hic blanditiis quos nulla voluptate. Debitis,
        inventore. Consectetur dicta tenetur dolor excepturi tempore ipsam,
        repellat aliquam voluptatem nisi voluptate quasi fugiat veniam fuga
        facere cum commodi facilis sit recusandae porro harum alias itaque quia
        animi laboriosam. Dolorum esse et labore, iure dolor inventore voluptas,
        eum amet excepturi impedit vel! Pariatur, qui! Ad necessitatibus dolorem
        ratione in, amet tenetur blanditiis numquam ipsa repudiandae qui
        mollitia voluptas ducimus vero, beatae molestiae ipsam dolor voluptatem
        eum reiciendis quis atque sed nihil! Consectetur officiis sed sint nemo
        excepturi repudiandae corporis, fuga dicta sequi modi, blanditiis
        laboriosam, ab amet repellat repellendus. Doloremque omnis iure vero
        molestiae velit repellendus blanditiis sit voluptatum debitis, ipsa,
        autem reprehenderit alias! Amet omnis quis corporis aliquid officiis
        blanditiis, pariatur voluptas harum, veniam debitis magnam quam iure.
        Facilis modi debitis, voluptates laboriosam ipsam molestias, accusantium
        dolorum dicta voluptatem aliquam ex? Repellendus illo consequuntur
        mollitia ullam accusantium? Temporibus, cum. Voluptatum nesciunt dolorem
        nisi dolor aspernatur doloribus exercitationem laboriosam officiis
        beatae quod quas nemo consectetur, praesentium rem aperiam harum quidem
        dolore atque, sapiente asperiores quis perferendis mollitia debitis!
        Earum saepe voluptatem eos voluptates, molestiae corporis consequatur
        rerum voluptatum quasi omnis, cum soluta! Vitae quod nulla fugiat totam
        nobis libero corrupti facere perferendis, distinctio dolor doloribus
        consectetur voluptatibus? Beatae voluptatum in vero ex quas voluptatem
        alias laboriosam? Vero minus similique iusto perspiciatis velit magni
        illum. Perspiciatis similique quisquam libero quis iure autem tempora
        laborum odio necessitatibus rem? Quidem laborum commodi, adipisci nihil
        recusandae consequatur unde eaque explicabo illo, consequuntur tempore
        minima omnis impedit mollitia doloremque enim voluptas provident? Atque
        vero nihil voluptate assumenda ut cum quos blanditiis alias tempora ab
        consectetur ducimus aperiam eveniet laborum nesciunt qui sint, voluptas
        nemo voluptatibus et. Quia magni totam quis, itaque harum assumenda
        suscipit impedit inventore amet debitis numquam optio eligendi. Magni
        incidunt illum, quibusdam molestiae hic a ea impedit eos corporis,
        doloremque sunt tempora labore vitae aliquid qui debitis? Saepe corrupti
        praesentium est officia explicabo nemo cupiditate quae sapiente fugit
        culpa molestias impedit, distinctio iusto, alias ipsum corporis? Commodi
        optio totam animi nobis ab laudantium est deleniti aut dolore esse iure,
        accusantium autem illo. Doloribus beatae, dolor ipsa neque nulla dolore
        debitis dolores molestias nemo dolorem iure ab deserunt, qui quibusdam
        harum, eos doloremque sapiente ullam similique ea voluptatem? Labore id
        voluptatem voluptates quibusdam earum tempora! Molestias eum corrupti
        inventore expedita accusantium ab neque eveniet excepturi molestiae
        exercitationem recusandae sapiente nulla consequuntur quisquam amet, est
        voluptas! Amet a eligendi sunt dolore magnam ab in laborum ullam
        doloremque perspiciatis aliquam suscipit, quaerat pariatur, cum ducimus
        deleniti, quibusdam omnis nihil rem sapiente. Harum ipsum, magni fuga
        accusamus nemo porro molestias quisquam obcaecati culpa error
        reprehenderit ea nulla mollitia cumque itaque doloribus accusantium
        dolorem? Exercitationem alias natus nihil nam doloribus nesciunt
        adipisci molestiae asperiores dolores fuga.
      </div>
    </>
  );
};

export default FontSizeIncrement;
