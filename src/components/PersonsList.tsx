type PersonsListProps = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonsList = (props: PersonsListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}