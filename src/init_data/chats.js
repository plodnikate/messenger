import {v4} from 'uuid';

const dateTime = 1332503892588;

const chats = [
    {id: v4(), name: "Alice Jo"},
    {id: v4(), name: "Josefina"},
    {id: v4(), name: "Valazquenz"},
    {id: v4(), name: "Barrera"}
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