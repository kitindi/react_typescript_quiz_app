import { questionType } from "../types/types";

export const questions: questionType[] = [
  {
    question: "What is software defined as in the context of computer systems?",
    options: [
      "A physical component of the computer",
      "A series of instructions written in a programming language that performs a function",
      "A type of hardware device",
      "A collection of data stored in memory",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is NOT a function of an operating system?",
    options: ["Managing files", "Managing memory", "Creating complex databases", "Managing user accounts"],
    answer: 2,
  },
  {
    question: "What is firmware?",
    options: [
      "A type of application software",
      "A physical component of the computer",
      "Instructions stored in ROM loaded when computer starts",
      "A type of user interface",
    ],
    answer: 2,
  },
  {
    question: "Which interface type requires exact text commands and is most useful for expert users?",
    options: ["Graphical User Interface (GUI)", "Command Line Interface (CLI)", "Natural Language Interface", "WIMP Interface"],
    answer: 1,
  },
  {
    question: "What is the purpose of a driver in an operating system?",
    options: [
      "To control the speed of the processor",
      "To manage user accounts",
      "To translate data between computer and peripherals",
      "To create backup copies of files",
    ],
    answer: 2,
  },
  {
    question: "What is an interrupt in computing?",
    options: [
      "A type of software application",
      "A signal sent to the processor telling it something needs attention",
      "A method of shutting down the computer",
      "A type of memory storage",
    ],
    answer: 1,
  },
  {
    question: "What is the first program loaded when a computer starts?",
    options: ["Operating System", "Firmware", "Bootstrap", "Application Software"],
    answer: 2,
  },
  {
    question: "Which of the following is a characteristic of high-level programming languages?",
    options: ["Uses binary code only", "Is machine dependent", "Uses human-language style words", "Cannot be portable"],
    answer: 2,
  },
  {
    question: "What type of language uses mnemonics and allows direct manipulation of hardware?",
    options: ["High-level language", "Assembly language", "Natural language", "Machine code"],
    answer: 1,
  },
  {
    question: "What is the main function of an interpreter?",
    options: [
      "To compile entire programs at once",
      "To convert code line by line during execution",
      "To manage memory allocation",
      "To create user interfaces",
    ],
    answer: 1,
  },
  {
    question: "Which feature of an IDE helps predict future actions when writing code?",
    options: ["Syntax checking", "Line numbering", "Autocomplete", "Debugging tools"],
    answer: 2,
  },
  {
    question: "What is the purpose of keyword highlighting in an IDE?",
    options: ["To make the code execute faster", "To support readability and help spot errors", "To compress the code", "To translate the code"],
    answer: 1,
  },
  {
    question: "What is a drawback of using an interpreter?",
    options: [
      "Cannot show errors line by line",
      "Requires recompilation of entire program",
      "Slower execution due to line-by-line translation",
      "Cannot debug easily",
    ],
    answer: 2,
  },
  {
    question: "Which type of software manages the running of hardware and other software?",
    options: ["Application software", "System software", "Utility programs", "User interfaces"],
    answer: 1,
  },
  {
    question: "What is the role of an Interrupt Handler (IH)?",
    options: ["To execute program code", "To manage file systems", "To organize interrupts based on priorities", "To create user accounts"],
    answer: 2,
  },
  {
    question: "Which type of translator converts assembly language to machine code?",
    options: ["Compiler", "Interpreter", "Assembler", "Debugger"],
    answer: 2,
  },
  {
    question: "What is a benefit of using a compiler?",
    options: ["Immediate error reporting", "Line-by-line execution", "Code can be well optimized", "No need for machine code"],
    answer: 2,
  },
  {
    question: "Which of the following is an example of system software?",
    options: ["Word processor", "Spreadsheet", "Operating system", "Web browser"],
    answer: 2,
  },
  {
    question: "What happens when a high-priority interrupt occurs while the processor is handling a low-priority task?",
    options: [
      "The high-priority interrupt is ignored",
      "Both tasks are processed simultaneously",
      "The current task is stored and the interrupt is handled",
      "The system crashes",
    ],
    answer: 2,
  },
  {
    question: "Which of the following is true about machine code?",
    options: ["It is easily readable by humans", "It is portable across different computers", "It uses only binary (1s and 0s)", "It requires no translation"],
    answer: 2,
  },
];
