import {v4} from 'uuid';
import eric from "../img/avatars/erik.jpg";
import alexander from "../img/avatars/alexander.jpg";
import alice from "../img/avatars/alice.jpg";
import michael from "../img/avatars/michael.jpg";

const dateTime = 1332503892588;

const chats = [
    {id: v4(), name: "Alexander", src: alexander },
    {id: v4(), name: "Alice", src: alice},
    {id: v4(), name: "Erik", src: eric},
    {id: v4(), name: "Michael", src: michael}
];

const messages = [
    {
        id: v4(),
        text:'hello',
        time: dateTime,
        fromMe: true
    },
    {
        id: v4(),
        text:'hay',
        time: dateTime,
        fromMe: false
    },
    {
        id: v4(),
        text:'how are you?',
        time: dateTime,
        fromMe: true
    },
    {
        id: v4(),
        text:'best of all',
        time: dateTime,
        fromMe: false
    },
];


const result = chats.map((chat) => ({
    ...chat,
    messages: [
        ...messages
    ]
}));

export default result;