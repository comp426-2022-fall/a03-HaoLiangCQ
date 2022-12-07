export function roll(sides, dice, rolls) {
    const end = []
    for(let i = 0; i < rolls; i++) {
        let count = 0
        for(let j = 0; j < dice; j++) {
            count += Math.floor(Math.random() * sides) + 1;
        }
        end.push(count);
    }
    return {"sides": sides, "dice": dice, "rolls": rolls, "results": end};
}