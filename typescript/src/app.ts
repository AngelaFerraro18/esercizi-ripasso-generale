//alias Person

type Person = {
    readonly id: number,
    readonly name: string,
    birth_year: number,
    death_year?: number,
    biography: string,
    image: string
}


//alias Actress

type Actress = Person & {
    most_famous_movies: [string, string, string],
    awards: string,
    nationality:
    | 'American'
    | 'British'
    | 'Australian'
    | 'Israeli-American'
    | 'South African'
    | 'French'
    | 'Indian'
    | 'Israeli'
    | ' Spanish'
    | 'South Korean'
    | 'Chinese'
}


// funzione getActress 

function getActress(id: number): Promise<Actress | null> {

    return fetch(`http://localhost:3333/actresses/${id}`)
        .then(res => res.json())
        .then((data: Actress | null) => {
            console.log(data)
            return data ? data : null;
        })
        .catch(err => {
            console.error(err)
            return null;
        })

}

getActress(2).then(actress => {
    if (actress) {
        console.log("Attrice trovata:", actress);
    } else {
        console.log("Attrice non trovata");
    }
});


function getAllActresses(): Promise<Actress[]> {
    return fetch('http://localhost:3333/actresses')
        .then(res => res.json())
        .then((data: Actress[] | []) => data ? data : [])
        .catch(err => {
            console.error(err)
            return [];
        })
}

getAllActresses().then(actresses => console.log('Attrici:', actresses));


async function getActresses(ids: number[]): Promise<(Actress | null)[]> {
    const promises = ids.map(id => getActress(id));
    const results = await Promise.all(promises);

    return results;
}

(async () => {
    const actresses = await getActresses([1, 2, 3]);
    console.log(actresses);
})()