'use client';
import React, { useState } from "react";

const CareerSection = () => {
    // Example: 3 rows, 5 columns
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(5);
    // Each box can have a position and content
    const [boxes, setBoxes] = useState(
        Array.from({ length: rows * cols }, (_, idx) => ({
            row: Math.floor(idx / cols) + 1,
            col: (idx % cols) + 1,
            content: "",
        }))
    );

    // Expandable: Add a new row
    const addRow = () => {
        const newRow = Array.from({ length: cols }, (_, i) => ({
            row: rows + 1,
            col: i + 1,
            content: "",
        }));
        setBoxes([...boxes, ...newRow]);
        setRows(rows + 1);
    };

    // Expandable: Add a new column
    const addCol = () => {
        const newBoxes = boxes.map((box) => ({
            ...box,
            // If last col, add a new box after this row
        }));
        for (let r = 1; r <= rows; r++) {
            newBoxes.splice(r * cols + (r - 1), 0, {
                row: r,
                col: cols + 1,
                content: "",
            });
        }
        setBoxes(newBoxes);
        setCols(cols + 1);
    };

    // Handle content change
    const handleContentChange = (idx: number, value: string) => {
        const newBoxes = [...boxes];
        newBoxes[idx].content = value;
        setBoxes(newBoxes);
    };

    return (
        <section className="p-8">
            <div className="mb-4 flex gap-2">
                <button onClick={addRow} className="px-2 py-1 bg-orange-200 rounded">Add Row</button>
                <button onClick={addCol} className="px-2 py-1 bg-orange-200 rounded">Add Column</button>
            </div>
            <div
                className="grid gap-4"
                style={{
                    gridTemplateColumns: `repeat(${cols}, minmax(120px, 1fr))`,
                }}
            >
                {boxes.map((box, idx) => (
                    <div
                        key={`${box.row},${box.col}`}
                        className="relative border rounded p-2 bg-white shadow"
                    >
                        <span className="absolute top-1 right-2 text-xs text-gray-400 font-mono">
                            {box.row}, {box.col}
                        </span>
                        <textarea
                            className="w-full h-20 resize-none border-none outline-none bg-transparent"
                            placeholder="Position"
                            value={box.content}
                            onChange={e => handleContentChange(idx, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerSection;
