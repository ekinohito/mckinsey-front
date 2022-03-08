import convert from "../utils/convert"

function colorOfRating(rating?: number | string) {
    if (!rating) return 'no'
    if (typeof rating === "string") return "no"
    switch (true) {
        case rating >= 6.67:
            return 'green'
        case rating >= 3.34:
            return 'yellow'
        case rating >= 0:
            return 'red'
        default:
            return 'no'
    }
}

export default function InfoCard({title, rating, details}: {title: string, rating?: number | string, details: {info?: string, key: string, value: string}[]}) {
    const displayRating = rating ? convert(rating) : undefined
    const ratings = {
        red: <span className="text-red-200">{displayRating}</span>,
        yellow: <span className="text-yellow-200">{displayRating}</span>,
        green: <span className="text-green-200">{displayRating}</span>,
        no: <span className="text-gray-200">{displayRating}</span>,
    }
    const color = colorOfRating(rating && +rating)
    return (
        <div className="p-12 bg-[#011631] text-white flex flex-col">
            <div className="flex flex-row justify-between items-center mb-4">
                <div className="text-2xl">{title}</div>
                <div className="text-6xl ml-3">{ratings[color]}</div>
            </div>
            <div className="text-xl text-gray-400 space-y-2">
                {details.map(detail => (
                    <div className="flex flex-row items-center">
                        {detail.info && <span
                            title={detail.info}
                            className="border-2 border-gray-400 rounded-full shrink-0 w-5 text-center h-5 text-xs inline-block mr-2 select-none cursor-default">?</span>}
                        {detail.key}: {convert(detail.value)}
                    </div>
                ))}
            </div>
        </div>
    )
}