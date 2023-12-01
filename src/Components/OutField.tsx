import CSS from 'csstype'
import { useState, useEffect } from 'react'

const outPutStyle: CSS.Properties = {
    width: '30%',
    height: '200px',
    outline: 'none',

}
interface SetResultProps {
    resProps: { red: string, green: string, blue: string }
    setResArray: (value: { red: string, green: string, blue: string }) => void;
}
export const OutField: React.FC<SetResultProps> = ({ resProps }) => {
    const [resArray, setResArray] = useState<{ red: string, green: string, blue: string }>(resProps);
    useEffect(() => {
        setResArray(resProps)
        // setResArray([1, 2, 3, 4, 5])
    }, [resProps])

    return (
        <>
            <textarea style={outPutStyle} readOnly={true} value={JSON.stringify(resArray)}></textarea>
        </>
    )
}