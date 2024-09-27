import React, { useState } from "react";

const gugudanArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Gugudan() {
    const options = [
        { id:2, value: 2, label: 2, key: 2},
        { id:3, value: 3, label: 3, key: 3},
        { id:4, value: 4, label: 4, key: 4},
        { id:5, value: 5, label: 5, key: 5},
        { id:6, value: 6, label: 6, key: 6},
        { id:7, value: 7, label: 7, key: 7},
        { id:8, value: 8, label: 8, key: 8},
        { id:9, value: 9, label: 9, key: 9},
    ];

    const [selectedDan, setSelectedDan] = useState(2);

    const handleChange = (event) => {
        setSelectedDan(Number(event.target.value));
    };

    return (
        <div>
            
            <h1>구구단 숫자 선택</h1>
            <select value={selectedDan} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <table style={{ border: "1px solid", borderCollapse: "collapse", marginTop: "10px" }}>
                <thead>
                    <tr style={{ border: "1px solid" }}>
                        <th style={{ border: "1px solid" }} colSpan={5}>{selectedDan}단</th>
                    </tr>
                </thead>
                <tbody>
                    {gugudanArr.map((num) => (
                        <tr key={num} style={{ border: "1px solid" }}>
                            <td style={{ border: "1px solid" }}>{selectedDan}</td>
                            <td style={{ border: "1px solid" }}>*</td>
                            <td style={{ border: "1px solid" }}>{num}</td>
                            <td style={{ border: "1px solid" }}>=</td>
                            <td style={{ border: "1px solid" }}>{selectedDan * num}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Gugudan;