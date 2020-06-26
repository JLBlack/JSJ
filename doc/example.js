async function someLibrary() {
    return 'ok';
}

async function go() {
    const result = await someLibrary();
    return result + '! Shana wants the bunny back bitches!';
}

go().then(console.log);