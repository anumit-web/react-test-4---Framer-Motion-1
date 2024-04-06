import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './mystyle.css'
import './3.css'
import { motion } from "framer-motion";
import { useAnimate, stagger  } from "framer-motion";
import { useEffect } from 'react'
import {  useMotionValue, useTransform, animate } from "framer-motion";

function App() {
  const [count, setCount] = useState(0)

  const text = "Framer Motion is a really cool tool".split(" ");

  // 3. Stagger Animations
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be applied
  // whenever the open state is toggled

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0
      }
    );
  }, [open]);

  // 4. Count Animation
  const count4 = useMotionValue(0);
  const rounded = useTransform(count4, Math.round);

  useEffect(() => {
    const animation = animate(count4, 50, {
      duration: 2
    });
  }, []);


  return (
    <>
      <div>

        <div>
          <h1>Hello</h1>
        </div>
        <hr />
        <div>
          <motion.button>
            Click me 1!
          </motion.button>
          <br /> <br />

          <motion.button whileTap={{ scale: 0.85 }} id='button2'>
            Click me 2!
          </motion.button>
        </div>
        <hr />
        <div id="text_typing">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>
        <hr />

        <div  ref={scope}>
          <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
            Menu
          </motion.button>
          <ul>
            {items.map((item, index) => (
              <motion.li key={index}>{item}</motion.li>
            ))}
          </ul>
        </div>
        <hr />
        <h4>4. Count Animation</h4>
        <motion.h1>{rounded}</motion.h1>;

      </div>



    </>
  )
}

export default App
