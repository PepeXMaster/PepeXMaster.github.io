import { SiAnsys, SiKicad, SiPython } from "react-icons/si";
import { GoGear } from "react-icons/go";
import { FaCarCrash } from "react-icons/fa";
import { VscCircuitBoard } from "react-icons/vsc";
import { ImHtmlFive2 } from "react-icons/im";

export const Skills = [
  {
    slug: "Solid",
    title: "SolidWorks",
    Description: () => <>3D Model, 2D Drawing, Dynamic Simulation, Static Analysis</>,
    icon:"true"
  },
  {
    slug: "ansys",
    Component: SiAnsys,
    title: "Ansys",
    Description: () => <>Static Structural, Acceleration Analysis, Impact Analysis</>,
    icon:"true"
  },
  {
    slug: "Manufacturing",
    Component: GoGear,
    title: "Manufacturing",
    Description: () => <>CNC Mill, Lathe, 3D printing FDM, Laser Cutting, Plasma Cutting, Welding </>,
    icon:"false"
  },
  {
    slug: "kiCad",
    Component: SiKicad,
    title: "KiCad",
    Description: () => <> PCB design, Circuit design</>,
    icon:"false"
  },
  {
    slug: "CreoParametric",
    title: "Creo Parametric",
    Description: () => <>Harness Design, 3D Model, Creo View</>,
    icon:"true"
  },
  {
    slug: "CARSIM",
    Component: FaCarCrash,
    title: "CarSim",
    Description: () => <>Battery performance analysis, Lateral and Vertical forces, Driving Cycle validation</>,
    icon:"false"
  },
  {
    slug: "Proteus",
    Component: VscCircuitBoard ,
    title: "Proteus",
    Description: () => <>Circuit Analysis, PCB design, Microcontroller programming</>,
    icon:"false"
  },
  {
    slug: "Python",
    Component: SiPython,
    title: "Python",
    Description: () => <>Stm32 programming, Basic Algorithms, Scripting</>,
    icon:"false"
  },
  {
    slug: "HTML",
    Component: ImHtmlFive2,
    title: "HTML",
    Description: () => <>Template modification, Basic elements usage</>,
    icon:"false"
  },
  {
    slug: "MATLAB",
    title: "Matlab",
    Description: () => <>Simulink, PID Tuning, State Space Modeling, Data Analysis, Signal Processing </>,
    icon:"true"
  },
];
