import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './mystyle.css'
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0)

  const text = "Framer Motion is a really cool tool".split(" ");

  return (
    <>
      <div>

        <div>
          <h1>Hello</h1>
        </div>
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
        

      </div>



    </>
  )
}

export default App
