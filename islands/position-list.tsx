import { useEffect, useState } from "preact/hooks";

export default function PositionList(params) {
    let { positions } = params;
    let [length] = useState(positions.length);
    return (
        <>
            <div class="grid grid-cols-2 gap-2">
                {positions.map((p, i) => {
                    if (i < length) {
                        return (
                            <img src={p.startsWith("http") || p.startsWith("/") ? p : atob(p)} class="rounded mx-auto block" />
                        );
                    }
                })}
            </div>
        </>
    );
}
