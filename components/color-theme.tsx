import React from 'react'
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

export default function ColorTheme() {
  return (
    <div>
        <button>
            <BsMoonStars />
            <span>Dark</span>
        </button>
        <button>
            <BsSun />
            <span>Light</span>
        </button>
    </div>
  )
}
