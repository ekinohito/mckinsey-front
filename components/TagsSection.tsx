import { Tag } from "../typings/Supplier";

export function TagsSection({ tags }: { tags: Tag[] }) {
    return (
        <section className="flex flex-row flex-wrap">
            {tags.map(tag => (
                <div
                    key={tag.text}
                    className="m-1 px-3 py-0.5 border-2 rounded-full text-sm cursor-help"
                    style={{ color: tag.color, borderColor: tag.color }}
                    title={tag.hint}
                >
                    {tag.text}
                </div>
            ))}
        </section>
    )
}