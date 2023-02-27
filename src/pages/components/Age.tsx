export default function Age() {
    const today = new Date()
    const thisBirthday = new Date(today.getFullYear(), 11 - 1, 19)

    let age = today.getFullYear() - 2001
    if (today < thisBirthday) {
        age--;
    }

    return (
        <>
            {age}
        </>
    )
}