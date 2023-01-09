import { COURSE_STACK, TCourse, TStudant } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]

export const students : TStudant[]=[{
    id: "1",
    name: "Gleice",
    age: 21
},{
    id: "02",
    name: "Pedro",
    age: 25
}]