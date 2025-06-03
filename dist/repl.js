import { createInterface } from 'node:readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Hello, please type a word!',
});
export function cleanInput(input) {
    const arr = input.trim().split(/\s+/);
    return arr;
}
export function startREPL() {
    rl.prompt();
    rl.on('line', (input) => {
        if (input === '') {
            rl.prompt();
        }
        const wordsTyped = cleanInput(input);
        console.log(`Your command was: ${wordsTyped[0].toLocaleLowerCase()}`);
        rl.prompt();
    });
}
