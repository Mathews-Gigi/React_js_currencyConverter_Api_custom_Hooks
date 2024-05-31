

import { useState, useEffect } from "react";

function useCurrencyinfo(baseCurrency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${baseCurrency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[baseCurrency]))
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [baseCurrency]);

    return data;
}

export default useCurrencyinfo;

