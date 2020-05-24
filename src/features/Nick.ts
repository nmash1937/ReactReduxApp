type NickProps = {
    age: number;
}

export function Nick(props: NickProps) {
    return "nick is "+props.age;
}